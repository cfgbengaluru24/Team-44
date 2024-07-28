const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require('@google/generative-ai');
const { GoogleAIFileManager } = require('@google/generative-ai/server');

// Ensure the API key is loaded correctly
const apiKey = process.env.API_KEY;

if (!apiKey) {
  console.error('GEMINI_API_KEY is not set in the environment variables.');
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(apiKey);
const fileManager = new GoogleAIFileManager(apiKey);

// Helper functions
async function uploadToGemini(filePath, mimeType) {
  const uploadResult = await fileManager.uploadFile(filePath, {
    mimeType,
    displayName: path.basename(filePath),
  });
  const file = uploadResult.file;
  console.log(`Uploaded file ${file.displayName} as: ${file.name}`);
  return file;
}

async function waitForFilesActive(files) {
  console.log('Waiting for file processing...');
  for (const name of files.map((file) => file.name)) {
    let file = await fileManager.getFile(name);
    while (file.state === 'PROCESSING') {
      process.stdout.write('.');
      await new Promise((resolve) => setTimeout(resolve, 10000));
      file = await fileManager.getFile(name);
    }
    if (file.state !== 'ACTIVE') {
      throw Error(`File ${file.name} failed to process`);
    }
  }
  console.log('...all files ready\n');
}

// Initialize router
const router = express.Router();

// Ensure the uploads directory exists
const uploadDir = 'uploads';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    // Save file with .pdf extension
    cb(null, Date.now() + '.pdf');
  },
});

const upload = multer({ storage: storage });

// Define the POST route
router.post('/upload', upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).send({ error: 'No file uploaded' });
  }

  const filePath = path.join(__dirname, '../uploads', req.file.filename);
  const mimeType = req.file.mimetype;

  try {
    const files = [await uploadToGemini(filePath, mimeType)];
    await waitForFilesActive(files);

    const model = genAI.getGenerativeModel({
      model: 'gemini-1.5-flash',
    });

    const generationConfig = {
      temperature: 1,
      topP: 0.95,
      topK: 64,
      maxOutputTokens: 8192,
      responseMimeType: 'text/plain',
    };

    const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: 'user',
          parts: [
            {
              text: 'I will provide you with the resume. You should evaluate it and give a rate on a scale of 10. Include points for improvement, things needed to be learned, and added. Provide the response in JSON format with "rate" and "response".',
            },
          ],
        },
        {
          role: 'model',
          parts: [
            {
              text: 'Please provide me with the resume you would like me to evaluate. I will then provide you with a JSON formatted response including:\n\n* **rate**:  A score out of 10 for the overall quality of the resume.\n* **response**:  Detailed feedback on strengths, weaknesses, and specific areas for improvement. This will include suggestions for:\n    * **Content**:  Information to add, remove, or re-organize.\n    * **Formatting**:  Layout, font choices, and visual appeal.\n    * **Skills**:  Specific skills to learn or highlight.\n    * **Keywords**:  Relevant keywords for your field to include in your resume and cover letter.',
            },
          ],
        },
        {
          role: 'user',
          parts: [
            {
              fileData: {
                mimeType: files[0].mimeType,
                fileUri: files[0].uri,
              },
            },
          ],
        },
      ],
    });

    const result = await chatSession.sendMessage('Give me in a neat summary format. dont give in json. ');
   
    console.log(JSON.stringify(result));
    // console.log(result.response.candidates[0].parts[0]);
    
    res.json(result);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send({ error: 'File processing failed' });
  } finally {
    // Clean up the uploaded file
    fs.unlinkSync(filePath);
  }
});

module.exports = router;

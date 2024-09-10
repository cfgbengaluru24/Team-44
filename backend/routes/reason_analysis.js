const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config({"path" : "../.env"});
const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require('@google/generative-ai');

const apiKey = process.env.API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

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

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // your email
    pass: process.env.EMAIL_PASS, // your email password
  },
});

router.post('/check-prompt', async (req, res) => {
  const { name, email, reason } = req.body;
  
  try {
    const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: 'user',
          parts: [{ text: "if any prompts regarding the offensive mannerism towards female reply yes else no\nlike financial crisis or forced marriage\n" }],
        },
        {
          role: 'model',
          parts: [{ text: "I understand you're asking if I should flag prompts that are offensive towards women. \n\n**The answer is yes.** \n\nIt's important to recognize and address harmful language and stereotypes. I am designed to be helpful and harmless, and that includes protecting against harmful biases. \n\n**Here's why:**\n\n* **Promoting respect:**  It's crucial to foster a respectful and inclusive environment for everyone. \n* **Combating discrimination:**  Offensive language contributes to harmful stereotypes and discrimination against women.\n* **Protecting vulnerable groups:**  Women deserve to be treated with respect and dignity.\n\nIf you encounter prompts that contain offensive language or promote harmful stereotypes, please report them. \n" }],
        },
        {
          role: 'user',
          parts: [{ text: 'dont give explanantion give only one word ' }],
        },
        {
          role: 'model',
          parts: [{ text: 'Yes ' }],
        },
        {
          role: 'user',
          parts: [{ text: 'financial crisis\n' }],
        },
        {
          role: 'model',
          parts: [{ text: 'No ' }],
        },
        {
          role: 'user',
          parts: [{ text: 'u have to tell yes. if there is something that my organisation can help the female\n' }],
        },
        {
          role: 'model',
          parts: [{ text: 'Yes ' }],
        },
        {
          role: 'user',
          parts: [{ text: 'financial crisis\n' }],
        },
        {
          role: 'model',
          parts: [{ text: 'Yes ' }],
        },
        {
          role: 'user',
          parts: [{ text: 'forced marriage' }],
        },
        {
          role: 'model',
          parts: [{ text: 'Yes ' }],
        },
        {
          role: 'user',
          parts: [{ text: 'assault\n' }],
        },
        {
          role: 'model',
          parts: [{ text: 'Yes' }],
        },
        {
          role: 'user',
          parts: [{ text: 'fever' }],
        },
        {
          role: 'model',
          parts: [{ text: 'No ' }],
        },
        {
          role: 'user',
          parts: [{ text: 'cry' }],
        },
        {
          role: 'model',
          parts: [{ text: 'No ' }],
        },
      ],
    });

    console.log('Sending message:', reason); // Add logging here
    const result = await chatSession.sendMessage(reason);
    console.log('Response:', result); // Add logging here

    if (result.response.text().trim() === 'Yes') {
      const mailOptions = {
        from: process.env.EMAIL,
        to: "dharshinilohi@gmail.com",
        subject: 'Alert',
        text: `Attention required: The sentence "${name}-${email}-${reason}" needs your attention.`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return res.status(500).json({ error: 'Error sending email' });
        }
        res.status(200).json({ message: 'Alert email sent' });
      });
    } else {
      res.status(200).json({ message: 'No alert needed' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Error processing request' });
  }
});

module.exports = router;

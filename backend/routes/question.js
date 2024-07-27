require('dotenv').config(); // Load environment variables

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Question = require('../models/questionSchema'); // Correct the import to match naming conventions

// Route to add a question
router.post('/question', async (req, res) => {
    const { question, o1, o2, o3, o4, correct_ans } = req.body;

    try {
        const newQuestion = new Question({ question, o1, o2, o3, o4, correct_ans }); // Create an instance of the schema
        await newQuestion.save(); // Save to the database
        res.status(200).json({ message: 'Question added successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message }); // Return only the error message
    }
});


// Route to get 15 random questions
router.get('/questionsender', async (req, res) => {
    try {
        const questions = await Question.aggregate([{ $sample: { size: 15 } }]); // Fetch 15 random questions
        res.status(200).json(questions);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// To evaluate the answer


// Route to evaluate answers and calculate total marks
router.post('/evaluate', async (req, res) => {
    const { answers } = req.body; // Expect an array of { questionId, userAnswer }

    if (!Array.isArray(answers)) {
        return res.status(400).json({ error: 'Invalid input, expected an array of answers' });
    }

    try {
        let totalMarks = 0;

        for (let answer of answers) {
            const question = await Question.findById(answer.questionId);

            if (question && question.correct_ans === answer.userAnswer) {
                totalMarks += 1; // Increment the total marks for each correct answer
            }
        }

        res.status(200).json({ totalMarks });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Route to delete all questions
router.delete('/deleteAllQuestions', async (req, res) => {
    try {
        await Question.deleteMany({});
        res.status(200).json({ message: 'All questions deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router; // Export the router

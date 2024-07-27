const mongoose = require('mongoose');
const { Schema } = mongoose;

const questionSchema = new Schema({
    question: { type: String, required: true },
    o1: { type: String, required: true },
    o2: { type: String, required: true },
    o3: { type: String, required: true },
    o4: { type: String, required: true },
    correct_ans: { type: String, required: true }
});

module.exports = mongoose.model('Question', questionSchema); // Use singular model name

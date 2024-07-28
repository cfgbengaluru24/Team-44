import React, { useState } from 'react';
import axios from 'axios';
// import { useHistory } from 'react-router-dom';

function QuestionForm() {
  const [numQuestions, setNumQuestions] = useState(0);
  const [questions, setQuestions] = useState([]);
//   const history = useHistory(); // For redirection

  const handleNumQuestionsChange = (event) => {
    const num = parseInt(event.target.value, 10);
    setNumQuestions(num);

    // Ensure that questions array length matches the number of questions input
    if (num > questions.length) {
      setQuestions([...questions, ...Array(num - questions.length).fill({})]);
    } else {
      setQuestions(questions.slice(0, num));
    }
  };

  const handleQuestionChange = (index, field, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index] = { ...updatedQuestions[index], [field]: value };
    setQuestions(updatedQuestions);
  };

  const handleSubmit = async () => {
    if (numQuestions < 1) {
      alert('You must enter at least 1 questions.');
      return;
    }

    const formattedQuestions = questions.map(q => ({
      question: q.question,
      o1: q.optionA,
      o2: q.optionB,
      o3: q.optionC,
      o4: q.optionD,
      correct_ans: q.correctAnswer
    }));

    try {
      const response = await axios.post('http://localhost:4000/api/question/question', { questions: formattedQuestions });
      console.log(response.data);
    } catch (error) {
      console.error('Error submitting questions:', error);
    }
  };

  const handleDeleteAll = async () => {
    try {
      await axios.delete('http://localhost:4000/api/question/deleteAllQuestions'); // Adjust the endpoint if necessary
      setQuestions([]); // Clear the form
      setNumQuestions(0); // Reset number of questions
      alert('All questions deleted successfully');
     
    } catch (error) {
      console.error('Error deleting all questions:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md mt-12">
      <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">Question Form</h1>
      <div className="mb-6">
        <label htmlFor="numQuestions" className="block text-lg font-semibold mb-2 text-gray-700">Number of Questions:</label>
        <input
          type="number"
          id="numQuestions"
          value={numQuestions}
          onChange={handleNumQuestionsChange}
          className="w-full p-2 border border-gray-300 rounded-lg"
          min="0"
        />
      </div>

      {Array.from({ length: numQuestions }, (_, index) => (
        <div key={index} className="mb-6 p-4 bg-white border border-gray-300 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Question {index + 1}</h2>

          <label htmlFor={`question-${index}`} className="block text-sm font-medium mb-2 text-gray-600">Question:</label>
          <input
            type="text"
            id={`question-${index}`}
            value={questions[index]?.question || ''}
            onChange={(e) => handleQuestionChange(index, 'question', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg mb-4"
          />

          <label htmlFor={`optionA-${index}`} className="block text-sm font-medium mb-2 text-gray-600">Option A:</label>
          <input
            type="text"
            id={`optionA-${index}`}
            value={questions[index]?.optionA || ''}
            onChange={(e) => handleQuestionChange(index, 'optionA', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg mb-4"
          />

          <label htmlFor={`optionB-${index}`} className="block text-sm font-medium mb-2 text-gray-600">Option B:</label>
          <input
            type="text"
            id={`optionB-${index}`}
            value={questions[index]?.optionB || ''}
            onChange={(e) => handleQuestionChange(index, 'optionB', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg mb-4"
          />

          <label htmlFor={`optionC-${index}`} className="block text-sm font-medium mb-2 text-gray-600">Option C:</label>
          <input
            type="text"
            id={`optionC-${index}`}
            value={questions[index]?.optionC || ''}
            onChange={(e) => handleQuestionChange(index, 'optionC', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg mb-4"
          />

          <label htmlFor={`optionD-${index}`} className="block text-sm font-medium mb-2 text-gray-600">Option D:</label>
          <input
            type="text"
            id={`optionD-${index}`}
            value={questions[index]?.optionD || ''}
            onChange={(e) => handleQuestionChange(index, 'optionD', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg mb-4"
          />

          <label htmlFor={`correctAnswer-${index}`} className="block text-sm font-medium mb-2 text-gray-600">Correct Answer:</label>
          <input
            type="text"
            id={`correctAnswer-${index}`}
            value={questions[index]?.correctAnswer || ''}
            onChange={(e) => handleQuestionChange(index, 'correctAnswer', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
      ))}

      <button
        onClick={handleSubmit}
        className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
      >
        Submit
      </button>

      <button
        onClick={handleDeleteAll}
        className="w-full bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
      >
        Delete All
      </button>
    </div>
  );
}

export default QuestionForm;

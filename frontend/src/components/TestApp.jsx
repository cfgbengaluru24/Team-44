import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TestApp = () => {
  const [startTest, setStartTest] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // Example: 10 minutes timer
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]); // Array to store user answers
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/question/questionsender');
        if (response.data && Array.isArray(response.data)) {
          setQuestions(response.data.map((question) => ({
            question: question.question,
            options: [question.o1, question.o2, question.o3, question.o4],
            correctAnswer: question.correct_ans, // Assuming correct_ans exists
          })));
          setAnswers(Array(response.data.length).fill(null)); // Initialize answers array
        } else {
          console.error('Invalid response data:', response.data);
        }
        setLoading(false); // Set loading to false after fetching questions
      } catch (error) {
        console.error('Error fetching questions:', error);
        setLoading(false); // Set loading to false even if there is an error
      }
    };

    fetchQuestions();
  }, []);

  const handleStartTest = () => {
    setStartTest(true);
  };

  useEffect(() => {
    if (startTest && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [startTest, timeLeft]);

  const handleOptionClick = (index) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = index;
    setAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:4000/api/question/evaluate', { answers });
      alert(`Test submitted! Your score: ${response.data.totalMarks}`);
    } catch (error) {
      console.error('Error submitting test:', error);
    }
  };

  if (loading) {
    return (
      <div className='flex justify-center items-center h-screen bg-[#E9EDC9]'>
        <div className='bg-white p-10 rounded-lg shadow-xl'>
          <h2 className='text-4xl font-bold mb-4'>Loading...</h2>
        </div>
      </div>
    );
  }

  if (!startTest) {
    return (
      <div className='flex justify-center items-center h-screen bg-[#E9EDC9]'>
        <div className='bg-white p-10 rounded-lg shadow-xl'>
          <h2 className='text-4xl font-bold mb-4'>Test Rules</h2>
          <ul className='text-xl mb-6'>
            <li>1. Each question has 4 options.</li>
            <li>2. You have a limited amount of time to complete the test.</li>
            <li>3. You can navigate between questions.</li>
            <li>4. Submit the test once you're done.</li>
          </ul>
          <button onClick={handleStartTest} className='text-white bg-[#697838] rounded-full px-5 py-3 hover:bg-[#5a6b2f]'>
            Start Test
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const options = currentQuestion ? currentQuestion.options : [];

  return (
    <div className='p-10 bg-[#E9EDC9] min-h-screen'>
      <div className='flex justify-between items-center mb-6'>
        <div className='text-xl'>
          <p>Questions Attempted: {answers.filter(answer => answer !== null).length}</p>
          <p>Questions Left: {questions.length - answers.filter(answer => answer !== null).length}</p>
        </div>
        <div className='text-xl'>
          <p>Time Left: {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60}</p>
        </div>
      </div>
      {questions.length > 0 && currentQuestion && (
        <div className='bg-white p-10 rounded-lg shadow-xl'>
          <h2 className='text-3xl font-bold mb-4'>{currentQuestion.question}</h2>
          <div className='grid gap-4'>
            {options?.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(index)}
                className={`p-3 rounded-lg ${answers[currentQuestionIndex] === index ? 'bg-[#697838] text-white' : 'bg-gray-200'}`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
      <div className='flex justify-between items-center mt-6'>
        <button onClick={handlePreviousQuestion} className='text-white bg-gray-500 rounded-full px-5 py-3 hover:bg-gray-700' disabled={currentQuestionIndex === 0}>
          Previous
        </button>
        <button onClick={handleNextQuestion} className='text-white bg-gray-500 rounded-full px-5 py-3 hover:bg-gray-700' disabled={currentQuestionIndex === questions.length - 1}>
          Next
        </button>
      </div>
      <div className='mt-10 flex justify-center'>
        <button onClick={handleSubmit} className='text-white bg-[#697838] rounded-full px-10 py-3 hover:bg-[#5a6b2f]'>
          Submit Test
        </button>
      </div>
    </div>
  );
};

export default TestApp;

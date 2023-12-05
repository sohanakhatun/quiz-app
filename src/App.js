import { useState } from "react";

const App = () => {
    const quizData = [
        {
            question: "Which language runs in a web browser?",
            a: "Java",
            b: "C",
            c: "Python",
            d: "JavaScript",
            correct: "d",
        },
        {
            question: "What does CSS stand for?",
            a: "Central Style Sheets",
            b: "Cascading Style Sheets",
            c: "Cascading Simple Sheets",
            d: "Cars SUVs Sailboats",
            correct: "b",
        },
        {
            question: "What does HTML stand for?",
            a: "Hypertext Markup Language",
            b: "Hypertext Markdown Language",
            c: "Hyperloop Machine Language",
            d: "Helicopters Terminals Motorboats Lamborginis",
            correct: "a",
        },
        {
            question: "What year was JavaScript launched?",
            a: "1996",
            b: "1995",
            c: "1994",
            d: "none of the above",
            correct: "b",
        },
    ];

  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const handleButtonClick = () => {
    // check if the answer is equal to correct option
    if (selectedAnswer === quizData[currentQuiz].correct) {
        setScore(score+1);
    }
    // move to the next question
   setCurrentQuiz(currentQuiz+1);

   setSelectedAnswer('');
   
  };

  return (
    currentQuiz < quizData.length ? 
    <div className="bg-gradient-to-b from-blue-200 to-blue-400 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-md overflow-hidden w-96">
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-4" id="question">
            {quizData[currentQuiz].question}
          </h2>
          <ul>
          {['a', 'b', 'c', 'd'].map((option) => (
            <li key={option}>
              <input
                type="radio"
                name="answer"
                id={option}
                className="answer"
                checked={selectedAnswer === option}
                onChange={() => setSelectedAnswer(option)}
              />
              <label htmlFor={option}>{quizData[currentQuiz][option]}</label>
            </li>
          ))}
        </ul>
        </div>
        <button
          className="bg-purple-600 text-white py-3 font-bold text-lg w-full hover:bg-purple-700 focus:outline-none"
          id="submit"
          onClick={handleButtonClick}
        >
          Submit
        </button>
      </div>
    </div> : 
          <div className="p-8">
          <h2>You answered {score}/{quizData.length} questions correctly</h2>
          <button
            onClick={() => setCurrentQuiz(0)}
            className="bg-purple-600 text-white py-3 px-6 font-bold text-lg mt-4 hover:bg-purple-700 focus:outline-none"
          >
            Reload
          </button>
        </div>
  );
};

export default App;


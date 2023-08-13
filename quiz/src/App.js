import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const questions = [
    {
      questionText: "What is the national flower of Japan??",
      answerOptions: [
        {
          answerText: "Magnolia Flower", isCorrect: false
        },
        {
          answerText: "Cherry Blossom", isCorrect: true
        },
        {
          answerText: "Kawazu Sakura", isCorrect: false
        },
        {
          answerText: "Plum Blossom", isCorrect: false
        }
      ]
    },
    {
      questionText: "How many languages are written from right to left?",
      answerOptions: [
        {
          answerText: "10", isCorrect: false
        },
        {
          answerText: "11", isCorrect: false
        },
        {
          answerText: "12", isCorrect: true
        },
        {
          answerText: "13", isCorrect: false
        }
      ]
    },
    {
      questionText: "Which is the only fruit that doesn't ripen after it's picked?",
      answerOptions: [
        {
          answerText: "Apple", isCorrect: false
        },
        {
          answerText: "Orange", isCorrect: false
        },
        {
          answerText: "Pineapple", isCorrect: true
        },
        {
          answerText: "Strawberry", isCorrect: false
        }
      ]
    }
  ];
  // const [showAnswerAIsCorrect, setShowAnswerAIsCorrect] = useState(false);
  // const [showAnswerBIsCorrect, setShowAnswerBIsCorrect] = useState(false);
  // const [showAnswerCIsCorrect, setShowAnswerCIsCorrect] = useState(false);
  // const [showAnswerDIsCorrect, setShowAnswerDIsCorrect] = useState(false);

  // const [questionHasBeenAnswered, setQuestionHasBeenAnswered] = useState([false, false, false]);
  const [questionStates, setQuestionStates] = useState(
    questions.map(() => ({
      showAnswerIsCorrect: [false, false, false, false],
      questionHasBeenAnswered: false
    }))
  );

  const evaluateChoice = (answerOption, isCorrect, questionIndex) => {
    // when the button is clicked, show whether or not the answer is correct 
    const newQuestionStates = [...questionStates]; // this is how we make a copy of the state without modifying it directly 
    const newQuestionState = { ...newQuestionStates[questionIndex]}; // this gets the particular state 
    // first: set the appropriate answer to show 
    const answerIndex = 0; // if none of the below are true, then we never reassign - so we have selected A by default
    if(answerOption == "B") {
      answerIndex = 1;
    }
    else if(answerOption == "C") {
      answerIndex = 2;
    }
    else if(answerOption == "D") {
      answerIndex = 3;
    }

    newQuestionState.showAnswerIsCorrect[answerIndex] = true;
    // second: set questionHasBeenAnswered to true 
    newQuestionState.questionHasBeenAnswered = true;

    // make the reassignment 
    setQuestionStates(newQuestionState);
  }

  return (
    <div className="App">
      <p>Quiz</p>
      <header className="App-header">
        {
          questions.map((data, index) =>
            <div key={index}>
              <p>{data.questionText}</p>
              {data.answerOptions.map((answer, answerIndex) => (
                <div className="answerRow" key={answerIndex}>
                  <button onClick={() => evaluateChoice(String.fromCharCode(65+answerIndex), answer.isCorrect, index)}>
                    {String.fromCharCode(65+answerIndex)}
                  </button>
                  {questionStates[index].showAnswerIsCorrect[answerIndex] && 
                  questionStates[index].questionHasBeenAnswered && (
                    <p>
                      Your answer is {" "}
                    {answer.isCorrect ? "correct" : "incorrect"}
                    </p>
                  )}
                  <p>{answer.answerText}</p>
                </div>
              ))}
            </div>
          )
        }

      </header>
      <p>By: Mena</p>
    </div>
  );
}

export default App;
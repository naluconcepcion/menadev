import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import {useEffect} from 'react';

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
  const [showAnswerAIsCorrect, setShowAnswerAIsCorrect] = useState(false);
  const [showAnswerBIsCorrect, setShowAnswerBIsCorrect] = useState(false);
  const [showAnswerCIsCorrect, setShowAnswerCIsCorrect] = useState(false);
  const [showAnswerDIsCorrect, setShowAnswerDIsCorrect] = useState(false);

  const [questionHasBeenAnswered, setQuestionHasBeenAnswered] = useState([false, false, false]);

useEffect(() => {
  console.log(count);
  increaseByOne();
  console.log(count)
}, [])

const evaluateChoice = (answerOption, isCorrect, questionIndex) => {
  // when the button is clicked, show whether or not the answer is correct 
console.log ("here")
  // check all of A, B, C, D 
  // define the set show answer for each one 
  // create hte variable for each one
  // choose which variable to use as a comparison depending on if you're clicking answer a, b, c, or d
  if(answerOption === "A")
   {
    setShowAnswerAIsCorrect(true);
    setQuestionHasBeenAnswered((questionHasBeenAnswered)=>(questionHasBeenAnswered[questionIndex]=true))
  } 
 
  if(answerOption === "B") {
    setShowAnswerBIsCorrect(true);
    setQuestionHasBeenAnswered((questionHasBeenAnswered)=>(questionHasBeenAnswered[questionIndex]=true))
  } 
  
  if(answerOption === "C") {
    setShowAnswerCIsCorrect(true);
    setQuestionHasBeenAnswered((questionHasBeenAnswered)=>(questionHasBeenAnswered[questionIndex]=true))
  } 
  
  if(answerOption === "D") {
    setShowAnswerDIsCorrect(true);
    setQuestionHasBeenAnswered((questionHasBeenAnswered)=>(questionHasBeenAnswered[questionIndex]=true))
  } 
}

const increaseByOne = () => {
  const newCount = count + 1;
  setCount(newCount);
  console.log(count)
}
return (
  <div className="App">
    <p>Quiz</p>
    <header className="App-header">
     
      {
        
        questions.map((data,index)=>
        <div>
          <p>{data.questionText}</p>
          <div className="answerRow">
          <button key={index} onClick = {()=>evaluateChoice("A", data.answerOptions[0].isCorrect, index)}>A</button>
          {
            (showAnswerAIsCorrect && questionHasBeenAnswered[0]) && 
              (
                (data.answerOptions[0].isCorrect) ?
                (<p>Your answer is correct: </p>) :
                (<p>Your answer is incorrect: </p>)
                )
                
          }
        <p key={index}>{data.answerOptions[0].answerText}</p>
        </div>
        <div className="answerRow">
        <button key={index} onClick = {()=>evaluateChoice("B", data.answerOptions[1].isCorrect, index)}>B</button>
        {
            showAnswerBIsCorrect && 
              (
                data.answerOptions[1].isCorrect ?
                (<p>Your answer is correct: </p>) :
                (<p>Your answer is incorrect: </p>)
                )
                
          }
        <p key={index}>{data.answerOptions[1].answerText}</p> 
        </div>
        <div className="answerRow">
        <button key={index} onClick = {()=>evaluateChoice("C", data.answerOptions[2].isCorrect, index)}>C</button>
        {
            showAnswerCIsCorrect && 
              (
                data.answerOptions[2].isCorrect ?
                (<p>Your answer is correct: </p>) :
                (<p>Your answer is incorrect: </p>)
                )
                
          }
        <p key={index}>{data.answerOptions[2].answerText}</p> 
        </div>
        <div className="answerRow">
        <button key={index} onClick = {()=>evaluateChoice("D", data.answerOptions[3].isCorrect, index)}>D</button>
        {
            showAnswerDIsCorrect && 
              (
                data.answerOptions[3].isCorrect ?
                (<p>Your answer is correct</p>) :
                (<p>Your answer is incorrect</p>)
                )
                
          }
        <p key={index}>{data.answerOptions[3].answerText}</p> 
        </div>
        </div> 
        )
      }
     
    </header>
    <p>By: Mena</p>
  </div>
);
}

export default App;
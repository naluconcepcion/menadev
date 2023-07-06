import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import {useEffect} from 'react';

function App() {
  const [count, setCount] = useState(0);
  const questions = [
    {
      questionText: "What is cynophobia?",
      answerOptions: [
        {
          answerText: "The fear of rats", isCorrect: false
        },
        {
          answerText: "The fear of dogs", isCorrect: true
        },
        {
          answerText: "The fear of butterflies", isCorrect: false
        },
        {
          answerText: "The fear of cats", isCorrect: false
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
        answerText: "Blueberry", isCorrect: false
      }
    ]
  } 
]
useEffect(() => {
  console.log(count);
  increaseByOne();
  console.log(count)
}, [])

const evaluateChoice = (isCorrect) => {
  
}

const increaseByOne = () => {
  const newCount = count + 1;
  setCount(newCount);
  console.log(count)
}
return (
  <div className="App">

    <header className="App-header">
     
      {
        
        questions.map((data,index)=>
        <div>
          <p>{data.questionText}</p>
          <div className="answerRow">
          <button key={index} onClick = {()=>evaluateChoice(data.answerOptions[0].isCorrect)}>A</button>
        <p key={index}>{data.answerOptions[0].answerText}</p>
        </div>
        <div className="answerRow">
        <button key={index} onClick = {()=>evaluateChoice(data.answerOptions[1].isCorrect)}>B</button>
        <p key={index}>{data.answerOptions[1].answerText}</p> 
        </div>
        <div className="answerRow">
        <button key={index} onClick = {()=>evaluateChoice(data.answerOptions[2].isCorrect)}>C</button>
        <p key={index}>{data.answerOptions[2].answerText}</p> 
        </div>
        <div className="answerRow">
        <button key={index} onClick = {()=>evaluateChoice(data.answerOptions[3].isCorrect)}>D</button>
        <p key={index}>{data.answerOptions[3].answerText}</p> 
        </div>
        </div> 
        )
      }
     
    </header>
  </div>
);
}

export default App;
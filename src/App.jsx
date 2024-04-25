import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of Harry Potter in the movie?",
      answers: [
        {
          text: "Johnny Depp",
          correct: false,
        },
        {
          text: "Leonardo DiCaprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Radcliffe",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Which planet is known as the Red Planet?",
      answers: [
        {
          text: "Jupiter",
          correct: false,
        },
        {
          text: "Venus",
          correct: false,
        },
        {
          text: "Mars",
          correct: true,
        },
        {
          text: "Saturn",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Who is the author of the famous novel 'To Kill a Mockingbird'?",
      answers: [
        {
          text: "Ernest Hemingway",
          correct: false,
        },
        {
          text: "Harper Lee",
          correct: true,
        },
        {
          text: "F. Scott Fitzgerald",
          correct: false,
        },
        {
          text: "Mark Twain",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "Which chemical element has the symbol 'Na'?",
      answers: [
        {
          text: "Sodium",
          correct: true,
        },
        {
          text: "Nickel",
          correct: false,
        },
        {
          text: "Neon",
          correct: false,
        },
        {
          text: "Nitrogen",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Who wrote the play 'Romeo and Juliet'?",
      answers: [
        {
          text: "William Shakespeare",
          correct: true,
        },
        {
          text: "Charles Dickens",
          correct: false,
        },
        {
          text: "Jane Austen",
          correct: false,
        },
        {
          text: "Oscar Wilde",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "What is the largest mammal in the world?",
      answers: [
        {
          text: "African Elephant",
          correct: false,
        },
        {
          text: "Blue Whale",
          correct: true,
        },
        {
          text: "Giraffe",
          correct: false,
        },
        {
          text: "Polar Bear",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Which famous scientist developed the theory of relativity?",
      answers: [
        {
          text: "Isaac Newton",
          correct: false,
        },
        {
          text: "Albert Einstein",
          correct: true,
        },
        {
          text: "Galileo Galilei",
          correct: false,
        },
        {
          text: "Stephen Hawking",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "What is the capital city of Japan?",
      answers: [
        {
          text: "Beijing",
          correct: false,
        },
        {
          text: "Seoul",
          correct: false,
        },
        {
          text: "Tokyo",
          correct: true,
        },
        {
          text: "Shanghai",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Who painted the 'Mona Lisa'?",
      answers: [
        {
          text: "Vincent van Gogh",
          correct: false,
        },
        {
          text: "Leonardo da Vinci",
          correct: true,
        },
        {
          text: "Pablo Picasso",
          correct: false,
        },
        {
          text: "Michelangelo",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "What is the smallest country in the world?",
      answers: [
        {
          text: "Monaco",
          correct: false,
        },
        {
          text: "San Marino",
          correct: false,
        },
        {
          text: "Vatican City",
          correct: true,
        },
        {
          text: "Maldives",
          correct: false,
        },
      ],
    },
  ];
  

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;

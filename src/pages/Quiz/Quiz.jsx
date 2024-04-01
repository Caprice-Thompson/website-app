import React, { useState, useContext, useEffect } from "react";
import Axios from "axios";
import { QuizContext } from "../../Helpers/Contexts";
import decodeEntities from "../../Helpers/Decode";

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const { score, setScore, setGameState, questions, setQuestions } =
    useContext(QuizContext);

  useEffect(() => {
    getQuestions();
  }, []);

  function getQuestions() {
    Axios.get(
      "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple"
    )
      .then((res) => {
        console.log(res.data.results);
        setQuestions(res.data.results.map(decodeQuestion));
      })
      .catch((error) => {
        console.error("Error fetching questions:", error);
      });
  }

  const decodeQuestion = (question) => {
    question.question = decodeEntities(question.question);
    question.correct_answer = decodeEntities(question.correct_answer);
    question.incorrect_answers = question.incorrect_answers.map((answer) =>
      decodeEntities(answer)
    );
    return question;
  };

  function nextQuestion() {
    if (questions[currentQuestion].correct_answer === optionChosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  }

  function finishQuiz() {
    if (questions[currentQuestion].correct_answer === optionChosen) {
      setScore(score + 1);
    }
    setGameState("endScreen");
  }

  return (
    <div className="quiz-container">
      {questions.length > 0 && (
        <>
          <h2>{questions[currentQuestion].question}</h2>
          <div className="options">
            {questions[currentQuestion].incorrect_answers
              .concat(questions[currentQuestion].correct_answer)
              .map((option, index) => (
                <button
                  className={optionChosen === option ? "selected" : ""}
                  key={index}
                  onClick={() => setOptionChosen(option)}
                >
                  {option}
                </button>
              ))}
          </div>
          {currentQuestion === questions.length - 1 ? (
            <button onClick={finishQuiz}> Finish Quiz</button>
          ) : (
            <button onClick={nextQuestion}>Next Question </button>
          )}
        </>
      )}
    </div>
  );
}

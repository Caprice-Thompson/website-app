import React, { useState, useContext } from "react";
import { Questions } from "../../Helpers/QuestionBank";
import { QuizContext } from "../../Helpers/Contexts";

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const { score, setScore, setGameState } = useContext(QuizContext);

  function nextQuestion() {
    if (Questions[currentQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  }

  function finishQuiz() {
    if (Questions[currentQuestion].answer == optionChosen) {
      setScore(score + 1);
    }
    setGameState("endScreen");
  }
  return (
    <div className="quiz-container">
      <h2>{Questions[currentQuestion].prompt}</h2>
      <div className="options">
        <button onClick={() => setOptionChosen("optionA")}>
          {Questions[currentQuestion].optionA}
        </button>
        <button onClick={() => setOptionChosen("optionB")}>
          {Questions[currentQuestion].optionB}
        </button>
        <button onClick={() => setOptionChosen("optionC")}>
          {Questions[currentQuestion].optionC}
        </button>
        <button onClick={() => setOptionChosen("optionD")}>
          {Questions[currentQuestion].optionD}
        </button>
      </div>
      {currentQuestion == Questions.length - 1 ? (
        <button onClick={finishQuiz}> Finish Quiz</button>
      ) : (
        <button onClick={nextQuestion}>Next Question </button>
      )}
    </div>
  );
}

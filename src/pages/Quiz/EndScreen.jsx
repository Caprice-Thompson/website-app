import React, { useContext } from "react";
import { QuizContext } from "../../Helpers/Contexts";
import { Questions } from "../../Helpers/QuestionBank";
import "./Quiz.css";

export default function EndScreen() {
  const { score, setScore, setGameState } = useContext(QuizContext);

  function restartQuiz() {
    setGameState("menu");
    setScore(0);
  }
  return (
    <div className="end-screen-container">
      <h1>Quiz Finished</h1>
      <h3>
        {score}/{Questions.length}
      </h3>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
}

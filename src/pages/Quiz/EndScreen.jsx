import React, { useContext } from "react";
import { GameContext } from "../../Helpers/Contexts";
import "./Quiz.css";

export default function EndScreen() {
  const { score, setScore, setGameState, questions } = useContext(GameContext);

  function restartQuiz() {
    setGameState("menu");
    setScore(0);
  }
  return (
    <div className="end-screen-container">
      <h1>Quiz Finished</h1>
      <h3>
        {score}/{questions.length}
      </h3>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
}

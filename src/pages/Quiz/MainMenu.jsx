import React, { useState, useContext } from "react";
import { QuizContext } from "../../Helpers/Contexts";
import "./Quiz.css";

export default function MainMenu() {
  const { gameState, setGameState } = useContext(QuizContext);
  return (
    <div className="menu-container">
      <button
        onClick={() => {
          setGameState("quiz");
        }}
      >
        Start Quiz
      </button>
    </div>
  );
}

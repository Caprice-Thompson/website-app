import React, { useContext, useState } from "react";
import MainMenu from "./MainMenu";
import Quiz from "./Quiz";
import EndScreen from "./EndScreen";

import { QuizContext } from "../../Helpers/Contexts";

export default function QuizApp() {
  const [gameState, setGameState] = useState("menu");
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  return (
    <div className="quiz">
      <h1>Quiz App</h1>
      <QuizContext.Provider
        value={{
          gameState,
          setGameState,
          score,
          setScore,
          questions,
          setQuestions,
        }}
      >
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endScreen" && <EndScreen />}
      </QuizContext.Provider>
    </div>
  );
}

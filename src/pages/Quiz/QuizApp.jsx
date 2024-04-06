import React, { useContext, useState } from "react";
import MainMenu from "./MainMenu/MainMenu";
import Quiz from "./Quiz/Quiz";
import EndScreen from "./EndScreen/EndScreen";

import { GameContext } from "../../Helpers/Contexts";

export default function QuizApp() {
  const [gameState, setGameState] = useState("menu");
  const [questions, setQuestions] = useState([]);
  const [difficultyValue, setDifficultyValue] = useState("");
  const [category, setCategory] = useState("");
  const [score, setScore] = useState(0);
  return (
    <div className="quiz">
      <h1>Quiz App</h1>
      <GameContext.Provider
        value={{
          gameState,
          setGameState,
          score,
          setScore,
          questions,
          setQuestions,
          difficultyValue,
          setDifficultyValue,
          category,
          setCategory,
        }}
      >
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endScreen" && <EndScreen />}
      </GameContext.Provider>
    </div>
  );
}

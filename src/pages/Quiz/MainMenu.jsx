import React, { useState, useContext } from "react";
import { QuizContext } from "../../Helpers/Contexts";
import "./Quiz.css";
import Dropdown from "../../components/Dropdown/Dropdown";

export default function MainMenu() {
  const {
    gameState,
    setGameState,
    difficultyValue,
    setDifficultyValue,
    category,
    setCategory,
  } = useContext(QuizContext);

  const handleDifficultyDropdown = (event) => {
    setDifficultyValue(event.target.value);
  };

  const handleCategoryDropdown = (event) => {
    const selectedIndex = event.target.selectedIndex;
    const selectedValue = event.target.options[selectedIndex].value;
    setCategory(selectedValue);
    console.log(selectedValue);
  };
  console.log(difficultyValue);
  return (
    <div className="menu-container">
      <Dropdown
        id="selected-options"
        label="Categories"
        options={[
          "General Knowledge",
          "Science: Mathematics",
          "Mythology",
          "Entertainment: Film",
        ]}
        values={[9, 19, 20, 11]}
        handleDropdown={handleCategoryDropdown}
      />

      <Dropdown
        id="selected-options"
        label="Difficulty"
        options={["Easy", "Medium", "Hard", "Any Difficulty"]}
        values={["easy", "medium", "hard", ""]}
        handleDropdown={handleDifficultyDropdown}
      />
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

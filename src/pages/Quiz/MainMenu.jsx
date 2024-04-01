import React, { useState, useContext } from "react";
import { QuizContext } from "../../Helpers/Contexts";
import "./Quiz.css";
import Dropdown from "../../components/Dropdown";

export default function MainMenu() {
  const { gameState, setGameState } = useContext(QuizContext);
  const [dropdownValue, setDropdownValue] = useState("");

  const handleDropdown = (event) => {
    setDropdownValue(event.target.value);
  };
  return (
    <div className="menu-container">
      <Dropdown
        option={"General Knowledge"}
        option2={"Science: Mathematics"}
        option3={"Mythology"}
        option4={"Entertainment: Film"}
        handleDropdown={handleDropdown}
      />

      <Dropdown
        option={"Easy"}
        option2={"Medium"}
        option3={"Hard"}
        option4={"Any Difficulty"}
        handleDropdown={handleDropdown}
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

import Dropdown from "../../../components/Dropdown/Dropdown";
import React, { useState, useContext } from "react";
import { GameContext } from "../../../Helpers/Contexts";
import "./GameMenu.css";

export default function GameMenu() {
  const { setGameState } = useContext(GameContext);

  function playGame() {
    setGameState("tictactoe");
  }

  function onChange() {}
  return (
    <div className="game-menu-container">
      <h3>Please select the number of rounds to play:</h3>
      <Dropdown
        id="rounds"
        label="Choose rounds"
        options={["1", "3", "5", "10"]}
        values={["1", "3", "5", "10"]}
        handleDropdown={onChange}
      />
      <button onClick={playGame}> Play Game</button>
    </div>
  );
}

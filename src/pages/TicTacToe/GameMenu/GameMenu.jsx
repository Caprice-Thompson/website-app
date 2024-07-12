import Dropdown from "../../../components/Dropdown/Dropdown";
import React, { useContext } from "react";
import { GameContext } from "../../../Helpers/Contexts";
import "./GameMenu.css";

export default function GameMenu() {
  const { setGameState, setRounds, rounds } = useContext(GameContext);

  function playGame() {
    if (rounds !== "") setGameState("tictactoe");
  }

  function handleRounds(event) {
    setRounds(event.target.value);
  }
  return (
    <>
      <div className="game-menu-container">
        <h3 className="sub-header-name">
          Please select the number of rounds to play:
        </h3>
        <Dropdown
          id="rounds"
          label="Choose rounds"
          options={["1", "3", "5", "10"]}
          values={["1", "3", "5", "10"]}
          handleDropdown={handleRounds}
        />
        <button onClick={playGame}> Play Game</button>
      </div>
    </>
  );
}

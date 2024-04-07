import React, { useState, useContext } from "react";
import { GameContext } from "../../../Helpers/Contexts";
import TextInput from "../../../components/Input/TextInput";

export default function PlayerMenu() {
  const { setGameState, setPlayerOne, setPlayerTwo, playerOne, playerTwo } =
    useContext(GameContext);
  const [name, setName] = useState("");
  const [addClickCount, setAddClickCount] = useState(0);

  function handleClick() {
    if (name.trim() !== "") {
      if (!playerOne) {
        setPlayerOne(name.trim());
      } else if (!playerTwo) {
        setPlayerTwo(name.trim());
      }
      setName("");
      setAddClickCount((prevCount) => prevCount + 1);
    }
    if (addClickCount >= 1) {
      setGameState("gameMenu");
    }
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div className="player-menu-container">
      <h3>{!playerOne ? "Player One" : "Player Two"} please enter your name</h3>
      <TextInput
        id="player-input"
        type="text"
        value={name}
        onChange={handleChange}
      />

      <button onClick={handleClick}>Add</button>
    </div>
  );
}

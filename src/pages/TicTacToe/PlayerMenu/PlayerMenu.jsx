import React, { useState, useContext } from "react";
import { GameContext } from "../../../Helpers/Contexts";
import TextInput from "../../../components/Input/TextInput";

export default function PlayerMenu() {
  const { setGameState, setPlayerOne } = useContext(GameContext);
  const [name, setName] = useState("");

  function handleClick() {
    setName("");
    // store name
    //rest form
  }

  function handleNextClick() {
    setGameState("gameMenu");
  }

  function handleChange(event) {
    setPlayerOne(event.target.value);
  }
  return (
    <div className="player-menu-container">
      <h3>Player One please add your name</h3>
      <TextInput id="player-input" type="text" onChange={handleChange} />

      <button onClick={handleClick}>Add</button>
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
}

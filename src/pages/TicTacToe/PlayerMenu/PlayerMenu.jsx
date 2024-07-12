import React, { useState, useContext } from "react";
import { GameContext } from "../../../Helpers/Contexts";
import TextInput from "../../../components/Input/TextInput";
import Button from "../../../components/Button/Button.jsx";
import "./PlayerMenu.css";

export default function PlayerMenu() {
  const { setGameState, setPlayerOne, setPlayerTwo, playerOne, playerTwo } =
    useContext(GameContext);
  const [name, setName] = useState("");

  function handleClick() {
    if (name.trim() !== "") {
      if (!playerOne) {
        setPlayerOne(name.trim());
        setName("");
      } else if (!playerTwo) {
        setPlayerTwo(name.trim());
        setGameState("gameMenu");
      }
    }
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <>
      <Button />
      <div className="player-menu-container">
        <h3 className="sub-header-name">
          {!playerOne ? "Player one" : "Player two"} please enter your name
        </h3>
        <TextInput
          id="player-input"
          type="text"
          value={name}
          onChange={handleChange}
        />

        <button onClick={handleClick}>Add</button>
      </div>
    </>
  );
}

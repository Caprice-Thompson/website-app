import React from "react";
import { useState } from "react";
import TicTacToe from "../../components/tic-tac-toe/tictactoe";
import Calculator from "../../components/Calculator/Calculator";

// TODO enable single selection- one at a time

const Portfolio = () => {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(null);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }
  return (
    <>
      <div>
        <h1>Below is a list of Projects</h1>
      </div>
      <div>
        <button id="1" onClick={() => setShow(!show)}>
          {show ? "Back to Portfolio" : "Click to Play Tic Tac Toe XO"}
        </button>
        {show ? <TicTacToe /> : null}
      </div>
      <div>
        <button id="2" onClick={() => setShow(!show)}>
          {show ? "Back to Portfolio" : "Click to use the Calculator"}
        </button>
        {show ? <Calculator /> : null}
      </div>
    </>
  );
};

export default Portfolio;

import React from "react";
import { useState } from "react";
import TicTacToe from "../../components/tic-tac-toe";

const Portfolio = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div>
        <h1>Below is a list of Projects</h1>
      </div>
      <div>
        <button onClick={() => setShow(!show)}>
          {show ? "Back to Portfolio" : "Click to Play Tic Tac Toe XO"}
        </button>
        {show ? <TicTacToe /> : null}
      </div>
    </>
  );
};

export default Portfolio;

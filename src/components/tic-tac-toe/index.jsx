import "./styles.css";
import { useState } from "react";

function handleClick(value) {}

function Square({ value }) {
  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}

export default function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  console.log(squares);

  return (
    <>
      <div className="tic-tac-toe-container">
        <div className="row">
          <Square />
          <Square />
          <Square />
        </div>

        <div className="row">
          <Square />
          <Square />
          <Square />
        </div>

        <div className="row">
          <Square />
          <Square />
          <Square />
        </div>
      </div>
    </>
  );
}

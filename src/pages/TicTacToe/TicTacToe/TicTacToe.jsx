import "./TicTacToe.css";
import React, { useState, useEffect, useContext } from "react";
import { GameContext } from "../../../Helpers/Contexts";

function Square({ value, onClick }) {
  return (
    <button onClick={onClick} className="square">
      {value}
    </button>
  );
}
// 0 1 2
// 3 4 5
// 6 7 8

export default function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState("");
  const [count, setCount] = useState(1);
  const [disabled, setDisabled] = useState(true);
  const {
    setGameState,
    playerOne,
    playerTwo,
    rounds,
    draw,
    setDraw,
    playerOneWin,
    setPlayerOneWin,
  } = useContext(GameContext);

  useEffect(() => {
    if (!getWinner(squares) && squares.every((item) => item !== "")) {
      setStatus(
        `This is a draw! Click ${
          count < rounds ? "to play next round" : " for leaderboard"
        }`
      );
      setDraw(draw + 1);
      setDisabled(false);
    } else if (getWinner(squares)) {
      if (getWinner(squares) === "X") {
        setStatus(
          `Winner is ${playerOne}! \n Click ${
            count < rounds ? "to play next round" : " for leaderboard"
          }`
        );
        setPlayerOneWin(playerOneWin + 1);
      }
      if (getWinner(squares) === "O") {
        setStatus(
          `Winner is ${playerTwo}!\n Click ${
            count < rounds ? "to play next round" : " for leaderboard"
          }`
        );
      }
      setDisabled(false);
    } else {
      setStatus(`It's ${isXTurn ? `${playerOne}` : `${playerTwo}`} turn`);
    }
  }, [squares, isXTurn]);

  function getWinner(squares) {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];
    for (let i = 0; i < winningPatterns.length; i++) {
      const [x, y, z] = winningPatterns[i];
      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x];
      }
    }
    return null;
  }

  function handleClick(getCurrentSquare) {
    let cpySquares = [...squares];
    if (getWinner(cpySquares) || cpySquares[getCurrentSquare]) return;
    cpySquares[getCurrentSquare] = isXTurn ? "X" : "O";
    setIsXTurn(!isXTurn);
    setSquares(cpySquares);
  }

  function handleRound() {
    setDisabled(false);
    setIsXTurn(true);
    setSquares(Array(9).fill(""));
    if (count < rounds) {
      setCount(count + 1);
    } else {
      setGameState("leaderboard");
    }
  }

  return (
    <div className="tic-tac-toe">
      <div className="tic-tac-toe-container">
        <h3>Round: {count}</h3>
        <div className="row">
          <Square value={squares[0]} onClick={() => handleClick(0)} />
          <Square value={squares[1]} onClick={() => handleClick(1)} />
          <Square value={squares[2]} onClick={() => handleClick(2)} />
        </div>

        <div className="row">
          <Square value={squares[3]} onClick={() => handleClick(3)} />
          <Square value={squares[4]} onClick={() => handleClick(4)} />
          <Square value={squares[5]} onClick={() => handleClick(5)} />
        </div>

        <div className="row">
          <Square value={squares[6]} onClick={() => handleClick(6)} />
          <Square value={squares[7]} onClick={() => handleClick(7)} />
          <Square value={squares[8]} onClick={() => handleClick(8)} />
        </div>
        <div className="restart">
          <button disabled={disabled} onClick={() => handleRound()}>
            {count < rounds ? "Next Round" : "Leaderboard"}
          </button>
        </div>
        <div className="status">{status}</div>
      </div>
    </div>
  );
}

import "./TicTacToe.css";
import { useEffect, useState } from "react";
import Button from "../../components/Button/Button.jsx";

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
  const [name, setName] = useState("");
  const [leaderBoard, setLeaderBoard] = useState("");

  useEffect(() => {
    if (!getWinner(squares) && squares.every((item) => item !== "")) {
      setStatus("This is a draw! Please restart the game");
    } else if (getWinner(squares)) {
      setStatus(`Winner is ${getWinner(squares)}.\nPlease Restart the game`);
    } else {
      setStatus(`Next player is ${isXTurn ? "X" : "O"}`);
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

  function handleRestart() {
    setIsXTurn(true);
    setSquares(Array(9).fill(""));
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  function addNameToLeaderboard() {
    setLeaderBoard(name);
  }

  return (
    <>
      <Button />
      <div className="name-input">
        <p>Player One Please Enter Name:</p>
        <input onChange={handleChange} />
        <button onClick={() => addNameToLeaderboard()}>Add</button>
      </div>
      <div className="leader-board-container">
        <div className="leader-board-title">
          <h3>LeaderBoard</h3>
        </div>
        <table>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Wins</th>
            <th>Loss</th>
            <th>Draw</th>
          </tr>
        </table>
        {leaderBoard}
        <label>Rank</label>
      </div>

      <div className="tic-tac-toe-container">
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
        <div className="status">{status}</div>
        <div className="restart">
          <button onClick={() => handleRestart()}>Restart Game</button>
        </div>
      </div>
    </>
  );
}

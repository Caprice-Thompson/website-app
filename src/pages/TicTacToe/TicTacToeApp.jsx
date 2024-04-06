import React, { useContext, useState } from "react";
import GameMenu from "./GameMenu";
import TicTacToe from "./TicTacToe";
import LeaderboardScreen from "./LeaderboardScreen";
import PlayerMenu from "./PlayerMenu";

import { GameContext } from "../../Helpers/Contexts";

export default function TicTacToeApp() {
  const [gameState, setGameState] = useState("playerMenu");
  const [rounds, setRounds] = useState("");
  // later - pass as an array, .map and then update with player 2
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");
  const [score, setScore] = useState(0);
  return (
    <div className="tictactoe">
      <h1>TicTacToe App</h1>
      <GameContext.Provider
        value={{
          gameState,
          setGameState,
          score,
          setScore,
          rounds,
          setRounds,
          playerOne,
          setPlayerOne,
          playerTwo,
          setPlayerTwo,
        }}
      >
        {gameState === "playerMenu" && <PlayerMenu />}
        {gameState === "gameMenu" && <GameMenu />}
        {gameState === "tictactoe" && <TicTacToe />}
        {gameState === "leaderboard" && <LeaderboardScreen />}
      </GameContext.Provider>
    </div>
  );
}

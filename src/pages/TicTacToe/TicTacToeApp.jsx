import React, { useContext, useState } from "react";
import GameMenu from "./GameMenu/GameMenu";
import TicTacToe from "./TicTacToe/TicTacToe";
import LeaderboardScreen from "./LeaderboardScreen/LeaderboardScreen";
import PlayerMenu from "./PlayerMenu/PlayerMenu";

import { GameContext } from "../../Helpers/Contexts";

export default function TicTacToeApp() {
  const [gameState, setGameState] = useState("playerMenu");
  const [rounds, setRounds] = useState(1);
  // later - pass as an array, .map and then update with player 2
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");
  const [draw, setDraw] = useState(0);
  const [playerOneWin, setPlayerOneWin] = useState(0);
  return (
    <div className="tictactoe">
      <h1 className="header">TicTacToe App</h1>
      <GameContext.Provider
        value={{
          gameState,
          setGameState,
          playerOneWin,
          setPlayerOneWin,
          draw,
          setDraw,
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

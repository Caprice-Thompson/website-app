import React, { useState, useContext, useEffect } from "react";
import Leaderboard from "../../../components/Leaderboard/Leaderboard";
import { GameContext } from "../../../Helpers/Contexts";
import "./LeaderboardScreen.css";
export default function LeaderboardScreen() {
  const { playerOne, playerTwo, playerOneWin, draw, rounds } =
    useContext(GameContext);

  const leaderBoard = [
    {
      name: playerOne,
      wins: playerOneWin,
      loss: rounds - playerOneWin - draw,
      draw: draw,
    },
    {
      name: playerTwo,
      wins: rounds - playerOneWin - draw,
      loss: playerOneWin,
      draw: draw,
    },
  ];
  return (
    <div className="leaderboard-container">
      <Leaderboard leaderBoard={leaderBoard} />
    </div>
  );
}

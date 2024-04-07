import React, { useState, useContext, useEffect } from "react";
import Leaderboard from "../../../components/Leaderboard/Leaderboard";
import { GameContext } from "../../../Helpers/Contexts";
import "./LeaderboardScreen.css";
export default function LeaderboardScreen() {
  const { playerOne, playerTwo, score } = useContext(GameContext);

  // function addNameToLeaderboard() {
  //   setLeaderBoard(playerOne);
  // }

  const leaderBoard = [
    { name: playerOne, wins: 1, loss: 5, draw: 3 },
    { name: playerTwo, wins: 1, loss: 5, draw: 3 },
  ];
  return (
    <div className="leaderboard-container">
      <Leaderboard leaderBoard={leaderBoard} />
    </div>
  );
}

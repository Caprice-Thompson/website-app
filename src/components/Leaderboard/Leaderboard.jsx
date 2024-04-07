import React from "react";
import "./Leaderboard.css";

export default function Leaderboard(props) {
  return (
    <div className="leader-board-container">
      <div className="leader-board-title">
        <h3>Leaderboard</h3>
      </div>
      <table>
        <thead>
          <tr>
            <th>#Rank</th>
            <th>Name</th>
            <th>Wins</th>
            <th>Loss</th>
            <th>Draw</th>
          </tr>
        </thead>
        <tbody>
          {props.leaderBoard.map((entry, index) => (
            <tr className="table-row" key={index}>
              <td>{index + 1}</td>
              <td>{entry.name}</td>
              <td>{entry.wins}</td>
              <td>{entry.loss}</td>
              <td>{entry.draw}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

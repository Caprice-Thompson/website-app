import "./Leaderboard.css";

export default function Leaderboard(props) {
  return (
    <div className="leader-board-container">
      <div className="leader-board-title">
        <h3>Leaderboard</h3>
      </div>
      <table>
        <tr>
          <th>#Rank</th>
          <th>Name</th>
          <th>Wins</th>
          <th>Loss</th>
          <th>Draw</th>
        </tr>
        <tbody>
          {props.leaderBoard}
          {props.leaderBoard.map((entry, index) => (
            <tr key={index}>
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

import Leaderboard from "../../components/Leaderboard/Leaderboard";
import { GameContext } from "../../Helpers/Contexts";
export default function LeaderboardScreen() {
  const [leaderBoard, setLeaderBoard] = useState([]);
  const { player } = useContext(GameContext);

  function addNameToLeaderboard() {
    setLeaderBoard(player);
  }
  return (
    <div className="leaderboard-container">
      <Leaderboard leaderBoard={leaderBoard} />
    </div>
  );
}

import "../SearchBar/SearchBar.css";
import { IoIosSearch } from "react-icons/io";

export default function Search() {
  // function search(formData) {
  //   const query = formData.get("query");
  //   alert(`You searched for '${query}'`);
  // }
  // const [searchInput, setSearchInput] = useState("");
  //action={search}
  return (
    <form>
      <input id="search" name="query" placeholder="Search..." />
      <IoIosSearch />
    </form>
  );
}

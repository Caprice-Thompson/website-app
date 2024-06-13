import "../SearchBar/SearchBar.css";
export default function Search() {
  function search(formData) {
    const query = formData.get("query");
    alert(`You searched for '${query}'`);
  }
  return (
    <form action={search}>
      <input id="search" name="query" placeholder="Search..." />
    </form>
  );
}

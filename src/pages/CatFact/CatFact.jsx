import Axios from "axios";
import { useEffect, useState } from "react";

export default function CatFact() {
  const [catFact, setCatFact] = useState("");

  useEffect(() => {
    fetchCatFact();
  }, []);

  function fetchCatFact() {
    Axios.get("https://catfact.ninja/fact")
      .then((res) => {
        setCatFact(res.data.fact);
      })
      .catch((error) => {
        console.error("Error fetching cat fact:", error);
      });
  }

  return (
    <div className="cat-fact">
      <button onClick={fetchCatFact}>Generate Cat Fact</button>
      <p>{catFact}</p>
    </div>
  );
}

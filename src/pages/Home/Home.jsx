import React from "react";
import StarRating from "../../components/Rating/Rating.jsx";
import "./styles.css";

function Home() {
  return (
    <div className="container">
      <h1>Welcome to the Project App</h1>
      <h2> Home of Projects</h2>
      <StarRating numOfStars={6} />
    </div>
  );
}

export default Home;

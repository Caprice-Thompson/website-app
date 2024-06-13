import React from "react";
import StarRating from "../../components/Rating/Rating.jsx";
import "./Home.css";

function Home() {
  return (
    <div className="container">
      <h1> Home of The Projects</h1>
      <StarRating numOfStars={6} />
    </div>
  );
}

export default Home;

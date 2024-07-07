import React from "react";
import "./Home.css";
import image from "../../images/Sphere.png";

function Home() {
  return (
    <>
      <h1>Home of The Projects</h1>
      <div className="homePageImage">
        <img src={image} alt="Home page image" />
      </div>
    </>
  );
}

export default Home;

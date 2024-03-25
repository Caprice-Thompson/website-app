import React from "react";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/portfolio/tic-tac-toe");
  };

  return (
    <div>
      <h1>About</h1>
      <Button onClick={handleClick}>Test</Button>
    </div>
  );
};
export default About;

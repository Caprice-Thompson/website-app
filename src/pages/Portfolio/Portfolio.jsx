import React from "react";
import "./Portfolio.css";
import noughts_crosses from "../../../src/images/noughts_crosses.jpg";
import calculator from "../../../src/images/calculator.png";
import timer from "../../../src/images/timer.jpg";
import todo from "../../images/todo.png";
import { useNavigate } from "react-router-dom";
import ProjectSelection from "../../components/ProjectSelection/ProjectSelection";

const Portfolio = () => {
  const navigate = useNavigate();

  const handleProjectSelection = (project) => {
    navigate(`/portfolio/${project}`);
  };

  return (
    <>
      <div>
        <h1>Below is a list of Projects</h1>
      </div>
      <ProjectSelection
        handleProjectSelection={handleProjectSelection}
        nav={"tic-tac-toe"}
        image={noughts_crosses}
        alt={"noughts logo"}
        children={"Click to Play Tic Tac Toe XO"}
      />
      <ProjectSelection
        handleProjectSelection={handleProjectSelection}
        nav={"calculator"}
        image={calculator}
        alt={"calculator logo"}
        children={"Click to use Calculator"}
      />
      <ProjectSelection
        handleProjectSelection={handleProjectSelection}
        nav={"timer"}
        image={timer}
        alt={"timer logo"}
        children={"Click to use Timer App"}
      />
      <ProjectSelection
        handleProjectSelection={handleProjectSelection}
        nav={"todo-list"}
        image={todo}
        alt={"todo list logo"}
        children={"Click to use Todo list"}
      />
    </>
  );
};

export default Portfolio;

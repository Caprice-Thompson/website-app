import React from "react";
import "./Portfolio.css";
import noughts_crosses from "../../../src/images/noughts_crosses.jpg";
import calculator from "../../../src/images/calculator.png";
import timer from "../../../src/images/timer.jpg";
import todo from "../../images/todo.png";
import quiz from "../../images/quiz.jpg";
import { useNavigate } from "react-router-dom";
import ProjectSelection from "../../components/ProjectSelection/ProjectSelection";
import Header from "../../components/Header/Header";

const Portfolio = () => {
  const navigate = useNavigate();

  const handleProjectSelection = (project) => {
    navigate(`/portfolio/${project}`);
  };

  return (
    <>
      <Header title={"Portfolio"} />
      <ProjectSelection
        handleProjectSelection={handleProjectSelection}
        nav={"tic-tac-toe"}
        image={noughts_crosses}
        alt={"noughts logo"}
        children={"Click to play Tic Tac Toe XO"}
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
      <ProjectSelection
        handleProjectSelection={handleProjectSelection}
        nav={"quiz"}
        image={quiz}
        alt={"quiz logo"}
        children={"Click to play a Quiz"}
      />
    </>
  );
};

export default Portfolio;

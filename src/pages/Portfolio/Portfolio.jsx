import React, { useState } from "react";
import TicTacToe from "../../pages/TicTacToe/TicTacToe";
import Calculator from "../../pages/Calculator/Calculator";
import ToDoList from "../ToDoList/ToDoList";
import "./Portfolio.css";
import TimerApp from "../../pages/Timer/Timer";
import noughts_crosses from "../../../src/images/noughts_crosses.jpg";
import calculator from "../../../src/images/calculator.png";
import timer from "../../../src/images/timer.jpg";
import todo from "../../images/todo.png";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const [show, setShow] = useState(false);
  const [here, setHere] = useState(false);
  const [here2, setHere2] = useState(false);
  const [button1Enabled, setButton1Enabled] = useState(true);
  const [button2Enabled, setButton2Enabled] = useState(true);
  const [button3Enabled, setButton3Enabled] = useState(true);
  const navigate = useNavigate();

  const handleButton1Click = () => {
    setShow(!show);
    setButton2Enabled(!button2Enabled);
    setButton3Enabled(!button3Enabled);
    navigate("/portfolio/tic-tac-toe");
  };

  const handleButton2Click = () => {
    setHere(!here);
    setButton1Enabled(!button1Enabled);
    setButton3Enabled(!button3Enabled);
    navigate("/portfolio/calculator");
  };

  const handleButton3Click = () => {
    setHere2(!here2);
    setButton3Enabled(button3Enabled);
    setButton1Enabled(!button1Enabled);
    setButton2Enabled(!button2Enabled);
    navigate("/portfolio/timer");
  };

  const handleButton4Click = () => {
    setHere2(!here2);
    setButton3Enabled(button3Enabled);
    setButton1Enabled(!button1Enabled);
    setButton2Enabled(!button2Enabled);
    navigate("/portfolio/todo-list");
  };

  return (
    <>
      <div>
        <h1>Below is a list of Projects</h1>
      </div>
      <div className="portfolio-container">
        <img src={noughts_crosses} alt="noughts logo" />
        <div className="btn">
          <button
            id="tic-tac-toe-nav"
            onClick={handleButton1Click}
            disabled={!button1Enabled}
          >
            {show ? "Back to Portfolio" : "Click to Play Tic Tac Toe XO"}
          </button>
          {show ? <TicTacToe /> : null}
        </div>
      </div>
      <div className="portfolio-container">
        <div className="btn">
          <img src={calculator} alt="calculator logo" />
          <button
            id="calculator-nav"
            onClick={handleButton2Click}
            disabled={!button2Enabled}
          >
            {here ? "Back to Portfolio" : "Click to use the Calculator"}
          </button>
          {here ? <Calculator /> : null}
        </div>
      </div>
      <div className="portfolio-container">
        <div className="btn">
          <img src={timer} alt="timer logo" />
          <button
            id="timer-nav"
            onClick={handleButton3Click}
            disabled={!button3Enabled}
          >
            {here2 ? "Back to Portfolio" : "Click to use the Timer App"}
          </button>
          {here2 ? <TimerApp /> : null}
        </div>
      </div>
      <div className="portfolio-container">
        <div className="btn">
          <img src={todo} alt="todo list" />
          <button
            id="timer-nav"
            onClick={handleButton4Click}
            disabled={!button3Enabled}
          >
            {here2 ? "Back to Portfolio" : "Click to use the Todo list"}
          </button>
          {here2 ? <ToDoList /> : null}
        </div>
      </div>
    </>
  );
};

export default Portfolio;

import React, { useState } from "react";
import TicTacToe from "../../components/tic-tac-toe/tictactoe";
import Calculator from "../../components/Calculator/Calculator";
import "./styles.css";
import TimerApp from "../../components/Timer/Timer";

const Portfolio = () => {
  const [show, setShow] = useState(false);
  const [here, setHere] = useState(false);
  const [here2, setHere2] = useState(false);
  const [button1Enabled, setButton1Enabled] = useState(true);
  const [button2Enabled, setButton2Enabled] = useState(true);
  const [button3Enabled, setButton3Enabled] = useState(true);

  const handleButton1Click = () => {
    setShow(!show);
    setButton2Enabled(!button2Enabled);
  };

  const handleButton2Click = () => {
    setHere(!here);
    setButton1Enabled(!button1Enabled);
  };

  const handleButton3Click = () => {
    setHere2(!here2);
    setButton3Enabled(!button3Enabled);
  };

  return (
    <>
      <div>
        <h1>Below is a list of Projects</h1>
      </div>
      <div className="btn">
        <button id="1" onClick={handleButton1Click} disabled={!button1Enabled}>
          {show ? "Back to Portfolio" : "Click to Play Tic Tac Toe XO"}
        </button>
        {show ? <TicTacToe /> : null}
      </div>
      <div className="btn">
        <button id="2" onClick={handleButton2Click} disabled={!button2Enabled}>
          {here ? "Back to Portfolio" : "Click to use the Calculator"}
        </button>
        {here ? <Calculator /> : null}
      </div>
      <div className="btn">
        <button id="3" onClick={handleButton3Click} disabled={!button3Enabled}>
          {here2 ? "Back to Portfolio" : "Click to use the Timer App"}
        </button>
        {here2 ? <TimerApp /> : null}
      </div>
    </>
  );
};

export default Portfolio;

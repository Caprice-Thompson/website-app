import React from "react";
import { useEffect, useState } from "react";
import "./styles.css";

function Button({ value, onClick }) {
  return (
    <button onClick={onClick} className="button">
      {value}
    </button>
  );
}

function calculate({ value, n1, n2 }) {
  const firstNum = parseFloat(n1);
  const secondNum = parseFloat(n2);
  if (value === "add") return firstNum + secondNum;
  if (value === "subtract") return firstNum - secondNum;
  if (value === "multiply") return firstNum * secondNum;
  if (value === "divide") return firstNum / secondNum;
}

function Operator({ value, onClick }) {
  return (
    <button onClick={onClick} className="operator">
      {value}
    </button>
  );
}
function handleClick(getNumber) {
  console.log(getNumber);
  return getNumber;
}

function Display({ value, onClick }) {
  return (
    <button onClick={onClick} className="calculator-display">
      {handleClick(value)}
    </button>
  );
}

export default function Calculator() {
  const [number, setNumber] = useState(0);
  const [display, setDisplay] = useState("");

  return (
    <>
      <div className="calculator-container">
        <div className="calculator-keys">
          <Display className="calculator-display" value={0} />
          <div className="row">
            <Operator value={"+"} onClick={() => handleClick("+")} />
            <Operator value={"-"} onClick={() => handleClick("-")} />
            <Operator value={"x"} onClick={() => handleClick("x")} />
            <Operator value={"/"} onClick={() => handleClick("/")} />
          </div>
          <div className="row">
            <Button value={7} onClick={() => handleClick(value)} />
            <Button value={8} onClick={() => handleClick(value)} />
            <Button value={9} onClick={() => handleClick(value)} />
            <Button
              class="equal"
              value={"="}
              onClick={() => handleClick(value)}
            />
          </div>
          <div className="row">
            <Button value={4} onClick={() => handleClick(value)} />
            <Button value={5} onClick={() => handleClick(value)} />
            <Button value={6} onClick={() => handleClick(value)} />
            <Button value={"="} onClick={() => handleClick(value)} />
          </div>
          <div className="row">
            <Button value={1} onClick={() => handleClick(value)} />
            <Button value={2} onClick={() => handleClick(value)} />
            <Button value={3} onClick={() => handleClick(value)} />
            <Button value={"="} onClick={() => handleClick(value)} />
          </div>
          <div className="row">
            <Button value={0} onClick={() => handleClick(value)} />
            <Button value={"."} onClick={() => handleClick(value)} />
            <Button value={"AC"} onClick={() => handleClick(value)} />
            <Button value={"="} onClick={() => calculate(value)} />
          </div>
        </div>
      </div>
    </>
  );
}

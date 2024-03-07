import React, { useEffect, useState } from "react";
import "./styles.css";

export default function Calculator() {
  const [displayedKey, setDisplayedKey] = useState(null);
  // tODO - allow decimal after an operator
  function handleKeyClick(key) {
    if (key === ".") {
      if (displayedKey === null || displayedKey.includes(".")) {
        // Do nothing if there's already a decimal
        return;
      }
    }
    setDisplayedKey((prevNumber) =>
      prevNumber === null ? key : prevNumber + key
    );
  }

  function clear() {
    setDisplayedKey(null);
  }

  function calculate() {
    const result = eval(displayedKey);
    setDisplayedKey(result.toString());
  }

  function Button({ value, onClick }) {
    return (
      <button onClick={onClick} className="keys">
        {value}
      </button>
    );
  }

  function Operator({ value, onClick }) {
    return (
      <button onClick={onClick} className="operator">
        {value}
      </button>
    );
  }

  function Display({ value, onClick }) {
    return (
      <button onClick={onClick} className="calculator-display">
        {value}
      </button>
    );
  }
  return (
    <div className="calculator-container">
      <div className="calculator-keys">
        <Display className="calculator-display" value={displayedKey} />
        <div className="column">
          <div className="rowOne">
            <Operator value={"+"} onClick={() => handleKeyClick("+")} />
            <Operator value={"-"} onClick={() => handleKeyClick("-")} />
            <Operator value={"x"} onClick={() => handleKeyClick("*")} />
            <Operator value={"/"} onClick={() => handleKeyClick("/")} />
          </div>
          <div className="rowTwo">
            <Button value={7} onClick={() => handleKeyClick(7)} />
            <Button value={8} onClick={() => handleKeyClick("8")} />
            <Button value={9} onClick={() => handleKeyClick("9")} />
            <button value={"="} className="equal" onClick={() => calculate()}>
              =
            </button>
          </div>
          <div className="rowThree">
            <Button value={4} onClick={() => handleKeyClick("4")} />
            <Button value={5} onClick={() => handleKeyClick("5")} />
            <Button value={6} onClick={() => handleKeyClick("6")} />
          </div>
          <div className="rowFour">
            <Button value={1} onClick={() => handleKeyClick("1")} />
            <Button value={2} onClick={() => handleKeyClick("2")} />
            <Button value={3} onClick={() => handleKeyClick("3")} />
          </div>
          <div className="rowFive">
            <Button value={0} onClick={() => handleKeyClick("0")} />
            <Button value={"."} onClick={() => handleKeyClick(".")} />
            <Button value={"AC"} onClick={() => clear()} />
          </div>
        </div>
      </div>
    </div>
  );
}

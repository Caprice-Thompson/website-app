import React, { useState } from "react";
import "./Calculator.css";
import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function Calculator() {
  const [displayedKey, setDisplayedKey] = useState(null);
  const navigate = useNavigate();
  const previousKey =
    displayedKey && displayedKey.length > 0
      ? displayedKey.substring(displayedKey.length - 1)
      : null;
  const operators = ["+", "-", "/", "*"];

  const getDigitsAfterOperator = () => {
    let digitsAfterOperator = "";
    let operatorFound = false;

    // Iterate through the characters of displayedKey
    for (let i = 0; i < displayedKey.length; i++) {
      const char = displayedKey[i];

      // Check if the character is an operator and set operatorFound to true
      if (operators.includes(char)) {
        operatorFound = true;
        continue; // Skip the operator
      }

      // If an operator has been found, concatenate the digit
      if (operatorFound) {
        digitsAfterOperator += char;
      }
    }
    return digitsAfterOperator;
  };

  function handleKeyClick(key) {
    if (key === ".") {
      const after = getDigitsAfterOperator();
      if (
        displayedKey.includes(".") &&
        !operators.some((op) => displayedKey.includes(op))
      ) {
        return;
      }

      if (
        displayedKey === null ||
        previousKey.includes(".") ||
        operators.includes(previousKey) ||
        after.includes(".")
      ) {
        // Do nothing if there's already a decimal
        return;
      }
    }
    setDisplayedKey((prevNumber) =>
      prevNumber === null ? key : prevNumber + key
    );
  }

  function handleOperatorClick(key) {
    if (operators.includes(previousKey) || previousKey.includes(".")) {
      return;
    }
    setDisplayedKey((prevNumber) =>
      prevNumber === null ? key : prevNumber + key
    );
  }

  function clear() {
    setDisplayedKey(null);
  }

  const handleBackBtn = () => {
    navigate("/portfolio");
  };

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

  return (
    <>
      <div className="back-btn">
        <button onClick={() => handleBackBtn()}>
          <MdArrowBack />
          Back
        </button>
      </div>
      <div className="calculator-container">
        <div className="calculator-keys">
          <div className="calculator-display">{displayedKey}</div>
          <div className="column">
            <div className="rowOne">
              <Operator value={"+"} onClick={() => handleOperatorClick("+")} />
              <Operator value={"-"} onClick={() => handleOperatorClick("-")} />
              <Operator value={"x"} onClick={() => handleOperatorClick("*")} />
              <Operator value={"/"} onClick={() => handleOperatorClick("/")} />
            </div>
            <div className="rowTwo">
              <Button value={7} onClick={() => handleKeyClick("7")} />
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
    </>
  );
}

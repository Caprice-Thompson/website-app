import React, { useState, useEffect } from "react";
import BackButton from "../../components/Button/Button.jsx";
import "./Timer.css";
import TimerOptions from "./TimerOptions.jsx";
import NumericInput from "../../components/Input/NumericInput.jsx";

export default function TimerApp() {
  const [timer, setTimer] = useState(null);
  const [seconds, setSeconds] = useState("");
  const [minutes, setMinutes] = useState("");
  const [hours, setHours] = useState("");
  const [timeRemaining, setTimeRemaining] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [startButton, setStartButton] = useState(true);
  const [clearButton, setClearButton] = useState(true);
  const [stopButton, setStopButton] = useState(true);
  const [pauseButton, setPauseButton] = useState(true);

  // TODO: countdown meter next to time remaining
  useEffect(() => {
    if (timer === null) return;
    const updateTimer = () => {
      if (seconds === "00" && minutes === "00" && hours === "00") {
        clearInterval(timer);
        setTimeRemaining("Time's up!");
      } else {
        let remainingHours = parseInt(hours);
        let remainingMinutes = parseInt(minutes);
        let remainingSeconds = parseInt(seconds);

        if (remainingSeconds === 0) {
          if (remainingMinutes > 0) {
            remainingMinutes--;
            remainingSeconds = 59;
          } else if (remainingHours > 0) {
            remainingHours--;
            remainingMinutes = 59;
            remainingSeconds = 59;
          }
        } else {
          remainingSeconds--;
        }

        setHours(remainingHours.toString().padStart(2, "0"));
        setMinutes(remainingMinutes.toString().padStart(2, "0"));
        setSeconds(remainingSeconds.toString().padStart(2, "0"));
        setTimeRemaining(
          `${remainingHours.toString().padStart(2, "0")}:${remainingMinutes
            .toString()
            .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`
        );
      }
    };
    // need to update every second
    const intervalId = setInterval(updateTimer, 1000);
    // console.log(intervalId);
    return () => clearInterval(intervalId);
  }, [timer, seconds, minutes, hours]);

  const handleSeconds = (event) => {
    const expectedValue = event.target.value;
    if (/^\d*$/.test(expectedValue)) {
      // If the input value has more than two digits, only take the last two digits
      const newValue = expectedValue.slice(-2);
      setSeconds(newValue);
    }
  };

  const handleMinutes = (event) => {
    const expectedValue = event.target.value;
    if (/^\d*$/.test(expectedValue)) {
      const newValue = expectedValue.slice(-2);
      setMinutes(newValue);
    }
  };

  const handleHours = (event) => {
    const expectedValue = event.target.value;
    if (/^\d*$/.test(expectedValue)) {
      const newValue = expectedValue.slice(-2);
      setHours(newValue);
    }
  };

  const handleBlur = () => {
    const parsedHours = parseInt(hours, 10);
    const parsedMinutes = parseInt(minutes, 10);
    const parsedSeconds = parseInt(seconds, 10);
    console.log(hours);
    if (parsedHours <= 9 && hours.length === 1) {
      setHours("0" + hours);
    }
    if (parsedMinutes <= 9 && minutes.length === 1) {
      setMinutes("0" + minutes);
    }
    if (parsedSeconds <= 9 && seconds.length === 1) {
      setSeconds("0" + seconds);
    }
  };

  const startCounting = () => {
    // check for invalid inputs
    if (
      hours < 0 ||
      minutes < 0 ||
      seconds < 0 ||
      hours > 59 ||
      minutes > 59 ||
      seconds > 59 ||
      hours === "" ||
      minutes === "" ||
      seconds === ""
    ) {
      // TODO: turn into popup modal
      alert("The time entered is not valid!");

      return;
    }
    setStartButton(false);
    setClearButton(true);
    setDisabled(true);
    setStopButton(true);
    setPauseButton(true);
    clearInterval(timer);

    const totalSeconds =
      parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);
    setTimer(totalSeconds);
    setTimeRemaining(
      `${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}:${seconds.padStart(
        2,
        "0"
      )}`
    );
  };

  const countDownOptions = (h, m, s) => {
    setDisabled(true);
    clearInterval(timer);
    setTimer(null);
    setStartButton(true);
    setClearButton(true);
    const hours = h.toString().padStart(2, "0");
    const minutes = m.toString().padStart(2, "0");
    const seconds = s.toString().padStart(2, "0");
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
    setTimeRemaining(`${hours}:${minutes}:${seconds}`);
  };
  // TODO: get rid of either stop or pause
  const pauseCounting = () => {
    setStartButton(true);
    setClearButton(true);
    setPauseButton(false);
    clearInterval(timer);
    setTimer(null);
  };

  const endCounting = () => {
    setStopButton(false);
    setStartButton(true);
    setClearButton(true);
    setPauseButton(false);
    clearInterval(timer);
    setTimer(null);

    setTimeRemaining(`${hours}:${minutes}:${seconds}`);
  };

  const clearCounting = () => {
    setStartButton(true);
    setClearButton(clearButton);
    setDisabled(false);
    setSeconds("");
    setMinutes("");
    setHours("");
    setTimer(null);
    clearInterval(timer);
    setTimeRemaining("00:00:00");
  };

  return (
    <>
      <BackButton />
      <div className="timer-container">
        <h3>Please enter a time</h3>
        <div className="ipt">
          <NumericInput
            id={"hours"}
            type={"number"}
            value={hours}
            handleTime={handleHours}
            placeholder={"hour"}
            handleBlur={handleBlur}
            disabled={disabled}
          />
          <NumericInput
            id={"minutes"}
            type={"number"}
            value={minutes}
            handleTime={handleMinutes}
            placeholder={"minute"}
            handleBlur={handleBlur}
            disabled={disabled}
          />
          <NumericInput
            id={"seconds"}
            type={"number"}
            value={seconds}
            handleTime={handleSeconds}
            placeholder={"second"}
            handleBlur={handleBlur}
            disabled={disabled}
          />
        </div>
        <div className="btn">
          <button
            id="btn-start"
            onClick={startCounting}
            disabled={!startButton}
          >
            <span class="text">Start</span>
          </button>
          <button
            id="btn-pause"
            onClick={pauseCounting}
            disabled={!pauseButton}
          >
            <span class="text">Pause</span>
          </button>
          <button id="btn-stop" onClick={endCounting} disabled={!stopButton}>
            <span class="text">Stop</span>
          </button>
          <button
            id="btn-clear"
            onClick={clearCounting}
            disabled={!clearButton}
          >
            <span class="text">Clear</span>
          </button>
        </div>
        <p id="currentTime">
          <strong>Time Remaining:</strong> {timeRemaining}
        </p>
        <div className="popular-timer-container">
          <h2>Popular Timers</h2>
          <div className="options">
            <TimerOptions
              countDownOptions={countDownOptions}
              hours={0}
              minutes={1}
              seconds={0}
              time={"1 min"}
            />
            <TimerOptions
              countDownOptions={countDownOptions}
              hours={0}
              minutes={3}
              seconds={0}
              time={"3 min"}
            />
            <TimerOptions
              countDownOptions={countDownOptions}
              hours={0}
              minutes={5}
              seconds={0}
              time={"5 min"}
            />
            <TimerOptions
              countDownOptions={countDownOptions}
              hours={0}
              minutes={10}
              seconds={0}
              time={"10 min"}
            />
          </div>
          <div className="options">
            <TimerOptions
              countDownOptions={countDownOptions}
              hours={0}
              minutes={20}
              seconds={0}
              time={"20 min"}
            />
            <TimerOptions
              countDownOptions={countDownOptions}
              hours={0}
              minutes={45}
              seconds={0}
              time={"45 min"}
            />
            <TimerOptions
              countDownOptions={countDownOptions}
              hours={1}
              minutes={0}
              seconds={0}
              time={"1 hr"}
            />
            <TimerOptions
              countDownOptions={countDownOptions}
              hours={2}
              minutes={0}
              seconds={0}
              time={"2 hr"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

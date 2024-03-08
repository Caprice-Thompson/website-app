import React, { useState, useEffect } from "react";
import "./timerstyles.css";

export default function TimerApp() {
  const [timer, setTimer] = useState(null);
  const [seconds, setSeconds] = useState("");
  const [minutes, setMinutes] = useState("");
  const [hours, setHours] = useState("");
  const [timeRemaining, setTimeRemaining] = useState("");

  // Event handler to update the input value when it changes

  const handleSeconds = (event) => {
    setSeconds(event.target.value);
  };

  const handleMinutes = (event) => {
    setMinutes(event.target.value);
  };

  const handleHours = (event) => {
    setHours(event.target.value);
  };

  const startCounting = () => {
    clearInterval(timer);
    const totalSeconds =
      parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);
    setTimer(setInterval(updateTimer, 1000, totalSeconds));
  };

  const pauseCounting = () => {
    clearInterval(timer);
  };

  const endCounting = () => {
    clearInterval(timer);
    setTimeRemaining("");
  };

  const clearCounting = () => {
    setSeconds("");
    setMinutes("");
    setHours("");
    clearInterval(timer);
    setTimeRemaining("");
  };

  const updateTimer = (totalSeconds) => {
    if (totalSeconds > 0) {
      const hoursRemaining = Math.floor(totalSeconds / 3600);
      const minutesRemaining = Math.floor((totalSeconds % 3600) / 60);
      const secondsRemaining = totalSeconds % 60;
      setTimeRemaining(
        `${hoursRemaining}:${minutesRemaining}:${secondsRemaining}`
      );
      totalSeconds--;
    } else {
      clearInterval(timer);
      setTimeRemaining("Time's up!");
    }
  };

  return (
    <>
      <div className="timer-container">
        <div class="ipt">
          <input
            id="hours"
            type="number"
            value={hours}
            onChange={handleHours}
            placeholder="hour"
          />
          <input
            id="minutes"
            type="number"
            value={minutes}
            onChange={handleMinutes}
            placeholder="minute"
          />
          <input
            id="seconds"
            type="number"
            value={seconds}
            onChange={handleSeconds}
            placeholder="second"
          />
        </div>

        <div className="btn">
          <button id="btn-start" onClick={startCounting}>
            Start
          </button>
          <button id="btn-pause" onClick={pauseCounting}>
            Pause
          </button>
          <button id="btn-stop" onClick={endCounting}>
            Stop
          </button>
          <button id="btn-clear" onClick={clearCounting}>
            Clear
          </button>
        </div>
        <p id="currentTime">
          <strong>Time Remaining:</strong> {timeRemaining}
        </p>
      </div>
    </>
  );
}

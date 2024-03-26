import React, { useState, useEffect } from "react";
import Button from "../../components/Button/Button.jsx";
import "./Timer.css";

export default function TimerApp() {
  const [timer, setTimer] = useState(null);
  const [seconds, setSeconds] = useState("");
  const [minutes, setMinutes] = useState("");
  const [hours, setHours] = useState("");
  const [timeRemaining, setTimeRemaining] = useState("");
  const [value, setValue] = useState("");

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
    setSeconds(event.target.value);
  };

  const handleMinutes = (event) => {
    setMinutes(event.target.value);
  };

  const handleHours = (event) => {
    setHours(event.target.value);
  };

  const handleBlur = () => {
    // If the input is empty or doesn't start with 0, prepend '0'
    if (hours[0] !== "0") {
      if (!hours) {
        setHours("00");
      }
      setHours("0" + hours);
    }
    if (minutes[0] !== "0") {
      setMinutes("0" + minutes);
    }
    if (seconds[0] !== "0") {
      setSeconds("0" + seconds);
    }
  };

  const startCounting = () => {
    clearInterval(timer);
    // check for invalid inputs
    if (
      hours < 0 ||
      minutes < 0 ||
      seconds < 0 ||
      hours > 59 ||
      minutes > 59 ||
      seconds > 59
    ) {
      // TODO: turn into popup modal
      alert("The time entered is not valid!");
      return;
    }
    if (hours === "") {
      setHours("00".toString().padStart(2, "0"));
    }
    if (minutes === "") {
      setMinutes("00".toString().padStart(2, "0"));
    }
    if (seconds === "") {
      setSeconds("00".toString().padStart(2, "0"));
    }

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
    clearInterval(timer);
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
    clearInterval(timer);
    setTimer(null);
  };

  const endCounting = () => {
    clearInterval(timer);
    setTimer(null);
    setTimeRemaining(`${hours}:${minutes}:${seconds}`);
  };

  const clearCounting = () => {
    setSeconds("");
    setMinutes("");
    setHours("");
    setTimer(null);
    clearInterval(timer);
    setTimeRemaining("00:00:00");
  };

  return (
    <>
      <Button />
      <div className="timer-container">
        <h3>Please enter a time</h3>
        <div class="ipt">
          <input
            id="hours"
            type="number"
            value={hours}
            onChange={handleHours}
            placeholder="hour"
            onBlur={handleBlur}
          />

          <input
            id="minutes"
            type="number"
            value={minutes}
            onChange={handleMinutes}
            placeholder="minute"
            onBlur={handleBlur}
          />
          <input
            id="seconds"
            type="number"
            value={seconds}
            onChange={handleSeconds}
            placeholder="second"
            onBlur={handleBlur}
          />
        </div>
        <div className="btn">
          <button id="btn-start" onClick={startCounting}>
            <span class="text">Start</span>
          </button>
          <button id="btn-pause" onClick={pauseCounting}>
            <span class="text">Pause</span>
          </button>
          <button id="btn-stop" onClick={endCounting}>
            <span class="text">Stop</span>
          </button>
          <button id="btn-clear" onClick={clearCounting}>
            <span class="text">Clear</span>
          </button>
        </div>
        <p id="currentTime">
          <strong>Time Remaining:</strong> {timeRemaining}
        </p>
        <div className="popular-timer-container">
          <h2>Popular Timers</h2>
          <div className="options">
            <button id="btn-option-1" onClick={() => countDownOptions(0, 1, 0)}>
              1 min
            </button>
            <button id="btn-option-2" onClick={() => countDownOptions(0, 3, 0)}>
              3 min
            </button>
            <button id="btn-option-3" onClick={() => countDownOptions(0, 5, 0)}>
              5 min
            </button>
            <button
              id="btn-option-4"
              onClick={() => countDownOptions(0, 10, 0)}
            >
              10 min
            </button>
          </div>
          <div className="options">
            <button
              id="btn-option-5"
              onClick={() => countDownOptions(0, 20, 0)}
            >
              20 min
            </button>
            <button
              id="btn-option-6"
              onClick={() => countDownOptions(0, 45, 0)}
            >
              45 min
            </button>
            <button id="btn-option-7" onClick={() => countDownOptions(1, 0, 0)}>
              1 hr
            </button>
            <button id="btn-option-8" onClick={() => countDownOptions(2, 0, 0)}>
              2 hr
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

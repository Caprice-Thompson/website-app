export default function TimerOptions(props) {
  return (
    <>
      <button
        onClick={() =>
          props.countDownOptions(props.hours, props.minutes, props.seconds)
        }
      >
        {props.time}
      </button>
    </>
  );
}

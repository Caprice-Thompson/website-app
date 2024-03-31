export default function Checkbox(props) {
  return (
    <div className="checkbox">
      <input id={props.id} type="checkbox" onClick={props.function} />
    </div>
  );
}

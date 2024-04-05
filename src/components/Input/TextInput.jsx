import "./TextInput.css";
export default function TextInput(props) {
  return (
    <div className="text-input">
      <input
        id={props.id}
        type={props.type}
        className={props.name}
        value={props.value}
        placeholder={props.placeholder}
        style={props.style}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
}

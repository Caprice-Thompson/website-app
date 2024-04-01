export default function TextInput(props) {
  return (
    <>
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
    </>
  );
}

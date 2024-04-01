export default function TextInput(props) {
  return (
    <>
      <input
        id={props.id}
        type={props.type}
        value={props.value}
        onChange={props.handleTime}
        placeholder={props.placeholder}
        onBlur={props.handleBlur}
        disabled={props.disabled}
      />
    </>
  );
}

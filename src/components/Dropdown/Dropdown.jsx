import "./Dropdown.css";

export default function Dropdown(props) {
  return (
    <>
      <select onChange={props.handleDropdown} id={props.id}>
        <option disabled selected>
          {props.label}
        </option>
        {Array.isArray(props.options) &&
          props.options.map((option, index) => (
            <option key={index} value={props.values[index]}>
              {option}
            </option>
          ))}
      </select>
    </>
  );
}

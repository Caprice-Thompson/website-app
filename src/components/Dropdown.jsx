export default function Dropdown(props) {
  return (
    <div className="dropdown-container">
      <select onChange={props.handleDropdown} name="selectedOptions">
        <option value={props.option}>
          {props.option}
        </option>
        <option value={props.option2}>
          {props.option2}
        </option>
        <option  value={props.option3}>
          {props.option3}
        </option>
        <option value={props.option4}>
          {props.option4}
        </option>
      </select>
    </div>
  );
}

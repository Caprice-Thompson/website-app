import { MdOutlineDeleteOutline, MdModeEdit } from "react-icons/md";
import IconLink from "../../../components/IconLink/IconLink";
import "./Task.css";
import Checkbox from "../../../components/Checkbox/Checkbox";

export default function Task(props) {
  const priority = [
    { label: "P1", colour: "red" },
    { label: "P2", colour: "#FF7433" },
    { label: "P3", colour: "#F5E240" },
    { label: "P4", colour: "#3860E7" },
  ];

  function getPriorityColour(label) {
    const priorityColour = priority.find(
      (priorityColour) => priorityColour.label === label
    );
    return priorityColour ? priorityColour.colour : null;
  }
  return (
    <div className="task-container">
      <div className={"task" + (props.completed ? " completed" : "")}>
        <label style={{ backgroundColor: getPriorityColour(props.priority) }}>
          {props.priority}
        </label>
        <div className="task-icons">
          <IconLink
            id="edit-task"
            function={() => props.editTask(props.id)}
            icon={<MdModeEdit />}
          />
          <IconLink
            id="delete-task"
            function={() => props.deleteTask(props.id)}
            icon={<MdOutlineDeleteOutline />}
          />
        </div>
        <h3>{props.taskName}</h3>
        <Checkbox
          id="complete-checkbox"
          function={() => props.completeTask(props.id)}
        />
      </div>
    </div>
  );
}

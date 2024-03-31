import { MdOutlineDeleteOutline, MdModeEdit } from "react-icons/md";
import IconLink from "../../../components/IconLink/IconLink";
import "./Task.css";
import Checkbox from "../../../components/Checkbox/Checkbox";

export default function Task(props) {
  return (
    <div className="task-container">
      <div className={"task" + (props.completed ? " completed" : "")}>
        <label>{props.priority}</label>
        <p>{props.taskDescription}</p>
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

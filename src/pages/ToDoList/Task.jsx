import { MdOutlineDeleteOutline } from "react-icons/md";

export default function Task(props) {
  return (
    <div className="task-container">
      <div className={"task" + (props.completed ? " completed" : "")}>
        <h3>{props.taskName}</h3>
        <p>{props.taskDescription}</p>
        <button
          className="complete-btn"
          onClick={() => props.completeTask(props.id)}
        >
          Complete
        </button>
        <div onClick={() => props.deleteTask(props.id)}>
          <span>
            <MdOutlineDeleteOutline />
          </span>
        </div>
      </div>
    </div>
  );
}

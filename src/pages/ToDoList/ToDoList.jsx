import "./ToDoList.css";
import React, { useState } from "react";
import Task from "./Task/Task";
import BackButton from "../../components/Button/Button.jsx";
import Dropdown from "../../components/Dropdown";

export default function ToDoList() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [dropdownValue, setDropdownValue] = useState("P1");
  const [taskCount, setTaskCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const handleTaskTitleChange = (event) => {
    setNewTask(event.target.value);
  };

  function handleCheckbox(e) {
    setChecked(e.target.checked);
  }

  const handleTaskDescriptionChange = (event) => {
    setNewTaskDescription(event.target.value);
  };

  const updateInputValue = (event) => {
    setInputValue(event.target.value);
  };

  const handlePriority = (event) => {
    setDropdownValue(event.target.value);
  };
  // each task to have an object - id and taskname, to differentiate them
  const addTask = () => {
    setTaskCount(taskCount + 1);
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      taskDescription: newTaskDescription,
      priority: dropdownValue,
      completed: false,
    };
    setTodoList([...todoList, task]);
    console.log(task);
  };
  // if task is = to task name rtn false
  const deleteTask = (id) => {
    setTaskCount(taskCount - 1);
    const newTodoList = todoList.filter((task) => {
      // simplify: return task !== taskName
      // task !== taskName
      if (task.id === id) {
        return false;
      } else {
        return true;
      }
    });
    setTodoList(newTodoList);
  };

  const editTask = () => {};

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };
  return (
    <>
      <BackButton />
      <div className="title">
        <h1>Todo App</h1>
      </div>
      <div className="to-do-list-container">
        <div className="task-title">
          <input
            onChange={handleTaskTitleChange}
            placeholder="Add task title..."
          />
          <div className="addTask">
            {/* <input
              onChange={handleTaskDescriptionChange}
              placeholder="Add task description here..."
            /> */}
            <div className="selection">
              <Dropdown
                option={"P1"}
                option2={"P2"}
                option3={"P3"}
                option4={"P4"}
                handleDropdown={handlePriority}
              />
            </div>
            <button onClick={addTask}>Add Task</button>
          </div>
        </div>
      </div>
      <div className="list">
        <h1>Task List ({taskCount})</h1>
        {todoList.map((task) => {
          return (
            <Task
              taskName={task.taskName}
              id={task.id}
              taskDescription={task.taskDescription}
              completed={task.completed}
              priority={task.priority}
              deleteTask={deleteTask}
              completeTask={completeTask}
              editTask={editTask}
            />
          );
        })}
      </div>
    </>
  );
}

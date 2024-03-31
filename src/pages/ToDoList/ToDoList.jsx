import "./ToDoList.css";
import React, { useState } from "react";
import Task from "./Task";
import BackButton from "../../components/Button/Button.jsx";
import Dropdown from "../../components/Dropdown";

export default function ToDoList() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");
  // when you have a list and you want to display each element in a list as a ui element, .map will iterate through each element
  const handleTaskTitleChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleTaskDescriptionChange = (event) => {
    setNewTaskDescription(event.target.value);
  };
  // each task to have an object - id and taskname, to differentiate them
  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      taskDescription: newTaskDescription,
      completed: false,
    };
    setTodoList([...todoList, task]);
    console.log(task);
  };
  // if task is = to task name rtn false
  const deleteTask = (id) => {
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
            <input
              onChange={handleTaskDescriptionChange}
              placeholder="Add task description here..."
            />
            <Dropdown
              priority={"Priority:"}
              option={"P1"}
              option2={"P2"}
              option3={"P3"}
              option4={"P4"}
            />
            <button onClick={addTask}>Add Task</button>
          </div>
        </div>
      </div>
      <div className="list">
        <h1>Task List</h1>
        {todoList.map((task) => {
          return (
            <Task
              taskName={task.taskName}
              id={task.id}
              taskDescription={task.taskDescription}
              completed={task.completed}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          );
        })}
      </div>
    </>
  );
}

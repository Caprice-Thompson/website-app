import "./ToDoList.css";
import React, { useState } from "react";
import Task from "./Task/Task";
import BackButton from "../../components/Button/Button.jsx";
import Dropdown from "../../components/Dropdown";
import TextInput from "../../components/Input/TextInput";

export default function ToDoList() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [dropdownValue, setDropdownValue] = useState("P1");
  const [taskCount, setTaskCount] = useState(0);
  const [editingTaskId, setEditingTaskId] = useState(null);

  const handleTaskTitleChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleTaskDescriptionChange = (event) => {
    setNewTaskDescription(event.target.value);
  };

  const handlePriority = (event) => {
    setDropdownValue(event.target.value);
  };

  const addTask = () => {
    setTaskCount(taskCount + 1);
    const task = {
      id: taskCount + 1,
      taskName: newTask,
      taskDescription: newTaskDescription,
      priority: dropdownValue,
      completed: false,
    };
    setTodoList([...todoList, task]);
    resetForm();
  };

  const deleteTask = (id) => {
    setTaskCount(taskCount - 1);
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) =>
        task.id === id ? { ...task, completed: true } : task
      )
    );
  };

  const editTask = (id) => {
    setEditingTaskId(id);
  };

  const updateTask = (updatedTask) => {
    setTodoList(
      todoList.map((task) =>
        task.id === updatedTask.id ? { ...task, ...updatedTask } : task
      )
    );
    setEditingTaskId(null);
  };

  const resetForm = () => {
    setNewTask("");
    setNewTaskDescription("");
    setDropdownValue("P1");
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
            value={newTask}
            onChange={handleTaskTitleChange}
            placeholder="Add task title..."
          />
          <div className="addTask">
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
        <h1>Task List ({todoList.length})</h1>
        {todoList.map((task) => (
          <div key={task.id}>
            {editingTaskId === task.id ? (
              <TextInput
                type="text"
                value={task.taskName}
                className="text-input"
                onChange={(e) =>
                  updateTask({ ...task, taskName: e.target.value })
                }
                onBlur={() => setEditingTaskId(null)}
              />
            ) : (
              <Task
                task={task}
                deleteTask={deleteTask}
                completeTask={completeTask}
                editTask={() => editTask(task.id)}
                taskName={task.taskName}
                id={task.id}
                taskDescription={task.taskDescription}
                completed={task.completed}
                priority={task.priority}
                onEdit={() => editTask(task.id)}
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
}

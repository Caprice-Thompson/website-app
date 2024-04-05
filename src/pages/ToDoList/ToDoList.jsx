import "./ToDoList.css";
import React, { useState } from "react";
import Task from "./Task/Task";
import BackButton from "../../components/Button/Button.jsx";
import Dropdown from "../../components/Dropdown/Dropdown";
import TextInput from "../../components/Input/TextInput";

export default function ToDoList() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [dropdownValue, setDropdownValue] = useState("");
  const [taskCount, setTaskCount] = useState(0);
  const [editingTaskId, setEditingTaskId] = useState(null);

  const handleTaskTitleChange = (event) => {
    setNewTask(event.target.value);
  };

  const handlePriority = (event) => {
    setDropdownValue(event.target.value);
    // selecting option from dropdown
    console.log(dropdownValue);
  };

  const addTask = () => {
    setTaskCount(taskCount + 1);
    const task = {
      id: taskCount + 1,
      taskName: newTask,
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
    console.log(task);
    setEditingTaskId(null);
  };

  const resetForm = () => {
    setNewTask("");
  };

  return (
    <>
      <BackButton />
      <div className="title">
        <h1>Todo App</h1>
      </div>
      <div className="to-do-list-container">
        <div className="task-title">
          <TextInput
            value={newTask}
            onChange={handleTaskTitleChange}
            placeholder="Add task title..."
          />
          <div className="addTask">
            <Dropdown
              id="priority-options"
              label="Priority"
              options={["P1", "P2", "P3", "P4"]}
              values={["P1", "P2", "P3", "P4"]}
              color={["red", "orange", "blue", "green"]}
              handleDropdown={handlePriority}
            />

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
                id="edit-input"
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
                completed={task.completed}
                priority={task.priority}
                onEdit={() => editTask(task.id)}
                values={["P1", "P2", "P3", "P4"]}
                color={["red", "orange", "blue", "green"]}
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
}

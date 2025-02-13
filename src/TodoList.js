import React, { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([{ text: "Sandip", completed: false }]);
  const [task, setTask] = useState("");

  const addTask = () => {
    console.log(tasks);
    console.log(task);
    if (task.trim() === "") {
      return;
    }
    setTasks([...tasks, ]);
    setTask("");
  };

  const toggleTask = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (index) => {
    console.log(index);
    setTasks(tasks.filter((task, i) => i !== index));
  };

  return (
    <div className="todo-container">
      <h2>To-Do List</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add a task..."
          value={task}
          onChange={(event) => setTask(event.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? "completed" : ""}>
            <span onClick={() => toggleTask(index)}>{task.text}</span>
            <button onClick={() => removeTask(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

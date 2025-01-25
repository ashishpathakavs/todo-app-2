import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [filter, setFilter] = useState("all");

  const addTask = () => {
    if (taskInput.trim()) {
      const newTask = { id: Date.now(), text: taskInput, completed: false };
      setTasks([...tasks, newTask]);
      setTaskInput("");
    }
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "active") return !task.completed;
    return true;
  });

  return (
    <div className="App">
      <div className="todo-container">
        <h1>To-Do List</h1>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Add a new task"
          className="task-input"
        />
        <button onClick={addTask} className="add-btn">
          Add
        </button>

        <div className="filters">
          <button onClick={() => setFilter("all")} className="filter-btn">
            All
          </button>
          <button onClick={() => setFilter("active")} className="filter-btn">
            Active
          </button>
          <button onClick={() => setFilter("completed")} className="filter-btn">
            Completed
          </button>
        </div>

        <div className="task-list">
          {filteredTasks.map((task) => (
            <div
              key={task.id}
              className={`task-row ${task.completed ? "completed" : ""}`}
            >
              <div className="task-text" onClick={() => toggleTask(task.id)}>
                <span>{task.text}</span>
              </div>
              <button
                className="delete-btn"
                onClick={() => deleteTask(task.id)}
              >
                x
              </button>
            </div>
          ))}
        </div>

        <div className="item-count">
          <span>{filteredTasks.length} items left</span>
        </div>
      </div>
    </div>
  );
}

export default App;

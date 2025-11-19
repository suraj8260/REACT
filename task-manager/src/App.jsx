import { useState, useEffect } from "react";
import TaskInput from "./components/TaskInput";
import TaskFilters from "./components/TaskFilters";
import TaskList from "./components/TaskList";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks"));
    if (saved) setTasks(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    setTasks([...tasks, { text, completed: false }]);
  };

  const toggleComplete = (i) => {
    const updated = [...tasks];
    updated[i].completed = !updated[i].completed;
    setTasks(updated);
  };

  const deleteTask = (i) => {
    setTasks(tasks.filter((_, index) => index !== i));
  };

  const editTask = (i, newText) => {
    const updated = [...tasks];
    updated[i].text = newText;
    setTasks(updated);
  };

  const filteredTasks = tasks.filter((task) =>
    filter === "completed"
      ? task.completed
      : filter === "pending"
      ? !task.completed
      : true
  );

  return (
    <div className="wrapper">
      <div className="app-card">
        <h1 className="title">📝 Task Manager</h1>

        <TaskInput addTask={addTask} />
        <TaskFilters filter={filter} setFilter={setFilter} />
        <TaskList
          tasks={filteredTasks}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      </div>
    </div>
  );
}

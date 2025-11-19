import { useState } from "react";

export default function TaskInput({ addTask }) {
  const [task, setTask] = useState("");

  const handleAdd = () => {
    if (!task.trim()) return;
    addTask(task);
    setTask("");
  };

  return (
    <div className="task-input-card">
      <input
        type="text"
        placeholder="✍️  Add a new task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
}

import { useState } from "react";

export default function TaskList({ tasks, toggleComplete, deleteTask, editTask }) {
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  const saveEdit = (i) => {
    editTask(i, editValue);
    setEditIndex(null);
  };

  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <div className="task-card" key={index}>
          
          <div className="left">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(index)}
              className="task-checkbox"
            />

            {editIndex === index ? (
              <input
                className="edit-input"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
              />
            ) : (
              <span className={task.completed ? "completed" : ""}>
                {task.text}
              </span>
            )}
          </div>

          <div className="actions">
            {editIndex === index ? (
              <button className="save-btn" onClick={() => saveEdit(index)}>
                Save
              </button>
            ) : (
              <button
                className="edit-btn"
                onClick={() => {
                  setEditIndex(index);
                  setEditValue(task.text);
                }}
              >
                Edit
              </button>
            )}

            <button className="delete-btn" onClick={() => deleteTask(index)}>
              Delete
            </button>
          </div>

        </div>
      ))}
    </div>
  );
}

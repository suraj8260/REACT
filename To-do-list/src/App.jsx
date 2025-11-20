import React, { useState } from 'react'
import Taskform from './components/Taskform'
import Tasklist from './components/Tasklist'
import Progresstracker from './components/Progresstracker'

export default function App() {
const[tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks(task);
  }
  return (
    <div>
      <header>
        <h1>To-Do-List</h1>
        <p><i>Your To-Do-List Manager</i></p>
      </header>
      <Taskform addTask = {addTask}/>
      <Tasklist />
      <Progresstracker />
      <button>Clear All Tasks</button>
    </div>
  )
}

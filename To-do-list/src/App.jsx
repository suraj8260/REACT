import { useState,useEffect } from 'react';
import Taskform from './Components/Taskform'
import Tasklist from './Components/Tasklist'
import Progresstracker from './Components/Progresstracker'


export default function App() {
  const [tasks, setTasks] = useState([]);


  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks));
  });


  const addTask = (task)=>{
    setTasks([...tasks, task])
  }

  const updateTask = (updatedTask, index) => {
    const newtask = [...tasks];
    newtask[index] = updatedTask;
    setTasks(newtask);
  }

  const deleteTask = () => {
    
  }

  return (
    <div>
      <header>
        <h1>TaskMan</h1>
        <p><i>Your friendly Task Manager</i></p>
      </header>
      <Taskform addTask = {addTask}/>
      <Tasklist tasks = {tasks} updateTask = {updateTask} deleteTask = {deleteTask}/>
      <Progresstracker />
      <button>clear All Tasks</button>
    </div>
  )
}

import React, { useState } from 'react'

export default function Taskform() {
    let [task, setTask] = useState("");
    let [priority, setPriority] = useState("Medium");
    let [category, setCategory] = useState("General");

    const handlesubmit = () => {
        addTask({text:task, priority, category, completed:false})
    }
  return (
    <div>
        <form className='task-form' onSubmit={handlesubmit}>
            <div id='inp'>
        <input type="text" placeholder='Enter The Task' onChange={(e)=>setTask(e.target.value)}/>
        <span><button type='submit'>Add Task</button></span>
        <h1>{task}  {priority} {category}</h1>
            </div>
            <div id='btns'>
                <select onChange={(e)=>setPriority(e.target.value)}>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>

                <select onChange={(e)=>setCategory(e.target.value)}>
                    <option value="General">General</option>
                    <option value="Work">Work</option>
                    <option value="Personal">Personal</option>
                </select>
            </div>
        </form>
    </div>
  )
}

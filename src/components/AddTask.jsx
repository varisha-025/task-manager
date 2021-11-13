import React, { useContext, useState } from 'react'
import contextVal from "../context/TaskContext";

export default function AddTask(props) {

    const con = useContext(contextVal);
    const { addTask } = con;
    // TODO: fix the reminder part
    const [newTask, setnewTask] = useState({ title: "", description: "", reminder: "false" });
    const onAddButton = (e) => {
        e.preventDefault();
        addTask(newTask.title, newTask.description, newTask.reminder);
        setnewTask({ title: "", description: "", reminder: "false" })
        props.showAlert("Added Successfully ", "success")
    }
    const onChange = (e) => {
        setnewTask({...newTask, [e.target.name]: e.target.value })
    }
    return (<>
    <h2> Add a task </h2> 
    <form >
        <div className = "mb-3" >
            <label htmlFor = "title" className = "form-label" > Title </label> 
            <input type = "text" className = "form-control" id = "title" name = "title" value={newTask.title} onChange = { onChange } minLength="5" required/> 
        </div> 
        <div className = "mb-3" >
            <label htmlFor = "description" className = "form-label" > Description </label> 
            <input type = "text" className = "form-control" id = "description" name = "description" value={newTask.description} onChange = { onChange } minLength="5" required/> 
        </div > 
        <div className = "mb-3 form-check" >
            <input type = "checkbox" className = "form-check-input" id = "exampleCheck1" value={newTask.reminder} onChange = { onChange }/> 
            <label className = "form-check-label" htmlFor = "reminder" name = "reminder" id = "reminder" > Reminder </label> 
        </div> 
        <button disabled={newTask.title.length<5 || newTask.description.length<5} type = "submit" className = "btn btn-primary" onClick = { onAddButton }> Add Task </button> 
        
    </form>
        
    
    
    </>)
}
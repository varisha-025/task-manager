import React, { useState } from "react";
import TaskContext from "./TaskContext";

const TaskState = (props) => {
    const host = "http://localhost:5000";

    let initial = [];

    const [tasks, setTasks] = useState(initial);

    // Get all note
    const getTasks = async () => {
        const response = await fetch(`${host}/api/tasks/fetchAllTasks`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            }
        });
        const json = await response.json();
        setTasks(json);
    }
    // Add a note
    const addTask = async (title, description, reminder) => {
        const response = await fetch(`${host}/api/tasks/addTask`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, reminder })
        });
        
        const task = await response.json();

        setTasks(tasks.concat(task));
    }
    // edit a node
    const editTask = async (id, title, description, reminder) => {
        const response = await fetch(`${host}/api/tasks/updateTask/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, reminder })
        });
        const json = response.json();
        // we cant update the state directly so we create a copy of that state and then chnage the note as given by the user and then set the updated state again
        let newTasks = JSON.parse(JSON.stringify(tasks))
        for (let index = 0; index < newTasks.length; index++) {
            const elem = newTasks[index];
            // if the task id matches then update that note
            if (elem._id === id) {
                newTasks[index].title = title;
                newTasks[index].description = description;
                newTasks[index].reminder = reminder;
                break;
            }

        }
        // setting  the updated state again
        setTasks(newTasks);
    }
    // delete note
    const deleteTask = async (id) => {
        const response = await fetch(`${host}/api/tasks/deleteTask/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            }
        });
        const json = response.json();
        console.log(json)
        // filter helps in deleting the note from the frontend
        let newTasks = tasks.filter((elem) => {
            return elem._id !== id;
        })
        // setting the updated state
        setTasks(newTasks);
        // console.log("delete button has been clicked", id)
    }
    // exporting all the CRUD functions made for tasks.
    return (<TaskContext.Provider value={
        { tasks, addTask, editTask, deleteTask, getTasks }}> {props.children}
    </TaskContext.Provider>)
};
export default TaskState;
import React, { useContext, useEffect, useRef, useState } from 'react'
import contextVal from "../context/TaskContext";
import TaskItem from "../components/TaskItem";
import AddTask from './AddTask';
import { useHistory } from 'react-router-dom';

const Tasks = (props) => {
    const con = useContext(contextVal);
    const { tasks, getTasks, editTask } = con;
    let history=useHistory();

    const [task, settask] = useState({ id: "", etitle: "", edescription: "", ereminder: "" });
    useEffect(() => {
        if(localStorage.getItem("token"))
        {getTasks();
        // eslint-disable-next-line
    }
        else{
            history.push("/login")
        }
        
    }, [])

    const updateTask = (curtask) => {
        ref.current.click()
        settask({ id: curtask._id, etitle: curtask.title, edescription: curtask.description, ereminder: curtask.reminder })
        
    }


    const onChange = (e) => {
        settask({ ...task, [e.target.name]: e.target.value })
    }
    const onUpdateButton = (e) => {
        // console.log("updating the new note",task)
        e.preventDefault();
        editTask(task.id, task.etitle, task.edescription, task.ereminder)
        // getTasks();
        refClose.current.click()
        props.showAlert("updated Successfully ", "success")
    }
    const ref = useRef(null)
    const refClose = useRef(null)
    return (<>
        <AddTask showAlert={props.showAlert}/>

        <button type="button" className="btn btn-primary my-3 d-none" ref={ref} data-bs-toggle="modal" data-bs-target="#exampleModal">
            button for modal
        </button>

        <div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Edit Task</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form >
                            <div className="mb-3" >
                                <label htmlFor="etitle" className="form-label" > Title </label>
                                <input type="text" className="form-control" value={task.etitle} id="etitle" name="etitle" onChange={onChange} minLength="5" required/>
                            </div>
                            <div className="mb-3" >
                                <label htmlFor="edescription" className="form-label" > Description </label>
                                <input type="text" className="form-control" value={task.edescription} id="edescription" name="edescription" onChange={onChange} minLength="5" required/>
                            </div >
                            <div className="mb-3 form-check" >
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="ereminder" value={task.ereminder} name="ereminder" id="ereminder" onChange={onChange}> Reminder </label>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" ref={refClose} data-bs-dismiss="modal">Cancel</button>
                        <button disabled={task.etitle.length<5 || task.edescription.length<5} type="submit" className="btn btn-primary" onClick={onUpdateButton}>Update Task</button>
                    </div>
                </div>
            </div>
        </div>
        <h2 className="my-3"> Your tasks </h2>
        <div className="row my-3" >
            {/* when using a ternary operator if there's no else part then we use && operator*/}
            {tasks.length === 0 && <p className="mx-1">No Tasks to show</p>}
            {tasks.map((task) => {
                return <TaskItem key={task._id}
                    updateTask={updateTask} showAlert={props.showAlert}
                    task={task} />;
            })}
        </div>
    </>
    )
}

export default Tasks;
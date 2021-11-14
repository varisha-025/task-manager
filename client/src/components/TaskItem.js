import React, { useContext, } from 'react'
import contextVal from "../context/TaskContext";

const TaskItem = (props) => {
    const con = useContext(contextVal);
    const { deleteTask, editTask } = con;
    const { task, updateTask } = props;

    return (
        <div className="col-md-3" >
            <div className="card my-2" >
                <div className="card-body" >
                    <h5 className="card-title" > {task.title} </h5>
                    <p className="card-text" > {task.description} </p>
                    <p className="card-text" > Reminder = {task.reminder}</p>
                    <i className="fas fa-trash mx-1" onClick={() => { deleteTask(task._id); props.showAlert("deleted Successfully ", "success")}}> </i>
                    <i className="fas fa-pen mx-2" onClick={() => { updateTask(task) }}> </i>
                </div >
            </div>
        </div >
    )
};
export default TaskItem;
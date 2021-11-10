import React, { useContext } from 'react'
import contextVal from "../context/TaskContext";
import TaskItem from "../components/TaskItem";

const Tasks = () => {
    const con = useContext(contextVal);
    const { tasks, setTasks } = con;
    return ( <
            div className = "row my-3" >
            <
            h2 > Your tasks < /h2>    {
            tasks.map((task) => {
                return <TaskItem task = { task }
                / > ;
            })
        } <
        /div>
)
}

export default Tasks;
import React from 'react'

const TaskItem = (props) => {
    const { task } = props;
    return ( <
        div className = "col-md-3" >
        <
        div class = "card my-2" >

        <
        div class = "card-body" >
        <
        h5 class = "card-title" > { task.title } < /h5> <
        p class = "card-text" > { task.description } < /p>  <
        p class = "card-text" > Reminder = { task.reminder } < /p> < /
        div > <
        /div>


        <
        /div>
    )
}

export default TaskItem;
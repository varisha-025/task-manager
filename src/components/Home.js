import React from 'react'
import Tasks from './Tasks';

export default function Home() {
    
    return ( <
            div className = "container my-3" >

            <
            h2 > Add a task < /h2> <
            form className = "my-3" >
            <
            div className = "mb-3" >
            <
            label htmlFor = "exampleInputEmail1"
            className = "form-label" > Title < /label> <
            input type = "email"
            className = "form-control"
            id = "exampleInputEmail1" /
            >
            <
            /div> <
            div className = "mb-3" >
            <
            label htmlFor = "exampleInputPassword1"
            className = "form-label" > Description < /label> <
            input type = "password"
            className = "form-control"
            id = "exampleInputPassword1" / >
            <
            /div> <
            div className = "mb-3 form-check" >
            <
            input type = "checkbox"
            className = "form-check-input"
            id = "exampleCheck1" / >
            <
            label className = "form-check-label"
            htmlFor = "exampleCheck1" > Reminder < /label> < /
            div > <
            button type = "submit"
            className = "btn btn-primary" > Add < /button> < /
            form >
            <Tasks/>

         </div>
)
}
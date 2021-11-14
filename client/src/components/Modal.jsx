import React, { useContext, useState } from 'react'
import TaskContext from '../context/TaskContext';
import contextVal from "../context/TaskContext";

export default function Modal({task}) {

    const con = useContext(contextVal);
    const { editTask } = con;



    return ( 
    <div>

        
    </div>
    )
}
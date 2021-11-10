import React, { useState } from "react";
import TaskContext from "./TaskContext";

const TaskState = (props) => {

        let initial = [{
                "_id": "6187ab83d55075109caab207",
                "user": "6187a724547a62c574190d98",
                "title": "Grocery Shopping",
                "description": "Eggs,milk,broccoli,pasta,cheese before 5:00 PM",
                "reminder": "false",
                "date": "2021-11-07T10:33:39.733Z",
                "__v": 0
            },
            {
                "_id": "61891eb016a27395fa82a883",
                "user": "6187a724547a62c574190d98",
                "title": "POAC quiz",
                "description": "Quiz tomorrow at 1:00 PM on canvas",
                "reminder": "true",
                "date": "2021-11-08T12:57:20.178Z",
                "__v": 0
            },
            {
                "_id": "61891ed516a27395fa82a885",
                "user": "6187a724547a62c574190d98",
                "title": "Dry Cleaning",
                "description": "Pick up dry cleaning between 4:00-5:00 PM",
                "reminder": "true",
                "date": "2021-11-08T12:57:57.647Z",
                "__v": 0
            },
            {
                "_id": "61891f0016a27395fa82a887",
                "user": "6187a724547a62c574190d98",
                "title": "Hit the gym",
                "description": "Go to the gym and eat preworkout 2 hrs prior to it.",
                "reminder": "false",
                "date": "2021-11-08T12:58:40.495Z",
                "__v": 0
            }
        ]

        const [tasks, setTasks] = useState(initial);
        return ( < TaskContext.Provider value = {
                { tasks, setTasks }
            } > { props.children } < /TaskContext.Provider>)
        };

        export default TaskState;
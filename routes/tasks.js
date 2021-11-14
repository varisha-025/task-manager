const express = require("express")
const router = express.Router();
const { body, validationResult } = require('express-validator');
// import model
const Task = require('../models/Tasks')
    // import middleware to get details of a user
const fetchUser = require('../middleware/fetchUser');

// ROUTE 2: Get all Tasks of the user who is logged in through "get" FROM "/api/tasks/fetchAllTasks" , login REQUIRED

router.get('/fetchAllTasks', fetchUser, async(req, res) => {

    try {
        const allTasks = await Task.find({ user: req.user.id })
        res.json(allTasks);
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error")
    }
})

// ROUTE 2: Add a new Task of the user who is logged in through "post" FROM "/api/tasks/addTask" , login REQUIRED

router.post('/addTask', fetchUser, [body('title', 'Enter a valid title').isLength({ min: 5 }), body('description', "Enter valid description").isLength({ min: 5 })], async(req, res) => {
    try {
        const errors = validationResult(req);
        const { title, description, reminder } = req.body;
        // handles any error that may be thrown
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        // CREATING A NEW TASK WITH THE DETAILS WHICH WAS BROUGHT BY THE REQUEST
        const task = new Task({
            title,
            description,
            reminder,
            user: req.user.id
        })
        const savedTask = await task.save();
        res.json(savedTask);
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error")
    }
})

// ROUTE 3: Update an existing Task of the user who is logged in through "put" FROM "/api/tasks/updateTask" , login REQUIRED
// put request is used for updating .
// /:id means we're passing a variable to the url. we will find the note using that task id and then update it.
// to access this id variable we have to access it by req.params.id
router.put('/updateTask/:id', fetchUser, async(req, res) => {

    // destructuring variables using the request 
    const { title, description, reminder } = req.body;
    try {
        // create a new task and add the details of the task with which the user want to update the task with.
        const newTask = {};
        if (title) {
            newTask.title = title;
        }
        if (description) {
            newTask.description = description;
        }
        if (reminder) {
            newTask.reminder = reminder;
        }
        // Match the user first 
        let taskGot = await Task.findById(req.params.id);
        // if task is not found.
        if (!taskGot) {
            return res.status(404).send("NOT FOUND")
        }
        // checking if the user which has requested is the same user who owns this task.
        if (req.user.id !== taskGot.user.toString()) {
            return res.status(401).send("NOT ALLOWED")
        }
        // FInd the note to be updated and update it.
        taskGot = await Task.findByIdAndUpdate(req.params.id, { $set: newTask }, { new: true })
        res.json(taskGot);
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error")
    }
})



// ROUTE 4: Delete an existing Task of the user who is logged in through "post" FROM "/api/tasks/deleteTask" , login REQUIRED
// put request is used for updating .
// /:id means we're passing a variable to the url. we will find the note using that task id and then update it.
// to access this id variable we have to access it by req.params.id
router.delete('/deleteTask/:id', fetchUser, async(req, res) => {
    try {
        // Match the user first 
        let taskGot = await Task.findById(req.params.id);
        // if task is not found.
        if (!taskGot) {
            return res.status(404).send("NOT FOUND")
        }
        // checking if the user which has requested is the same user who owns this task.
        if (req.user.id !== taskGot.user.toString()) {
            return res.status(401).send("NOT ALLOWED")
        }
        // FInd the note to be deleted and delete it.
        taskGot = await Task.findByIdAndDelete(req.params.id);
        res.json({ "message": "Success!! Deleted this task", taskGot: taskGot });

    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error")
    }
})

module.exports = router;
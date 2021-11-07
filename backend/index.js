// import from db to connect database
const MongoConnect = require('./db')
MongoConnect();

const express = require('express')
const app = express()
    // port must not be 3000 as our react app will work on it.
const port = 5000

// middleware by express
app.use(express.json())
    // Available routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/tasks', require('./routes/tasks'))

// 
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
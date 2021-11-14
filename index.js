// import from db to connect database
const MongoConnect = require('./db')
MongoConnect();
const express = require('express')
const app = express()
const path= require("path")
var cors = require('cors')


app.use(cors())
app.use(express.json())

// Available routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/tasks', require('./routes/tasks'))

// port must not be 3000 as our react app will work on it.

if (process.env.NODE_ENV==="production"){
    app.use(express.static('client/build'));
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}
// middleware by express

const port = process.env.PORT || 5000
// 
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
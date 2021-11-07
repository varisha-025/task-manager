// connect our mongodb database with our frontend 

const mongoose = require('mongoose')
    // connection string to connect with the website
const mongoURI = "mongodb://localhost:27017/task-manager?readPreference=primary&appname=MongoDB%20Compass&ssl=false"

const MongoConnect = () => {
        mongoose.connect(mongoURI, () => {
            console.log("Connected to mongoose successfully");
        })
    }
    // exportinf the func so that it can be imported by other files
module.exports = MongoConnect;
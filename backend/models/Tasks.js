const mongoose = require('mongoose');
const { Schema } = mongoose;

const TaskSchema = new Schema({
    title: {
        type: String,
        required: true
    }, // String is shorthand for {type: String}
    description: {
        type: String,
        required: true
    },
    date: { type: Date, default: Date.now },
    reminder: {
        type: String,
        default: false
    }
    // ,completed: Boolean
});


module.exports = mongoose.model('tasks', TaskSchema);
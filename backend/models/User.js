// common js module import
const mongoose = require('mongoose')
const { Schema } = mongoose;


// schema for user collection
const UserSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    password: {
        type: String,
        required: true
    }

});
const User = mongoose.model('user', UserSchema);
// exporting the schema
module.exports = User;
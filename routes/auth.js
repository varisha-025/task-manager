const express = require("express")
const router = express.Router();
// importing the model
const User = require('../models/User')
    // so that we get a unique data of our user and they cannot send invalid details
const { body, validationResult } = require('express-validator');
// module for hashing and salting passwords
const bcrypt = require('bcryptjs');

// jwt module for authentication of a user
const jwt = require('jsonwebtoken');
const JWT_SECRET = "hjdbcjfkadbfckjascfjakckbajfk342432@@##@";

const fetchUser = require('../middleware/fetchUser');

// ROUTE 1: Creating a user using "POST" FROM "/api/auth/createUser" doesnt require login
router.post('/createUser', [body('email', 'Enter a valid email').isEmail(), body('password', "Password must be atleast 5 characters").isLength({ min: 5 }), body('name', 'Enter a valid name').isLength({ min: 3 })], async(req, res) => {
    const errors = validationResult(req);
    let success=false;
    // handles any error that may be thrown
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // try catch block to catch any errors that may ne thrown
    try {
        let user = await User.findOne({ email: req.body.email });
        // check whether a user with the same email exist or not
        if (user) {
            return res.status(400).json({ success,error: "User already exists!Please LOGIN" })
        }

        // salt gets stored internally by the bcrypt module
        const salt = await bcrypt.genSalt(10);
        //  hash func returns a promise
        let secPass = await bcrypt.hash(req.body.password, salt);
        // returns a promise and creates a user
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass
        });
        const data = {
                user: {
                    id: user.id
                }
            }
        // authToken is used to verify/authenticate the users.

        const authToken = jwt.sign(data, JWT_SECRET);
        success=true;
        res.json({ success,authToken })

    } catch (error) {
        // for any other error
        console.error(error.message)
        res.status(500).send("Internal Server Error")
    }
})

// ROUTE 2: Authenticating a user using "POST" FROM "/api/auth/login" , NO login REQUIRED

router.post('/login', [body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists()
], async(req, res) => {
    let success=false;
    const errors = validationResult(req);
    // handles any error that may be thrown
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
        // checks in the database if a user exists with the given email
        let user = await User.findOne({ email });
        // if user doesnt exist
        if (!user) {
            return res.status(400).json({ error: "Please login using correct credentials." })
        }
        // comparing the hash of the password in the database with the password entered by the user.
        const passCompare = await bcrypt.compare(password, user.password)
        if (!passCompare) {
            return res.status(400).json({ success,error: "Please login using correct credentials." })
        }
        const payload = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(payload, JWT_SECRET);
        success=true;
        res.json({ success,authToken })

    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error")
    }

});


// ROUTE 3: GETTING a user details using "POST" FROM "/api/auth/getUser" , login REQUIRED
router.post('/getUser', fetchUser, async(req, res) => {
    try {
        const userId = req.user.id;
        // finds the user by id and select all the details of it except the password(-password)
        const user = await User.findById(userId).select("-password");
        res.send(user);
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error")
    }
});

// so that we can use it through some other js file
module.exports = router;
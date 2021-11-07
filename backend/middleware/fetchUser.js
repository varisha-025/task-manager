// jwt module for authentication of a user
const jwt = require('jsonwebtoken');
const JWT_SECRET = "hjdbcjfkadbfckjascfjakckbajfk342432@@##@";

// creating a middleware function to fetch the details of the user when they login to the server.
const fetchUser = (req, res, next) => {
    // get the user if from the jwt token and id to the req object
    const token = req.header("auth-token")
    if (!token) {
        res.status(401).send("Please authenticate using a valid token")
    }
    try {
        const data = jwt.verify(token, JWT_SECRET)
        req.user = data.user;
        next();
    } catch (error) {
        // unauthorised user
        res.status(401).send("Please authenticate using a valid token")
    }

}

module.exports = fetchUser;
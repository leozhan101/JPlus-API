var express = require('express');
var router = express.Router();
var db = require('../dbConfig');

// This API is responsible for checking if a username already exists in the database when a user is registing for a new account
router.get('/', async function (req, res, next) {
    let username = req.query.username;
    
    let query = { username: username};

    let projection = {};

    let result = await db.find(query, projection);

    let userNameExist = false;

    if (result.length > 0) {
        userNameExist = true;
    }

    userNameExistObj = {userNameExist: userNameExist};

    userNameExistObj = JSON.stringify(userNameExistObj);

    res.send(userNameExistObj);
});

module.exports = router;

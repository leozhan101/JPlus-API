var express = require('express');
var router = express.Router();
var db = require('../dbConfig');
var sha1 = require('sha1');

// This API is responsible for storing user info into the database when they register a new account
router.post('/', async function (req, res, next) {
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let username = req.body.username;
    let password = sha1(req.body.password);

    myObj = {username: username, firstname: firstname, lastname: lastname, password: password}

    let msg = await db.insert(myObj)

    res.send(msg);
});

module.exports = router;

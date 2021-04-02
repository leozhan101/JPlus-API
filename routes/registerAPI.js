var express = require('express');
var router = express.Router();
var db = require('../dbConfig');

/* GET users listing. */
router.post('/', function (req, res, next) {
    let username = req.query.username;
    let firstname = req.query.firstName;
    let lastname = req.query.lastName;
    let password = req.query.password;

    myObj = {username: username, firstname: firstname, lastname: lastname, password: password}

    db.insert(myObj)

    // res.send('register API page');
});

module.exports = router;

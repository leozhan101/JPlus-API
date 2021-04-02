var express = require('express');
var router = express.Router();
var db = require('../dbConfig');

/* GET users listing. */
router.get('/', function (req, res, next) {
    // let username = req.query.username;
    // let firstname = req.query.firstName;
    // let lastname = req.query.lastName;
    // let password = req.query.password;

    let username = 'test';
    let firstname = 'first';
    let lastname = 'last';
    let password = 'pw';

    myObj = {username: username, firstname: firstname, lastname: lastname, password: password}

    db.insert(myObj)

    res.send('register API page');
});

module.exports = router;

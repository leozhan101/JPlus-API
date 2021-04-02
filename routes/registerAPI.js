var express = require('express');
var router = express.Router();
var db = require('../dbConfig');

/* GET users listing. */
router.post('/', function (req, res, next) {
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let username = req.body.username;
    let password = req.body.password;

    myObj = {username: username, firstname: firstname, lastname: lastname, password: password}

    db.insert(myObj)

    // res.send('Just Inserted');
});

module.exports = router;

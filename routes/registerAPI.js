var express = require('express');
var router = express.Router();
var db = require('../dbConfig');

/* GET users listing. */
router.post('/', async function (req, res, next) {
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let username = req.body.username;
    let password = req.body.password;

    myObj = {username: username, firstname: firstname, lastname: lastname, password: password}

    let msg = await db.insert(myObj)

    res.send(msg);
});

module.exports = router;

var express = require('express');
var router = express.Router();
var db = require('../dbConfig');

/* GET home page. */
router.post('/', function (req, res, next) {
    let username = req.body.username;
    let password = req.body.password;
    let firstname = "";

    console.log("bdoy here: ", req.body);
    let query = { username: username, password: password };

    let projection = {_id: 0, firstname: 1 };

    let result = db.find(query, projection);

    let pass = false;

    if (result.length > 0) {
        pass = true;
        firstname = result[0].firstname;
    }

    pass = { pass: pass, firstname: firstname};

    userNameExistObj = JSON.stringify(pass);

    res.send(pass);
});

module.exports = router;

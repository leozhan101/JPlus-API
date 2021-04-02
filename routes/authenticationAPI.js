var express = require('express');
var router = express.Router();
var db = require('../dbConfig');

/* GET users listing. */
router.get('/', function (req, res, next) {
    let username = req.query.username;
    let password = req.query.password;
   
    let query = { username: username, password: password};

    let projection = {};

    let result = db.find(query, projection);

    let pass = false;

    if (result.length > 0) {
        pass = true;
    }

    pass = { pass: pass };

    userNameExistObj = JSON.stringify(pass);

    res.send(pass);
});

module.exports = router;

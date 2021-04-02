var express = require('express');
var router = express.Router();
var db = require('../dbConfig');

/* GET users listing. */
router.get('/', function (req, res, next) {
    let username = req.query.username;

    // console.log('check name here: ', username);
    // let username = "test"

    let query = { username: username};

    let projection = {};

    let result = db.find(query, projection);

    let userNameExist = false;

    if (result.length > 0) {
        userNameExist = true;
    }

    userNameExistObj = {userNameExist: userNameExist};

    userNameExistObj = JSON.stringify(userNameExistObj);

    res.send(userNameExistObj);
});

module.exports = router;

var express = require('express');
var router = express.Router();
var db = require('../dbConfig');

/* GET users listing. */
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

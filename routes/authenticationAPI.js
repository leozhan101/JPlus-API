var express = require('express');
var router = express.Router();
var db = require('../dbConfig');
var sha1 = require('sha1');

// This API is responsible for checking the identity of user who log in through JPlus Log in page
router.post('/', async function (req, res, next) {
    let username = req.body.username;
    let password = sha1(req.body.password);
    let firstname = "";

    let query = { username: username, password: password };

    let projection = {_id: 0, firstname: 1 };

    // If user is in our database, then user's first name will be returned
    let result = await db.find(query, projection);

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

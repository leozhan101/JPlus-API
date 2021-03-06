var express = require('express');
var router = express.Router();
var db = require('../dbConfig');

// This api is responsible for returning all locations a user added before 
router.get('/', async function (req, res, next) {
    let username = req.query.username;
    let query = { username: username };

    let projection = { _id: 0, locations: 1 };

    let result = await db.find(query, projection);

    if (result.length > 0) {
        result = JSON.stringify(result[0]);
    } else {
        result = {}
    }

    res.send(result);

});

module.exports = router;

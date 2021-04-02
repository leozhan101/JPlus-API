var express = require('express');
var router = express.Router();
var db = require('../dbConfig');

/* GET users listing. */
router.get('/', function (req, res, next) {
    // let username = req.query.username;
    let username = 'test';
    let query = { username: username };

    let projection = { _id: 0, location: 1 };

    let result = db.find(query, projection);

    res.send(result);

});

module.exports = router;

var express = require('express');
var router = express.Router();
var db = require('../dbConfig');

/* GET users listing. */
router.get('/', function (req, res, next) {
    // let username = req.query.username;
    // let password = req.query.password;
    let username = "test"
    let password = "pw";
    
    let query = { username: username, password: password};

    let projection = {};

    let result = db.find(query, projection);

    res.send(result);
});

module.exports = router;

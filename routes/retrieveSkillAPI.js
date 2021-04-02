var express = require('express');
var router = express.Router();
var db = require('../dbConfig');

/* GET users listing. */
router.get('/', function (req, res, next) {
    // let username = req.query.username;
    let username = 'test';
    let query = {username: username};
    
    let projection = {_id: 0, skills: 1};

    db.find(query, projection);

});

module.exports = router;

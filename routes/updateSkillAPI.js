var express = require('express');
var router = express.Router();
var db = require('../dbConfig');

/* GET users listing. */
router.post('/', function (req, res, next) {
    let skillObj = JSON.parse(req.query.skills);
    let username = req.query.username;
    
    selector = { username: username };

    db.update(selector, skillObj);

    res.send("location update");
});

module.exports = router;

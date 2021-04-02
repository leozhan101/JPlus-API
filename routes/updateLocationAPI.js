var express = require('express');
var router = express.Router();
var db = require('../dbConfig');

/* GET users listing. */
router.get('/', function (req, res, next) {
    // let locationObj = JSON.parse(req.query.location);
    // let username = req.query.username;
    let locationObj = {location: "Toronto"};
    let username = 'test'

    selector = { username: username };

    db.update(selector, locationObj);
});

module.exports = router;

var express = require('express');
var router = express.Router();
var db = require('../dbConfig');

/* GET users listing. */
router.post('/', function (req, res, next) {
    let locationObj = {locations: req.body.locations};
    let username = req.body.username;

    selector = { username: username };

    db.update(selector, locationObj);
});

module.exports = router;

var express = require('express');
var router = express.Router();
var db = require('../dbConfig');

// This api is responsible for updating a user's locations after they added new locations
router.post('/', async function (req, res, next) {
    let locationObj = {locations: req.body.locations};
    let username = req.body.username;

    selector = { username: username };

    let msg = await db.update(selector, locationObj);

    res.send(msg);
});

module.exports = router;

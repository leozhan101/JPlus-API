var express = require('express');
var router = express.Router();
var db = require('../dbConfig');

// This api is responsible for update a user's skils after they update their skills
router.post('/', async function (req, res, next) {
    let skillObj = {skills: req.body.skills};
    let username = req.body.username;

    selector = { username: username };

    let msg = await db.update(selector, skillObj);

    res.send(msg);

});

module.exports = router;

var express = require('express');
var router = express.Router();
var db = require('../dbConfig');

/* GET users listing. */
router.post('/', async function (req, res, next) {
    let skillObj = {skills: req.body.skills};
    let username = req.body.username;

    selector = { username: username };

    let msg = await db.update(selector, skillObj);

    return msg;

});

module.exports = router;

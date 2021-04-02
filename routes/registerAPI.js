var express = require('express');
var router = express.Router();
var db = require('../dbConfig');

/* GET users listing. */
router.post('/', function (req, res, next) {
    let username = req.body.username;
    let firstname = req.body.firstName;
    let lastname = req.body.lastName;
    let password = req.body.password;

    console.log("body: ", req.body);

    console.log("query: ", req.query);

    console.log("param: ", req.params);

    // console.log("req: ", req);
    console.log(username);
    console.log(firstName);

    myObj = {username: username, firstname: firstname, lastname: lastname, password: password}

    db.insert(myObj)

    res.send('Just Inserted');
});

module.exports = router;

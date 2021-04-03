var express = require('express');
var router = express.Router();
const { PythonShell } = require('python-shell');
var db = require('../dbConfig');

// /* GET home page. */
router.post('/', function (req, res, next) {

  let username = req.body.username;
  // let username = "test";
  let resume;
  let uploadPath;

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  // The name of the input field (i.e. "resume") is used to retrieve the uploaded file
  resume = req.files.resume;
  console.log(process.cwd());
  uploadPath = process.cwd() + "/backend-engine/" + resume.name;

  // Use the mv() method to place the file somewhere on your server
  resume.mv(uploadPath, function (err) {
    if (err)
      return res.status(500).send(err);

    // res.send('File uploaded!');
  });

  let options = {
    args: [resume.name]
  };

  PythonShell.run('././backend-engine/keywords_extraction_engine.py', options, function (err, results) {
    if (err) throw err;

    // convert results into an json object
    let skillArr = results[0].split(",");
    // let skillArr = ['cani', 'mabi'];
    let skillObj = {skills: skillArr};
    let skillJSON = JSON.stringify(skillObj);

    res.send(skillJSON);

    selector = {username: username};

    let msg = db.update(selector, skillObj);

    return msg;

    // console.log('finished');
  });

});

module.exports = router;

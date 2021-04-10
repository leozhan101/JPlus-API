var express = require('express');
var router = express.Router();
const { PythonShell } = require('python-shell');
var db = require('../dbConfig');

// This api is responsible for getting a user's resume, extracting skills from it
// and stored the extracted skills into the database
router.post('/', function (req, res, next) {
  let username = req.body.username;
  let resume;
  let uploadPath;

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  resume = req.files.file;
  uploadPath = process.cwd() + "/backend-engine/" + resume.name;

  resume.mv(uploadPath, function (err) {
    if (err)
      return res.status(500).send(err);

    console.log('file uploaded')
  });

  let options = {
    args: [resume.name]
  };

  PythonShell.run('././backend-engine/keywords_extraction_engine.py', options, async function (err, results) {
    if (err) throw err;

    let skillArr = results[0].split(",");
    let skillObj = {skills: skillArr};

    selector = {username: username};

    let msg = await db.update(selector, skillObj);

    res.send(msg);

  });

});

module.exports = router;

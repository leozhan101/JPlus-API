var express = require('express');
var router = express.Router();
const { PythonShell } = require('python-shell');

// /* GET home page. */
router.get('/', function (req, res, next) {

  PythonShell.run('././backend-engine/keywords_extraction_engine.py', null, function (err, results) {
    if (err) throw err;
    
    // convert results into an json object
    let skillArr = results[0].split(",");
    let skillObj = {skills: skillArr};
    let skillJSON = JSON.stringify(skillObj);

    res.send(skillJSON);

    console.log('finished');
  });

});

module.exports = router;

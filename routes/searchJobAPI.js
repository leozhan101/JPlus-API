var express = require('express');
var router = express.Router();

/* GET users listing. */


const superagent = require('superagent');




router.get('/', function (req, res, next) {

    superagent.get('http://api.indeed.com/ads/apisearch')
.query({
    publisher: '7778623931867371',
    v: '2',
    format: 'json',
    q: 'C++, Java, Python, html, PHP, C, PERL,Communication, operation, management',
    l: 'Waterloo',
    radius: 50,
    limit:3,
    sort: 'date',
    highlight: 1,
    filter: 1,
    latlong: 1,
    co: 'canada'.toLowerCase(),
    userip: '',
    useragent: ''
})
.end((err, ans) => {
  if (err) { return console.log(err); }
  console.log(ans.body);
  res.send(ans.body);
  res.send(ans.body.jobtitle);
});
    // res.send('searchJob API page');
});

module.exports = router;

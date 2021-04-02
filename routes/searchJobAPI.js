var express = require('express');
var router = express.Router();
const superagent = require('superagent');

/* GET users listing. */
router.get('/', function (req, res, next) {
    console.log( `body here: ${req.query}`);

    let locations = req.query.locations;
    let skills = req.query.skills;
   

    let q = skills.join(", ");
    let l = locations.join(", ");
   

    superagent.get('http://api.indeed.com/ads/apisearch')
        .query({
            publisher: '7778623931867371',
            v: '2',
            format: 'json',
            // q: 'C++, Java, Python, html, PHP, C, PERL,Communication, operation, management',
            // l: 'Waterloo',
            q: q,
            l: l,
            radius: 50,
            limit: 3,
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
});

module.exports = router;

var express = require('express');
var router = express.Router();
const superagent = require('superagent');

/* GET users listing. */
router.post('/', function (req, res, next) {
    let locations = req.body.locations;
    let skills = req.body.skills;
   

    let mySkills = skills.join(" ");
    let myLocations = locations.join(" ");
   

    superagent.get('http://api.indeed.com/ads/apisearch')
        .query({
            publisher: '7778623931867371',
            v: '2',
            format: 'json',
            q: mySkills,
            l: myLocations,
            limit: 25,
            fromage: 15,
            highlight: 1,
            filter: 1,
            latlong: 1,
            co: 'ca',
            userip: '',
            useragent: ''
        })
        .end((err, ans) => {
            if (err) { return err }
            var result = ans.body.results.map(item => {
                return {
                    jobtitle: item.jobtitle,
                    company: item.company,
                    city: item.city,
                    province: item.state,
                    jobtitle: item.jobtitle,
                    url: item.url,
                    jobdescription: item.snippet
                }
            });

            result = JSON.stringify({results: result});

            // console.log(ans.body.results);

            res.send(result);
        });
});

module.exports = router;

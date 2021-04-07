var express = require('express');
var router = express.Router();
const superagent = require('superagent');

/* GET users listing. */
router.post('/', async function (req, res, next) {
    var locations = req.body.locations;
    var skills = req.body.skills;
    var query = [];

    var i, j, temp, chunk = 1;
    for (i = 0, j = skills.length; i < j; i += chunk) {
        temp = skills.slice(i, i + chunk).join(" ");
        query.push(temp);
    }

    var myLocations = locations.join(" ");

    var l = 24 / query.length;
    var limit = Math.ceil(l);

    var results = [];

    for (i = 0; i < query.length; i++) {
        try {
            let response = await superagent.get('http://api.indeed.com/ads/apisearch')
                .query({
                    publisher: '7778623931867371',
                    v: '2',
                    format: 'json',
                    q: query[i],
                    l: myLocations,
                    limit: limit,
                    fromage: 15,
                    highlight: 1,
                    filter: 1,
                    latlong: 1,
                    co: 'ca',
                    userip: '',
                    useragent: ''
                })

            var r = response.body.results.map(item => {
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

            for (var k = 0; k < r.length; k++) {
                results.push(r[k]);
            }
    
        } catch (error) {
            throw new Error(`error: ${error}.`);
        }
    }

    if (results.length > 24)
        results = results.slice(0, 24);

    res.send(JSON.stringify({results: results}));
});

module.exports = router;

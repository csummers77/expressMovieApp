var express = require('express');
var router = express.Router();
const apiKey = require('../config');
const request = require('request')

router.get('/', function(req, res) {
  request.get(search,(error,response,body)=>{
    res.render('search',{
    });
    // res.json(parsedData)
  })
  // res.render('index', { title: 'Express' });
});

router.post('/movie', (req, res)=>{
    // submitted data froms forms comes in the req object
    // querystring data is in req.body
    res.json(req.body);
});

module.exports = router;
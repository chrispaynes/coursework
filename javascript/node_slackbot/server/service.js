const env = require('../env');
const express = require('express');
const request = require('superagent');

const service = express();
const googleMapsKey = process.env.GOOGLE_MAPS_KEY;

service.get('/service/:location', (req, res, next) => {
  request.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + req.params.location + '&key=' + googleMapsKey, (err, response) => {
    // console.log(res.text

    // if (err) {
    //   console.log("ERROR: ", err);
    //   return res.sendStatus(500);
    // }
    res.json(response.body.results[0]);
    console.log(req, res)
  });

  next();
});

module.exports = service;

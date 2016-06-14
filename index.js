var util = require('util');
var request = require('request');
var express = require('express');
var app = express();
var http = require("http");

app.get('/:id', function(req, res) {

  var projectId = req.params.id;
  var authToken = process.env.authToken;

  var uri = util.format('https://api.onmodulus.net/project/%s/logs?authToken=%s', projectId, authToken);
  console.log(req, res);

request(uri, function(err, response, body) {
console.log(body)
  });
});


app.listen(8080, function () {
  console.log('Logging app listening on port 8080!');
});
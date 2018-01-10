var express = require('express');
var app = express();

app.get('/', function (req, res) {
  console.log(req);
  res.send({some: 'json'});
});

app.listen(3000);
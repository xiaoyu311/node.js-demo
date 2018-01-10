var express = require('express');
var app = express();

app.get('/', function (req, res) {
  console.log(app.locals);
  res.send('Hello World');
});

app.listen(3000);
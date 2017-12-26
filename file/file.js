var http = require('http');
var router = require('./models/router');
var url = require('url');
// var openFile = require('./models/common');

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  if (req.url !== '/favicon.ico') {
    var pathName = url.parse(req.url);
    var filename = pathName.pathname.replace(/\//, '');
    router[filename](res);
    // openFile.readfileSync('./models/index.html');
    // openFile.readfileaSync('./models/index.html');
    // console.log('住程序')
    // res.end();
  }
}).listen(8080)
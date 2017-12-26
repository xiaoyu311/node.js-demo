var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  console.log(req.url)
  if (req.url !== '/favicon.ico') {
    console.log(url.parse(req.url));
    res.write('url');
  }
  res.end();
}).listen(8080);
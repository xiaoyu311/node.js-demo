var http = require('http');
var url = require('url');

function start(route) {
  var onRequest = function (req, res) {
    if (req.url != '/favicon.ico') {
      var pathname = url.parse(req.url).pathname;
      route(pathname);
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.write('hello world');
      res.end();
    }
  }

  var server = http.createServer(onRequest);
  server.listen(process.env.PORT);
  console.log('node.js server is running at port ' + process.env.PORT);
}

module.exports = { start };
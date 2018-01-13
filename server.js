var http = require('http');

function start(port) {
  var onRequest = function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write('hello world');
    res.end();
  }

  var server = http.createServer(onRequest);
  server.listen(port);
  console.log('node.js server is running at port ' + port);
}

module.exports = { start };
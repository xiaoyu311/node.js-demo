var http = require('http');
var url = require('url');

function start(route, handle) {
  var onRequest = function (req, res) {
    if (req.url != '/favicon.ico') {
      var postData = '';
      var pathname = url.parse(req.url).pathname;
      req.setEncoding('utf8');
      req.addListener('data', function (postDataChunk) {
        postData += postDataChunk;
        console.log("Received POST data chunk '" +
          postDataChunk + "'.");
      })
      req.addListener('end', function () {
        route(handle, pathname, res, postData);
      })
    }
  }

  var server = http.createServer(onRequest);
  server.listen(process.env.PORT);
  console.log('node.js server is running at port ' + process.env.PORT);
}

module.exports = { start };
var exec = require('child_process').exec;
var querystring = require('querystring');

var start = function (res) {
  var body = '<html>' +
    '<head>' +
    '<meta http-equiv="Content-Type" content="text/html; ' +
    'charset=UTF-8" />' +
    '</head>' +
    '<body>' +
    '<form action="/upload" method="post">' +
    '<textarea name="text" rows="20" cols="60"></textarea>' +
    '<input type="submit" value="Submit text" />' +
    '</form>' +
    '</body>' +
    '</html>';
  res.writeHead(200, {
    "Content-Type": "text/html"
  });
  res.write(body);
  res.end();
}

var upload = function (res, postData) {
  res.writeHead(200, {
    "Content-Type": "text/plain"
  });
  res.write('you`ave send: ' + querystring.parse(postData).text);
  res.end();
}

module.exports = {
  start,
  upload
}
// function start() {
//   console.log("Request handler 'start' was called.");

//   function sleep(milliSeconds) {
//     var startTime = new Date().getTime();
//     while (new Date().getTime() < startTime + milliSeconds);
//   }

//   sleep(10000);
//   return "Hello Start";
// }

// function upload() {
//   console.log("Request handler 'upload' was called.");
//   return "Hello Upload";
// }

// exports.start = start;
// exports.upload = upload;
var http = require('http');
var Student = require('./student');

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  if (req.url !== '/favicon.ico') {
    student = new Student(1, 'xiaoyu', 25);
    student.say(res);
    student.lis(res);
  }
  res.end();
}).listen(8080)
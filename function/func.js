var http = require('http');
var child = require('./child');

//request 是客户端传来的数据  response是服务端返回给客户端的数据
http.createServer(function (request, response) {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  //清除2次访问
  if (request.url !== '/favicon.ico') {
    res(response);
    var funname = 'fun';
    child[funname](response);
    response.end();
  }
}).listen(8000);
console.log('Server running http://127.0.0.1:8000/')

function res(res) {
  // console.log(res);  
  res.write('hello res');
}

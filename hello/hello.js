var http = require('http');

//request 是客户端传来的数据  response是服务端返回给客户端的数据
http.createServer(function (request, response) {
  response.writeHead(200, { 'Content-Type': 'text/html'});
  if (request.url !== '/favicon.ico') {
    console.log('访问');
    response.write('hello world');
    response.end();
  }
}).listen(8000);
console.log('Server running http://127.0.0.1:8000/')

var http = require('http');
var readfile = require('./read.js');

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'image/jpeg' });
  //读取图片数据流只能传图片  加入传出文字  图片就显示不出来了
  if (req.utl !== '/favicon.ico') {
    readfile.readfile('./login.png', res);
  }
}).listen(8080)
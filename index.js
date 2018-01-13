process.env.PORT = '8888';
var server = require('./server');
var router = require('./router');

server.start(router.route);
// console.log(server);
var url = require('url');
var openFile = require('./common');

module.exports = {
  login: function (res) {
    function callback(data) {
      res.write(data);
      res.end();
    }
    openFile.readfileaSync('./models/login.html', callback);
  },
  signin: function (res) {
    function callback(data) {
      res.write(data);
      res.end();
    }
    openFile.readfileaSync('./models/signin.html', callback);
  }
}
var fs = require('fs');

module.exports = {
  //同步执行函数
  // readfileSync: function (path) {
  //   var data = fs.readFileSync(path, 'utf-8');

  //   console.log('同步执行函数',data);
  // },
  //异步执行函数
  readfileaSync: function (path, callback) {
    fs.readFile(path, function (err, data) {
      if (err) {
        console.log(err);
      } else {
        var data = data.toString();
        console.log(data)
        callback(data);
      }
    });
  }
}
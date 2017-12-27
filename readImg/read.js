var fs = require('fs');

module.exports = {
  readfile: function(path, res) {
    fs.readFile(path, 'binary', function (err, filedata) {
      if (err) {
        throw new Error();
      } else {
        res.write(filedata, 'binary');
        res.end();
      }
    })
  }
}
var Teacher = require('./Teacher');

module.exports = function Student(id, name, age) {
  console.log(1)
  Teacher.apply(this, [id, name, age]);
  this.lis = function (res) {
    res.write('age');
  }
}
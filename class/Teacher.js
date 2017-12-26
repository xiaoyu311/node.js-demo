module.exports = function Teacher(id, name, age) {
  this.id = id;
  this.name = name;
  this.age = age;
  this.say = function (res) {
    res.write(name);
  }
}
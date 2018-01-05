function Pet() {
  this.wrod = '...';
  this.speak = function() {
    console.log(this.word)
  }
}

function Dog() {
  this.word = '1111'
  Pet.call(this);
}

var dog = new Dog();
dog.speak();//输出1111
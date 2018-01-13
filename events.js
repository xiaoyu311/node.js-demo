var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();

emitter.on('one', function () {
  console.log('one');
})

var fun = function () {
  console.log('start');
  emitter.emit('one');
  console.log('end');
  
}
fun();
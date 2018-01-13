var bytes = new Buffer(256);

for (var i = 0; i < bytes.length; i++) {
  bytes[i] = i;
}

var end = bytes.slice(240, 256);

end[0] = 0;
console.log(end[0])
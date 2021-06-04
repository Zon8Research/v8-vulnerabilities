function write(begin, end, step) {
  for (var i = begin; i >= end; i += step) {
    step = end - begin;
    begin >>>= 805306382;
  }
}

var buffer = new ArrayBuffer(16384);
var view = new Uint32Array(buffer);

for (let i = 0; i < 10000; i++) {
  write(Infinity, 1, view[65536], 1);
}

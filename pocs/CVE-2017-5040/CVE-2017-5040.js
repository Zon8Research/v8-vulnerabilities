// flags: --allow-natives-syntax
var buf = new ArrayBuffer(0x10000);
var arr2 = new Uint8Array(buf).fill(55);
var tmp = {};
tmp[Symbol.toPrimitive] = function () {
  %ArrayBufferNeuter(arr2.buffer)
  var arr3 = new Uint8Array(0x800).fill(0xfc);
  return 0;
};

print(Array.prototype.indexOf.call(arr2, 0x00, tmp));

var v = Array.prototype.fill(100);
var v4 = {};

v[1000000] = "a"; // grow Array.prototype to large size
Array.prototype.fill(0); //fill up Array.prototype
v.splice(Infinity,"a",5,v4, 4, 3); // infinity is bigger than array length

for (let i = 0; i < 1000; i++) f1();

function f1() {
  v.shift();

  //causes both memory and cpu pressure, laaaarge string that keeps json parser busy for a while
  try { JSON.parse(
      ""+ Array(1025).join(String.fromCharCode(29, 72)) 
      + Array(4097).join(String.fromCharCode(65, 41)) 
      + Array(65537).join(String.fromCharCode(106, 59, 71)) 
      + Array(4097).join(String.fromCharCode(123, 2, 39)) 
      + Array(4097).join(String.fromCharCode(126, 36)) 
      + Array(1025).join(String.fromCharCode(67)) 
      + Array(1025).join(String.fromCharCode(21, 100)) 
      + Array(257).join(String.fromCharCode(82, 56, 119)) 
      + Array(1025).join(String.fromCharCode(14, 99, 106)) 
  ); } catch(e) { }

  %DebugPrint(v);
}

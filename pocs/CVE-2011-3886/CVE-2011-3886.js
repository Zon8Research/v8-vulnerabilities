
Object.prototype.__defineGetter__("x", function() {});
function Node() {
  this.a = 1;
  this.a = 3;
}
var n1 = new Node();

function for_in_null() {
  try {
    for (var x in undefined) {
    }
  } catch(e) {
  }
}
for (var i = 0; i < 10; ++i) {
  gc();
}
function f(  )  {
  for (var i = 0; i < 1000000; i++) {
    var n1 = new Node();
  }
}
for (var i = 0; i < 2; i++) {
  assertEquals(500009500000, f());
}
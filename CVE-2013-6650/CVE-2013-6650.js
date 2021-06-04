function boom() {
  var args = [];
  for (var i = 0; i < 125000; i++)
    args.push(i);
  return Array.apply(Array, args);
}
var array = boom();
function fib(n) {
  var f0 = 0, f1 = 1;
  for (; n > 0; n = n -1) {
    f0 + f1;
    f0 = array;
  }
}
fib(75);
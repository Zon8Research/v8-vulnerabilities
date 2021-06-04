function f1(arg) {
  var ret = { x: arg };
  ret.__defineGetter__("y", function() { });
  return ret;
}
function f2(arg) {
  return arg.x;
}
v1 = f1(10);
v2 = f1(10.5);
f2(v1);
v3 = { z:"" };
v3.__defineGetter__("z", function() {});

function __f_1(a) {
  var __v_1 = 1 + a;
}
function __f_0() {
  __f_1();
  var __v_0 = {x : __f_1()};
  return [__v_0];
}
try {
__f_0();
__f_0();
%OptimizeFunctionOnNextCall(__f_0);
__f_0();
} catch(e) {; }
  gc();
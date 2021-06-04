function __f_4(w, h) {
  var __v_5 = w * h;
  return new Uint32Array(__v_5);
}
  __f_4(0, -1);
for (var __v_3 = 0; __v_3 < 1000; __v_3++) __f_4();
__v_4 = __f_4();
function __f_3(o) {
  try {} catch(e) {}
  return o[__v_3];
}
for (var __v_3 = 0; __v_3 < 3; __v_3++) __f_3(__v_4);
%OptimizeFunctionOnNextCall(__f_3);
gc();
for (var __v_3 = __v_4.length; __v_3 < 100; __v_3++) {
 __f_3(__v_4);
}

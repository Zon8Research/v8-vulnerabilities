__v_2 = false;
var __v_0 = new Int32Array(1024);
function __f_1(__v_28, base, condition) {/*var repl*/
  __v_0[base - 1] = 1;
  __v_0[base - 10/*int repl*/] = 3/*int repl*/;
  __v_0[base + 3] = 3;
  __v_0[base + 2] = 4;
  __v_0[base + 4] = base + 4;
  if (condition) {
    __v_0[base + 1] = 1;
  }
}
__f_1(__v_0, 11, true);
%OptimizeFunctionOnNextCall(__f_1);
__f_1(__v_1, -4, false);
var __v_12 = __f_9(3);
var __v_54 = __f_13(true);
var __v_1 = __f_32(12.3);
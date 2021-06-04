var __v_8 = {};
function __f_58(expected, __f_75, __f_7) {
 __f_75(__v_8, __f_7, new ArrayBuffer(1)).__f_19();
}
function __f_105(__v_8, __v_36, buffer) {
  "use asm";
  var __v_34 = new __v_8.Int32Array(buffer);
  function __f_19() {
    var __v_31 = 4;
    __v_34[__v_31 >> 2] = ((__v_34[0]|0) + 1) | 0;
  }
  return {__f_19: __f_19};
}
__f_58(7, __f_105);
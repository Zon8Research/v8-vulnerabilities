Detailed report: https://cluster-fuzz.appspot.com/testcase?key=6390358941892608

Fuzzer: mbarbella_js_mutation
Job Type: linux_asan_d8_v8_mipsel_dbg
Platform Id: linux

Crash Type: RUNTIME_ASSERT
Crash Address: 
Crash State:
  (left_index == right_index) || (ignore_sign && (left_index <= 1) && (right_index
  
Regressed: V8: r34586:34587

Minimized Testcase (0.24 Kb):
Download: https://cluster-fuzz.appspot.com/download/AMIfv96C6iIVe5EU35_ZWx7uPG3ol5jMPV6uzm5yJ5LEoIM_COILPDbAl06Bnt5S7lqpdTjoYEke_FPP6swlGUfcvIhtSgTD1EQuCui5N4VMlXVnhaGOBjsQoygMfqh62k3UbPaBy5FiKzSHEkA7THb7qlWWRO4VqA
function __f_57(expected, __f_72, __f_11) {
 Wasm.instantiateModuleFromAsm( __f_72.toString());
}
function __f_4() {
  "use asm";
  function __f_78() {
    var __v_41 = 0;
__v_41 <= 4294967295
  }
  return {__f_78: __f_78};
}
__f_57(4, __f_4);


Filer: hablich

See https://dev.chromium.org/Home/chromium-security/bugs/reproducing-clusterfuzz-bugs for more information.
Detailed report: https://cluster-fuzz.appspot.com/testcase?key=6013542905413632

Fuzzer: mbarbella_js_mutation
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: RUNTIME_ASSERT
Crash Address: 
Crash State:
  !v8::internal::FLAG_enable_slow_asserts || (static_cast<unsigned>(i) < static_ca
  
Regressed: V8: r34586:34587

Minimized Testcase (0.24 Kb):
Download: https://cluster-fuzz.appspot.com/download/AMIfv96hVY1HtGUrcbORXq8_XUUMO_XhC-oizUqg1U15sZcFo8fD8YGxttsXsbJ5D0_ZAP8I7O24yVihxW2uhOufOjjGGFiccTXEAdBWzsPsw29o_Kxo8kJGanRaHnqd6Kbu9GTDmos3TTcidxsPbyK2iAEh4nQpew
function nop() {}
__v_0 = nop();
__v_1 = {};
__v_1[__v_0] = 42;
for (var __v_2 of Object.keys(__v_1));
function __f_5(asmfunc) {
  var __v_17 = Wasm.instantiateModuleFromAsm(__v_2);
}
__v_12 = [, ];
  for (func of __v_12) {
    __f_5( {
    });
  }


Filer: hablich

See https://dev.chromium.org/Home/chromium-security/bugs/reproducing-clusterfuzz-bugs for more information.
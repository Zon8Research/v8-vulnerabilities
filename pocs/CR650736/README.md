Detailed report: https://cluster-fuzz.appspot.com/testcase?key=4879463840219136

Fuzzer: mbarbella_js_mutation
Job Type: linux_msan_d8
Platform Id: linux

Crash Type: Use-of-uninitialized-value
Crash Address: 
Crash State:
  v8::internal::Simulator::ConditionPassed
  v8::internal::Decoder<v8::internal::Simulator>::DecodeBranchSystemException
  v8::internal::Simulator::CallVoid
  
Recommended Security Severity: Medium

Regressed: https://cluster-fuzz.appspot.com/revisions?job=linux_msan_d8&range=418478:418498

Minimized Testcase (0.38 Kb):
Download: https://cluster-fuzz.appspot.com/download/AMIfv96ylwsrOEHWf654_NjuxQ5YtZfccpqPT2HhIOko_fXId3M4QW-z8p-VzVBWD-rA91jgwUUBELg84Ue1NFNmvK1snIhTNKzzYDiioIteBFg4HlIJeBZjV-mpOWYr2zEfkCIMLOjs6bdWi7Ex5r55t32yapHnFg?testcase_id=4879463840219136
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


Issue filed automatically.

See https://dev.chromium.org/Home/chromium-security/bugs/reproducing-clusterfuzz-bugs for more information.
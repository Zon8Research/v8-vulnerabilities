Detailed report: https://cluster-fuzz.appspot.com/testcase?key=6306581746024448

Fuzzer: mbarbella_js_mutation
Job Type: linux_asan_d8_ignition_dbg
Platform Id: linux

Crash Type: RUNTIME_ASSERT
Crash Address: 
Crash State:
  map->IsMap() in src/heap/spaces.cc
  

Minimized Testcase (0.39 Kb):
Download: https://cluster-fuzz.appspot.com/download/AMIfv95rgXY_8sp08wavjWIYkeBnOoUE8n64LsFKM4DJchkGlxxFEqDEzMVfmn4GR5cGf8UncaUkkUr6lVKGsH93laLW_uFyFRjlPYke8jU-gjSc_FAsTrlb2h5xEnph15AvWKwqQ5v0z3fsiyUtYo5r2VEPQZsmZg
var __v_20 = {};
function __f_17() { }
function __f_19(obj) {
  for (var __v_19 = 0; __v_19 < 26; __v_19++) {
    obj["__v_5" + __v_19] = 0;
  }
}
function __f_15(__v_18) {
new __f_17().__proto__ = __v_18;
    gc();
}
function __f_20() {
  var __v_18 = __v_20 ? new __f_17() : {};
    __f_19(__v_18);
    __f_15();
}
for (var __v_19 = 0; __v_19 < 4; __v_19++) {
  __f_20();
  var __v_17 = __f_20();
}


Filer: hablich

See https://dev.chromium.org/Home/chromium-security/bugs/reproducing-clusterfuzz-bugs for more information.
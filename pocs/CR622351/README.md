Detailed report: https://cluster-fuzz.appspot.com/testcase?key=5178929405231104

Fuzzer: mbarbella_js_mutation
Job Type: linux_cfi_d8
Platform Id: linux

Crash Type: Bad-cast
Crash Address: 0x000000ccc0e0
Crash State:
  Bad-cast to v8::internal::PagedSpace from v8::internal::SemiSpace
  
Recommended Security Severity: High


Minimized Testcase (0.31 Kb):
Download: https://cluster-fuzz.appspot.com/download/AMIfv95TTKVVXu3RjqLe3l7KWbGbmFdcLid1qakcLAUxFDFRTymsSTatwx2plXj8O_Kl8WM7ftmeHqAhNoMg4n89lrruf7fDL99ttELQuq86TIXKIt-bCjzSKEj8V3hSOtCeW3mXHv3UW1trE511nxbEQwJaAk1B6Q?testcase_id=5178929405231104
var __v_24 = {};
  gc();
try {
__v_2 = [];
  __f_0();
} catch(e) {; }
__v_9 = [ 4294967295];
for (var __v_2 in __v_9) {
  for (var __v_7 = 0; __v_7 < 4294967296; __v_7 += 3999773) {
  }
}
var __f_1 = (function() {
  return {__f_1: __f_1};
})().__f_1;
  for (var __v_28 = 0; __v_28 < 4294967296; __v_24 += 3999773) {
  }


Filer: tanin

See https://dev.chromium.org/Home/chromium-security/bugs/reproducing-clusterfuzz-bugs for more information.
Detailed report: https://cluster-fuzz.appspot.com/testcase?key=4546917602426880

Fuzzer: mbarbella_js_mutation
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: UNKNOWN READ
Crash Address: 0x7fb7f253e138
Crash State:
  v8::internal::PointerUpdateJobTraits<
  int v8::internal::SlotSet::Iterate<v8::internal::PointerUpdateJobTraits<
  v8::internal::PointerUpdateJobTraits<
  
Recommended Security Severity: Medium

Regressed: V8: r36762:36763

Minimized Testcase (0.41 Kb):
Download: https://cluster-fuzz.appspot.com/download/AMIfv96wLe_7jEpXSK_ZrnYZCT4X0MLlbfLBuAhe9PFb-UEohV6ZgphMEPdNSGoFeJS616PVfUTO4WyqKPdieXBskyZyVYDzeKRKnria1oQKqwLiAeSln2--raORADS_ZfLo-8JwYKrkPQrV_yRxgnfFTG1Xa4Yshg
var __v_33 = {};
__v_4 = 70000;
function __f_18() {
  if ((__v_7 % 50) != 0) {
  } else {
    return __v_33 + 0.5;
  }
}
function __f_17(a) {
  for (var __v_7= 0; __v_7 < __v_4; ++__v_7 ) {
    a[__v_7] = __f_18();
  }
}
for (var __v_7= 0; __v_7 < __v_4; __v_7 += 500 ) {
}
__v_9 = new Array();
__f_17(__v_9);
__v_9.length = 100;
Debug = debug.Debug
function __f_26() {
      }
__v_29 = "(function() {\
         })()";


Filer: mstarzinger

See https://dev.chromium.org/Home/chromium-security/bugs/reproducing-clusterfuzz-bugs for more information.
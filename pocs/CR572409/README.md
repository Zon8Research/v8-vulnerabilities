Detailed report: https://cluster-fuzz.appspot.com/testcase?key=5846032425943040

Fuzzer: mbarbella_js_mutation
Job Type: linux_v8_d8_tot
Platform Id: linux

Crash Type: UNKNOWN
Crash Address: 0x7ffc51a00030
Crash State:
  v8::internal::InnerPointerToCodeCache::GcSafeFindCodeForInnerPointer
  v8::internal::InnerPointerToCodeCache::GetCacheEntry
  v8::internal::StackFrame::ComputeType
  
Regressed: V8: r31913:31929

Minimized Testcase (0.35 Kb):
Download: https://cluster-fuzz.appspot.com/download/AMIfv95vrqy1ia0ccdt3JtQx6zgLzdAdGpip_0ceTWpzBjompUeFS9dctekGnPD2nCVS0jNj36Q_GmYDYJD5wf_7_WZVNDrEnDe3F9n7ulgCnpLsxEErI5M9d-WO--IJvAUWFS5owp9dk4FUTxN1Ms0lQF4m8_2E5w
var __v_8 = function() {};
var __v_18 = function() {};
(function __f_5() {
  ;
  var __v_5 = {
    __proto__: __v_8  };
__v_18 instanceof RegExp;
  var __v_4 = {
    m() {
    }
  };
  var __v_5 = {

  };
})();
if (this.Worker) {

  (function __f_14() {
        if (Atomics.compareExchange() == 1) {
        }
  })();
}
__v_18 = (function __f_18() {
})();
;


Filer: inferno

See https://dev.chromium.org/Home/chromium-security/bugs/reproducing-clusterfuzz-bugs for more information.
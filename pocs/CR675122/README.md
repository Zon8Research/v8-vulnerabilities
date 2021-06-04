Detailed report: https://cluster-fuzz.appspot.com/testcase?key=5184466189549568

Fuzzer: mbarbella_js_mutation
Job Type: linux_asan_d8_ignition_v8_arm_dbg
Platform Id: linux

Crash Type: UNKNOWN READ
Crash Address: 0x9a8186d8
Crash State:
  mbsnrtowcs
  v8::internal::libc_memchr
  v8::internal::Simulator::SoftwareInterrupt
  
Recommended Security Severity: Medium

Regressed: V8: r41759:41760

Minimized Testcase (0.12 Kb):
Download: https://cluster-fuzz.appspot.com/download/AMIfv957A47xoJX7V2jomsXxilY9IjOTXYu9ZqQZjTdMrrr0eUOcDlMs7_Vw1DTXmTWG0vU8Oh0kzA8YR2T4erRUkSt4E608CmyTE7sxyPyePPO5i5qsbje5KBO3QYr80i7pPbP7jLe5mkLV-CerPrp1xyxjIDiS5Q?testcase_id=5184466189549568
var __v_10 = {};
__v_10 = "test test test";
 __v_10.indexOf("t", -1073741824);
function __f_0() {
}
(function __f_1() {
})();


Issue filed automatically.

See https://dev.chromium.org/Home/chromium-security/bugs/reproducing-clusterfuzz-bugs for more information.
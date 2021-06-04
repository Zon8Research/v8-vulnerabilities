Detailed report: https://cluster-fuzz.appspot.com/testcase?key=4593569394589696

Fuzzer: mbarbella_js_mutation
Job Type: linux_asan_d8
Platform Id: linux

Crash Type: UNKNOWN READ
Crash Address: 0x0000dfff7fff
Crash State:
  v8::base::NoBarrier_Load
  v8::internal::HeapObject::map_word
  v8::internal::HeapObject::map
  
Recommended Security Severity: Medium

Regressed: V8: r36347:36348

Minimized Testcase (0.24 Kb):
Download: https://cluster-fuzz.appspot.com/download/AMIfv97gw7iYR0-wqmuFoM0TzX90sW_OIlWOIH3t3GR3DqiaBmlXMgPwY08q589aQHXVmFXs1wPxotmx8fH32SRWjb46S9vG3ChbG4i4_zCdTH4OVhV-iryIUYdvpbLcasxgnsApaXYEDBTFBC76QF1Yiwea77AvdQ
Error.prepareStackTrace = (e,s) => s;
__v_6 = Error().stack[0].constructor;
function __f_2() {
  return __v_6;
}
function __f_5(a, b, c) {
  return a + __f_2()(b, c);
}
function __f_6(a, b, c) {
  var __v_3 = __f_5(a, b, c);
}
__f_6( 2, 3, 6);


Filer: inferno

See https://dev.chromium.org/Home/chromium-security/bugs/reproducing-clusterfuzz-bugs for more information.
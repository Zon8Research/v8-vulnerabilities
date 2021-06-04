Detailed report: https://cluster-fuzz.appspot.com/testcase?key=5534114849751040

Fuzzer: mbarbella_js_mutation
Job Type: windows_asan_d8
Platform Id: windows

Crash Type: UNKNOWN READ
Crash Address: 0x0fa31ecc
Crash State:
  v8::internal::JSObject::UpdateAllocationSite
  v8::internal::ElementsAccessor::Concat
  v8::internal::ElementsAccessor::Concat
  
Recommended Security Severity: Medium

Regressed: https://cluster-fuzz.appspot.com/revisions?job=windows_asan_d8&range=407363:407364

Minimized Testcase (0.18 Kb):
Download: https://cluster-fuzz.appspot.com/download/AMIfv95WkDr1vzxrT-U5CcvHeTRftL4Dn4o75brf9Wqf0ICNaTCJLBfpY9HzTXcy0eMC49e4kQlNuzYkOv36Sdnua0fyBtucEQdtyvPJ4XY0vu4Gh0Pmtf-A2u5LjLJqnIV60cnAeGkT2X6YMs8iITy1pIfxJYO--A?testcase_id=5534114849751040
  try {
  } catch (e) {
  }

function __f_3(x, expected) {
  var __v_3 = [];
  __v_3.length = x;
  __f_3(true, 1);
}
try {
__f_3(2147483648, 2147483648);
;
} catch(e) {"Caught: " + e; }


Filer: aarya

See https://dev.chromium.org/Home/chromium-security/bugs/reproducing-clusterfuzz-bugs for more information.
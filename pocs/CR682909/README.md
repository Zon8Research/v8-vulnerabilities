Detailed report: https://cluster-fuzz.appspot.com/testcase?key=4600150967451648

Fuzzer: mbarbella_js_mutation
Job Type: windows_asan_d8
Platform Id: windows

Crash Type: UNKNOWN READ
Crash Address: 0x00020005
Crash State:
  v8::internal::StringCharacterStream::Reset
  v8::internal::String::ToCString
  v8::internal::String::ToCString
  
Sanitizer: address (ASAN)

Recommended Security Severity: Medium

Regressed: https://cluster-fuzz.appspot.com/revisions?job=windows_asan_d8&range=444724:444758

Minimized Testcase (0.09 Kb):
Download: https://cluster-fuzz.appspot.com/download/AMIfv96wea26DQV2_gm_NDS0Kth6EE__FT7oSIBbN5IzVr2-4JoXJYpMC-LUfXj7ubU7d9zMJYCXD__4SCYurY-xPmyRc5CYwMuzO8Ik1wJd3Hc_56bQT4Eh97pwjbiGaw2zT7TbRhkdEjlIj-3eDt8airwDvbYV--Wo5iHulqg6qnxIqoUDj4Aof7Wdd2mCmm4Q__wGG_rvbJvfgLlHsKBkM3LkozHQh6bqIWzDE7HYbdEhy67DL5ranCkSqxAXYKMPPTXWweN6apCv6DXkxdmyYKk98Fze3rNj0_YWcOg_WhMvkX5d7eQouReC9ZKtBHv2ry2IZ8aKtvRdqFGO9cj_iINbGSn8DFpQm06ktf8O0UkB5vaO9ko?testcase_id=4600150967451648
( {
})();
var __f_1 = (function(stdlib) {
  "use asm";
  var __v_2 = (stdlib[65535]);
})();


Issue filed automatically.

See https://dev.chromium.org/Home/chromium-security/bugs/reproducing-clusterfuzz-bugs for more information.
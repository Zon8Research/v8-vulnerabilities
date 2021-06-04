Detailed report: https://cluster-fuzz.appspot.com/testcase?key=5128147055149056

Fuzzer: mbarbella_js_mutation
Job Type: linux_asan_d8
Platform Id: linux

Crash Type: Use-after-poison WRITE 8
Crash Address: 0x625000074ac8
Crash State:
  v8::internal::compiler::Node::AppendUse
  v8::internal::compiler::VirtualObject::MergeFields
  v8::internal::compiler::VirtualObject::MergeFrom
  
Recommended Security Severity: High

Regressed: V8: r41921:41922

Minimized Testcase (0.74 Kb): https://cluster-fuzz.appspot.com/download/AMIfv94s1wtp8r3Qn8XWEGF8cdrxkEIV3awZtDJI5SS9m4Dlx_8_iw81M_c7CkCOWxaxwFEuVKyy6_ZhD1lyUFc40S46MlHRbiufPE8oHQ0KYdzeEBxVfRm_20X-FOYS3JcJYhWLjwKyin0Rh8SpAkvKL3YcxiaVIA?testcase_id=5128147055149056

Issue filed automatically.

See https://dev.chromium.org/Home/chromium-security/bugs/reproducing-clusterfuzz-bugs for more information.
Detailed report: https://clusterfuzz.com/testcase?key=4509241355534336

Fuzzer: inferno_js_fuzzer
Job Type: linux_asan_d8_v8_arm64_dbg
Platform Id: linux

Crash Type: CHECK failure
Crash Address: 
Crash State:
  is_resolved() in ast.h
  var
  VisitVariableProxyReference
  
Sanitizer: address (ASAN)

Regressed: V8: 44392:44393

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=4509241355534336


Issue filed automatically.

See https://dev.chromium.org/Home/chromium-security/bugs/reproducing-clusterfuzz-bugs for more information.
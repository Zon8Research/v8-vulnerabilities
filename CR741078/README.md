Detailed report: https://clusterfuzz.com/testcase?key=5266195308871680

Fuzzer: inferno_js_fuzzer
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: CHECK failure
Crash Address: 
Crash State:
  map->IsMap() in spaces.cc
  v8::internal::NewSpace::Verify
  v8::internal::Heap::Verify
  
Sanitizer: address (ASAN)

Regressed: V8: 45199:45200

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5266195308871680


Issue filed automatically.

See https://dev.chromium.org/Home/chromium-security/bugs/reproducing-clusterfuzz-bugs for more information.
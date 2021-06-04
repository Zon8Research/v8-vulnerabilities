Detailed report: https://clusterfuzz.com/testcase?key=4562327746904064

Fuzzer: mbarbella_js_mutation
Job Type: linux_asan_d8_v8_arm_dbg
Platform Id: linux

Crash Type: CHECK failure
Crash Address: 
Crash State:
  Smi::IsValid(value) in objects.h
  v8::internal::WasmTableObject::New
  v8::WebAssemblyTable
  
Sanitizer: address (ASAN)

Regressed: V8: 46474:46475

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=4562327746904064


Issue filed automatically.

See https://dev.chromium.org/Home/chromium-security/bugs/reproducing-clusterfuzz-bugs for more information.
Detailed report: https://clusterfuzz.com/testcase?key=5234588858449920

Fuzzer: ochang_js_fuzzer
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  index < GetJSCallArity() in js-builtin-reducer.cc
  v8::internal::compiler::JSCallReduction::GetJSCallInput
  left
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=48274:48275

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5234588858449920

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.
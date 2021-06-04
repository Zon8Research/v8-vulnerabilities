Detailed report: https://clusterfuzz.com/testcase?key=4960312221761536

Fuzzer: ochang_js_fuzzer
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: CHECK failure
Crash Address: 
Crash State:
  LoadElement of kRepFloat64 (NumberOrHole) cannot be changed to kRepTagged in rep
  v8::internal::compiler::RepresentationChanger::TypeError
  v8::internal::compiler::RepresentationChanger::GetTaggedRepresentationFor
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=50780:50781

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=4960312221761536

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.
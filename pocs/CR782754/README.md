Detailed report: https://clusterfuzz.com/testcase?key=5464879090892800

Fuzzer: ochang_js_fuzzer
Job Type: linux_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  this->IsInhabited() in types.cc
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_d8_dbg&range=49224:49225

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5464879090892800

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.
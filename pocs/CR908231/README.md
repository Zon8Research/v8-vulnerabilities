Detailed report: https://clusterfuzz.com/testcase?key=5823164468428800

Fuzzer: ochang_js_fuzzer
Job Type: linux_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  parse_lazily() implies allow_lazy_ in parser.cc
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_d8_dbg&range=57734:57735

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5823164468428800

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.
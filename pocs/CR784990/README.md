Detailed report: https://clusterfuzz.com/testcase?key=5982243268067328

Fuzzer: ochang_js_fuzzer
Job Type: linux_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  nod == removed_holes_index in objects.cc
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_d8_dbg&range=49342:49343

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5982243268067328

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.
Detailed report: https://clusterfuzz.com/testcase?key=5112083286982656

Fuzzer: ochang_js_fuzzer
Job Type: linux_d8_dbg
Platform Id: linux

Crash Type: CHECK failure
Crash Address: 
Crash State:
  fixed_size_above_fp + in deoptimizer.cc
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_d8_dbg&range=59824:59825

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5112083286982656

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for instructions to reproduce this bug locally.
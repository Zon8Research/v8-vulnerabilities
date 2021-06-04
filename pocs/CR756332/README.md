Detailed report: https://clusterfuzz.com/testcase?key=4520930553626624

Fuzzer: inferno_js_fuzzer_c
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  !node->is_rewritten() in pattern-rewriter.cc
  
Sanitizer: address (ASAN)

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=4520930553626624

Issue manually filed by: ishell

See https://github.com/google/clusterfuzz-tools for more information.
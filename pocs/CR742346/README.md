Detailed report: https://clusterfuzz.com/testcase?key=5639820016877568

Fuzzer: v8_builtins_generator
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  target->constructor_or_backpointer() == map in mark-compact.cc
  v8::internal::MarkCompactCollector::CompactTransitionArray
  v8::internal::MarkCompactCollector::ClearFullMapTransitions
  
Sanitizer: address (ASAN)

Regressed: V8: 46621:46622

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5639820016877568


Issue filed automatically.

See https://dev.chromium.org/Home/chromium-security/bugs/reproducing-clusterfuzz-bugs for more information.
Detailed report: https://clusterfuzz.com/testcase?key=5409214196613120

Fuzzer: inferno_js_fuzzer
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  maybe_transition->elements_kind() != transition_elements_kind in objects.cc
  v8::internal::Map::InsertElementsKindTransitionShortcut
  v8::internal::Map::RegisterElementsKindTransitionShortcut
  
Sanitizer: address (ASAN)

Regressed: V8: 46621:46622

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5409214196613120


Issue filed automatically.

See https://dev.chromium.org/Home/chromium-security/bugs/reproducing-clusterfuzz-bugs for more information.
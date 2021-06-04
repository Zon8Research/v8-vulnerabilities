Detailed report: https://clusterfuzz.com/testcase?key=6524358532268032

Fuzzer: inferno_js_fuzzer
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: CHECK failure
Crash Address: 
Crash State:
  MachineRepresentation::kNone == input_info->representation() in simplified-lower
  v8::internal::compiler::RepresentationSelector::VisitNode
  v8::internal::compiler::RepresentationSelector::Run
  
Sanitizer: address (ASAN)

Regressed: V8: 43683:43684

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=6524358532268032


Issue filed automatically.

See https://dev.chromium.org/Home/chromium-security/bugs/reproducing-clusterfuzz-bugs for more information.
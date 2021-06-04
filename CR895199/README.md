Detailed report: https://clusterfuzz.com/testcase?key=6279506535645184

Fuzzer: ochang_js_fuzzer
Job Type: linux_asan_d8_v8_arm64_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  restriction_type.Is(info->restriction_type()) in simplified-lowering.cc
  v8::internal::compiler::RepresentationSelector::SetOutput
  v8::internal::compiler::RepresentationSelector::VisitUnop
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_v8_arm64_dbg&range=56441:56442

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=6279506535645184

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.
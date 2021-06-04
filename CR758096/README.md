Detailed report: https://clusterfuzz.com/testcase?key=5807533909606400

Fuzzer: mbarbella_js_mutation
Job Type: linux_asan_d8
Platform Id: linux

Crash Type: CHECK failure
Crash Address: 
Crash State:
  Representation inference: unsupported opcode 59 (Dead), node #5 in simplified-lo
  v8::internal::compiler::RepresentationSelector::VisitNode
  v8::internal::compiler::RepresentationSelector::RunTruncationPropagationPhase
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8&range=47520:47521

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5807533909606400

Issue manually filed by: mstarzinger

See https://github.com/google/clusterfuzz-tools for more information.
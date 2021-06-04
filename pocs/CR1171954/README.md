Detailed Report: https://clusterfuzz.com/testcase?key=5207829811363840

Fuzzer: ochang_js_fuzzer
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  other->values_[index] != builder()->jsgraph()->OptimizedOutConstant() in bytecod
  v8::internal::compiler::BytecodeGraphBuilder::Environment::Merge
  v8::internal::compiler::BytecodeGraphBuilder::MergeIntoSuccessorEnvironment
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=66171:66172

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5207829811363840

Issue filed automatically.

The reproduce tool requires a ClusterFuzz source checkout. To prepare one, run:

git clone https://github.com/google/clusterfuzz && cd clusterfuzz && git checkout tags/reproduce-tool-stable

To reproduce this issue, run:

./reproduce.sh -t https://clusterfuzz.com/testcase-detail/5207829811363840 -b /path/to/build

Please use the GN arguments provided in this report when building the binary. If you have any feedback on reproducing test cases, let us know at https://forms.gle/Yh3qCYFveHj6E5jz5 so we can improve.

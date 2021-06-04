Detailed Report: https://clusterfuzz.com/testcase?key=5186673229824000

Fuzzer: ochang_js_fuzzer
Job Type: linux_asan_d8_v8_arm64_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  effect_edges > 0 in verifier.cc
  v8::internal::compiler::Verifier::Visitor::Check
  v8::internal::compiler::Verifier::Run
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_v8_arm64_dbg&range=63042:63043

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5186673229824000

Issue filed automatically.

The reproduce tool requires a ClusterFuzz source checkout. To prepare one, run:

git clone https://github.com/google/clusterfuzz && cd clusterfuzz && git checkout tags/reproduce-tool-stable

To reproduce this issue, run:

./reproduce.sh -t https://clusterfuzz.com/testcase-detail/5186673229824000 -b /path/to/build

Please use the GN arguments provided in this report when building the binary. If you have any feedback on reproducing test cases, let us know at https://forms.gle/Yh3qCYFveHj6E5jz5 so we can improve.

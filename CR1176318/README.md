Detailed Report: https://clusterfuzz.com/testcase?key=5972227020095488

Fuzzer: mbarbella_js_mutation
Job Type: linux_asan_d8_v8_arm64_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  CanTransitionTo(new_details, *new_value) in property-cell-inl.h
  v8::internal::PropertyCell::Transition
  v8::internal::PropertyCell::PrepareForValue
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_v8_arm64_dbg&range=72585:72586

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5972227020095488

Issue filed automatically.

The reproduce tool requires a ClusterFuzz source checkout. To prepare one, run:

git clone https://github.com/google/clusterfuzz && cd clusterfuzz && git checkout tags/reproduce-tool-stable

To reproduce this issue, run:

./reproduce.sh -t https://clusterfuzz.com/testcase-detail/5972227020095488 -b /path/to/build

Please use the GN arguments provided in this report when building the binary. If you have any feedback on reproducing test cases, let us know at https://forms.gle/Yh3qCYFveHj6E5jz5 so we can improve.

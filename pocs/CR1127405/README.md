Detailed Report: https://clusterfuzz.com/testcase?key=4694500543102976

Fuzzer: ochang_js_fuzzer
Job Type: linux_d8_dbg
Platform Id: linux

Crash Type: CHECK failure
Crash Address: 
Crash State:
  !v8::internal::FLAG_enable_slow_asserts || (IsDereferenceAllowed()) in handles.h
  
Sanitizer: address (ASAN)

Crash Revision: https://clusterfuzz.com/revisions?job=linux_d8_dbg&revision=69828

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=4694500543102976

Issue filed automatically.

The reproduce tool requires a ClusterFuzz source checkout. To prepare one, run:

git clone https://github.com/google/clusterfuzz && cd clusterfuzz && git checkout tags/reproduce-tool-stable

To reproduce this issue, run:

./reproduce.sh -t https://clusterfuzz.com/testcase-detail/4694500543102976 -b /path/to/build

Please use the GN arguments provided in this report when building the binary. If you have any feedback on reproducing test cases, let us know at https://forms.gle/Yh3qCYFveHj6E5jz5 so we can improve.

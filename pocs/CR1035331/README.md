Detailed Report: https://clusterfuzz.com/testcase?key=5664420093034496

Fuzzer: ochang_js_fuzzer
Job Type: linux_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  !HAS_WEAK_HEAP_OBJECT_TAG(ptr_) in tagged-impl.h
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_d8_dbg&range=65469:65470

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5664420093034496

Issue filed automatically.

The reproduce tool requires a ClusterFuzz source checkout. To prepare one, run:

git clone https://github.com/google/clusterfuzz && cd clusterfuzz && git checkout tags/reproduce-tool-stable

To reproduce this issue, run:

./reproduce.sh -t https://clusterfuzz.com/testcase-detail/5664420093034496 -b /path/to/build

Please use the GN arguments provided in this report when building the binary. If you have any feedback on reproducing test cases, let us know at https://forms.gle/Yh3qCYFveHj6E5jz5 so we can improve.

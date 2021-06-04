Detailed Report: https://clusterfuzz.com/testcase?key=5713565512433664

Fuzzer: ochang_js_fuzzer
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: CHECK failure
Crash Address: 
Crash State:
  IsValidHeapObject(heap_, heap_object) in heap.cc
  void v8::internal::VerifyPointersVisitor::VerifyPointersImpl<v8::internal::FullO
  v8::internal::StandardFrame::IterateCompiledFrame
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=69724:69725

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5713565512433664

Issue filed automatically.

The reproduce tool requires a ClusterFuzz source checkout. To prepare one, run:

git clone https://github.com/google/clusterfuzz && cd clusterfuzz && git checkout tags/reproduce-tool-stable

To reproduce this issue, run:

./reproduce.sh -t https://clusterfuzz.com/testcase-detail/5713565512433664 -b /path/to/build

Please use the GN arguments provided in this report when building the binary. If you have any feedback on reproducing test cases, let us know at https://forms.gle/Yh3qCYFveHj6E5jz5 so we can improve.

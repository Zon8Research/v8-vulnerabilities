Detailed Report: https://clusterfuzz.com/testcase?key=5642411963187200

Fuzzer: mbarbella_js_mutation
Job Type: linux_d8_dbg_cm
Platform Id: linux

Crash Type: CHECK failure
Crash Address: 
Crash State:
  IsValidHeapObject(isolate->heap(), HeapObject::cast(p)) in objects-debug.cc
  
Sanitizer: address (ASAN)

Crash Revision: https://clusterfuzz.com/revisions?job=linux_d8_dbg_cm&revision=15

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5642411963187200

Issue manually filed by: ishell

The reproduce tool requires a ClusterFuzz source checkout. To prepare one, run:

git clone https://github.com/google/clusterfuzz && cd clusterfuzz && git checkout tags/reproduce-tool-stable

To reproduce this issue, run:

./reproduce.sh -t https://clusterfuzz.com/testcase-detail/5642411963187200 -b /path/to/build

Please use the GN arguments provided in this report when building the binary. If you have any feedback on reproducing test cases, let us know at https://forms.gle/Yh3qCYFveHj6E5jz5 so we can improve.

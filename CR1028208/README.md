Detailed Report: https://clusterfuzz.com/testcase?key=6027327737561088

Fuzzer: mbarbella_js_mutation
Job Type: linux_d8_dbg_cm
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  !is_compiled() || IsInterpreted() in js-objects.cc
  
Sanitizer: address (ASAN)

Crash Revision: https://clusterfuzz.com/revisions?job=linux_d8_dbg_cm&revision=15

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=6027327737561088

Issue manually filed by: ishell

The reproduce tool requires a ClusterFuzz source checkout. To prepare one, run:

git clone https://github.com/google/clusterfuzz && cd clusterfuzz && git checkout tags/reproduce-tool-stable

To reproduce this issue, run:

./reproduce.sh -t https://clusterfuzz.com/testcase-detail/6027327737561088 -b /path/to/build

Please use the GN arguments provided in this report when building the binary. If you have any feedback on reproducing test cases, let us know at https://forms.gle/Yh3qCYFveHj6E5jz5 so we can improve.

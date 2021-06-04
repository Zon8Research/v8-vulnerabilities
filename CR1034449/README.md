Detailed Report: https://clusterfuzz.com/testcase?key=5688189700341760

Fuzzer: foozzie_js_mutation
Job Type: v8_foozzie
Platform Id: linux

Crash Type: V8 correctness failure
Crash Address: 
Crash State:
  configs: x64,ignition:x64,ignition_turbo
  sources: bba
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=v8_foozzie&range=64319:64320

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5688189700341760

Issue filed automatically.

The reproduce tool requires a ClusterFuzz source checkout. To prepare one, run:

git clone https://github.com/google/clusterfuzz && cd clusterfuzz && git checkout tags/reproduce-tool-stable

To reproduce this issue, run:

./reproduce.sh -t https://clusterfuzz.com/testcase-detail/5688189700341760 -b /path/to/build

Please use the GN arguments provided in this report when building the binary. If you have any feedback on reproducing test cases, let us know at https://forms.gle/Yh3qCYFveHj6E5jz5 so we can improve.

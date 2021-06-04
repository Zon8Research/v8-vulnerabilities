Detailed Report: https://clusterfuzz.com/testcase?key=5746326898016256

Fuzzer: ochang_js_fuzzer
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: UNKNOWN READ
Crash Address: 0x7e94ffffffff
Crash State:
  Builtins_InterpreterEntryTrampoline
  Builtins_JSEntryTrampoline
  Builtins_JSEntry
  
Sanitizer: address (ASAN)

Recommended Security Severity: Medium

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=69520:69521

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5746326898016256

Issue filed automatically.

The reproduce tool requires a ClusterFuzz source checkout. To prepare one, run:

git clone https://github.com/google/clusterfuzz && cd clusterfuzz && git checkout tags/reproduce-tool-stable

To reproduce this issue, run:

./reproduce.sh -t https://clusterfuzz.com/testcase-detail/5746326898016256 -b /path/to/build

Please use the GN arguments provided in this report when building the binary. If you have any feedback on reproducing test cases, let us know at https://forms.gle/Yh3qCYFveHj6E5jz5 so we can improve.

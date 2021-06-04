Detailed Report: https://clusterfuzz.com/testcase?key=5088953410387968

Fuzzer: lokihardt_jshitter
Job Type: linux_asan_d8_v8_arm_dbg
Platform Id: linux

Crash Type: CHECK failure
Crash Address: 
Crash State:
  Bytecode mismatch at offset 177 in interpreter.cc
  v8::internal::interpreter::InterpreterCompilationJob::CheckAndPrintBytecodeMisma
  v8::internal::interpreter::InterpreterCompilationJob::FinalizeJobImpl
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_v8_arm_dbg&range=63499:63500

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5088953410387968

Issue filed automatically.

The reproduce tool requires a ClusterFuzz source checkout. To prepare one, run:

git clone https://github.com/google/clusterfuzz && cd clusterfuzz && git checkout tags/reproduce-tool-stable

To reproduce this issue, run:

./reproduce.sh -t https://clusterfuzz.com/testcase-detail/5088953410387968 -b /path/to/build

Please use the GN arguments provided in this report when building the binary. If you have any feedback on reproducing test cases, let us know at https://forms.gle/Yh3qCYFveHj6E5jz5 so we can improve.

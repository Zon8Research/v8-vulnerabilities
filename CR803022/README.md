Detailed report: https://clusterfuzz.com/testcase?key=5874775150034944

Fuzzer: decoder_langfuzz
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  current_ == next_ in node.h
  v8::internal::compiler::Node::Uses::const_iterator::operator++
  v8::internal::compiler::DeadCodeElimination::ReduceLoopOrMerge
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_d8_dbg&range=47073:47074

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5874775150034944

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.
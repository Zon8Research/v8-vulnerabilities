Detailed Report: https://clusterfuzz.com/testcase?key=5722256156459008

Fuzzer: ochang_js_fuzzer_mac
Job Type: mac_asan_d8_dbg
Platform Id: mac

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  AllowHeapAllocation::IsAllowed() in heap-inl.h
  v8::internal::HeapObject v8::internal::Heap::AllocateRawWith<
  v8::internal::FactoryBase<v8::internal::Factory>::NewByteArray
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=mac_asan_d8_dbg&range=69678:69679

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5722256156459008

Issue filed automatically.

The reproduce tool requires a ClusterFuzz source checkout. To prepare one, run:

git clone https://github.com/google/clusterfuzz && cd clusterfuzz && git checkout tags/reproduce-tool-stable

To reproduce this issue, run:

./reproduce.sh -t https://clusterfuzz.com/testcase-detail/5722256156459008 -b /path/to/build

Please use the GN arguments provided in this report when building the binary. If you have any feedback on reproducing test cases, let us know at https://forms.gle/Yh3qCYFveHj6E5jz5 so we can improve.

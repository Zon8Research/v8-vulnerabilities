Detailed report: https://clusterfuzz.com/testcase?key=5085616994385920

Job Type: linux_debug_chrome
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  __isolate__->has_scheduled_exception() in isolate.cc
  v8::internal::Isolate::RunHostImportModuleDynamicallyCallback
  v8::internal::__RT_impl_Runtime_DynamicImportCall
  
Sanitizer: address (ASAN)

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5085616994385920

Additional requirements: Requires HTTP

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for instructions to reproduce this bug locally.
Detailed report: https://clusterfuzz.com/testcase?key=5741191277838336

Fuzzer: inferno_js_fuzzer
Job Type: linux_asan_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  HasLength() in shared-function-info-inl.h
  v8::internal::SharedFunctionInfo::GetLength
  v8::internal::JSFunction::GetLength
  
Sanitizer: address (ASAN)

Regressed: V8: 46683:46684

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5741191277838336


Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.
Detailed report: https://clusterfuzz.com/testcase?key=5154758063685632

Fuzzer: ochang_js_fuzzer
Job Type: linux_d8_dbg
Platform Id: linux

Crash Type: DCHECK failure
Crash Address: 
Crash State:
  old_descriptors_->GetDetails(modified_descriptor_) .representation() .Equals(new
  
Sanitizer: address (ASAN)

Regressed: https://clusterfuzz.com/revisions?job=linux_d8_dbg&range=60821:60822

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5154758063685632

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for instructions to reproduce this bug locally.
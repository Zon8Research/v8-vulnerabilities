Detailed report: https://clusterfuzz.com/testcase?key=6011640893145088

Job Type: linux_asan_chrome_mp
Crash Type: UNKNOWN READ
Crash Address: 0x0020bfff8006
Crash State:
  v8::internal::Sweeper::EnsurePageIsIterable
  v8::internal::Heap::GcSafeFindCodeForInnerPointer
  v8::internal::InnerPointerToCodeCache::GetCacheEntry
  
Sanitizer: address (ASAN)

Recommended Security Severity: Medium

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_chrome_mp&range=530701:530716

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=6011640893145088

Issue filed automatically.

See https://github.com/google/clusterfuzz-tools for more information.
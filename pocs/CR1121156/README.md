Detailed Report: https://clusterfuzz.com/testcase?key=5203227469742080

Fuzzer: ochang_js_fuzzer_win
Job Type: windows_asan_d8_dbg
Platform Id: windows

Crash Type: Heap-use-after-free READ 2
Crash Address: 0x11bcfa24bef8
Crash State:
  icu_67::RuleBasedBreakIterator::handleNext
  icu_67::RuleBasedBreakIterator::BreakCache::populateFollowing
  icu_67::RuleBasedBreakIterator::BreakCache::nextOL
  
Sanitizer: address (ASAN)

Recommended Security Severity: High

Regressed: https://clusterfuzz.com/revisions?job=windows_asan_d8_dbg&range=69152:69153

Reproducer Testcase: https://clusterfuzz.com/download?testcase_id=5203227469742080

Issue filed automatically.


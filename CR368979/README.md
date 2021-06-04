Detailed report: https://cluster-fuzz.appspot.com/testcase?key=4999124116045824

Fuzzer: Mbarbella_js_mutation
Job Type: Linux_asan_d8

Crash Type: UNKNOWN
Crash Address: 0x7fbed262d0c8
Crash State:
  - crash stack -
  v8::internal::NoBarrier_Load
  v8::internal::HeapObject::map_word
  v8::internal::PointersUpdatingVisitor::UpdateSlot
  

Minimized Testcase (10.61 Kb): https://cluster-fuzz.appspot.com/download/AMIfv95Srai70LALVdQ2arJgkpvLL1u9R0D6gLoIes2WwpSH4STgfaU0My-tu4dI-Q5ikxxjt4flcS6dYU21md8J3qiKNa-BkzddGXWqXx2EoaXVvrv4XCH9kOZnHd-6jGl6X_9aafympOJ2kVTi154FEEl-k05Afw
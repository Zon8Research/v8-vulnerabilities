Detailed report: https://cluster-fuzz.appspot.com/testcase?key=4534683610120192

Fuzzer: Mbarbella_js_mutation
Job Type: Linux_asan_d8

Crash Type: UNKNOWN
Crash Address: 0x228f10338001
Crash State:
  - crash stack -
  v8::internal::MemoryChunk::IsFlagSet
  v8::internal::FlexibleBodyVisitor<v8::internal::MarkCompactMarkingVisitor, v8::internal::FixedArray:
  v8::internal::MarkCompactCollector::EmptyMarkingDeque
  
Regressed: V8: r19255:19304

Minimized Testcase (6.54 Kb): https://cluster-fuzz.appspot.com/download/AMIfv96nc8n4kVI4gbFYjDu9wEJSvHUhMpfTU9cIrihldeqhQnrzgcXA0xNkjCHld8FxQh2d95RKyxgPBAwjhkts5VL3GCJCl6jNq3SKrRsmcKC4VKtizsNHpYfIb7ikuDWdu56uQCciifkFID1qm1HVQwz6m7ElgQ
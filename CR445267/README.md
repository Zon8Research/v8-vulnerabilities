Detailed report: https://cluster-fuzz.appspot.com/testcase?key=5797815971217408

Fuzzer: Decoder_langfuzz
Job Type: Linux_asan_d8_dbg

Crash Type: UNKNOWN
Crash Address: 0x6310800507f2
Crash State:
  v8::internal::Invoke
  v8::internal::Execution::Call
  v8::Script::Run
  
Regressed: V8: r25900:25908

Minimized Testcase (10.12 Kb): https://cluster-fuzz.appspot.com/download/AMIfv97k81jqC1aCtBRlG6FvUPYtlRnoVyIHqJK2sH4I84UZELTH_3fM6yXgQFIO5hSaycoBkbzqD5q6ARaXFecJ1zrHs9Yc4jSTz99j1DbKT9d5MHkxtPZACLWBromK_F1eNx5bPiZEnebtwqAZ8h9CD4C1ou7xjw

Filer: machenbach
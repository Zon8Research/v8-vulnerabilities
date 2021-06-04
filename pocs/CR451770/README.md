Detailed report: https://cluster-fuzz.appspot.com/testcase?key=5049874536988672

Fuzzer: Mbarbella_js_mutation
Job Type: Linux_v8_d8_be

Crash Type: UNKNOWN
Crash Address: 0x000056782811
Crash State:
  v8::internal::SharedFunctionInfo::code
  v8::internal::OptimizedFrame::Summarize
  v8::internal::Isolate::CaptureSimpleStackTrace
  
Regressed: V8: r26150:26175

Minimized Testcase (10.51 Kb): https://cluster-fuzz.appspot.com/download/AMIfv94awBjxzOpcPszUz5_uKH5_CEBXT5fN1B2_ukZd_mqhoKyMQgfKhICXYkycAoZ6ps4Bnnit5Tp4o4N0kF-up3E_8uxNVUP0DD6Vv2W5IVAvw6Z5sGkCREs_LmIPTJC5SEhwsCCIKvkRRo0gNJa6TEGOXh5fsw

Filer: mbarbella
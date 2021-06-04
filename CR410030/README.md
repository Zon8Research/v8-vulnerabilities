Detailed report: https://cluster-fuzz.appspot.com/testcase?key=6071864683134976

Fuzzer: Decoder_langfuzz
Job Type: Linux_asan_d8_dbg

Crash Type: CHECK failure
Crash Address: 
Crash State:
  CHECK(!v8::internal::FLAG_enable_slow_asserts || (object->IsJSObject())) fa
  
Regressed: V8: r22366:22388

Minimized Testcase (7.82 Kb): https://cluster-fuzz.appspot.com/download/AMIfv94WBKYfM6G-DyBMzg29Mgcn9gxiROi_ibB4fJ0K1Q5eFdAF9_81G-C88H9c_zNz3JxBQnlI6vyjS-yUxCzSz4dARnskQj2ioy7vLQClv2T0-VKWALQAtt3MsGIN0Xaz23ERCKzywxdeO41MHtxZh5ThD4vZiA

Filer: mbarbella
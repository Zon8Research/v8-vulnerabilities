Detailed report: https://cluster-fuzz.appspot.com/testcase?key=5205335303258112

Fuzzer: Decoder_langfuzz
Job Type: Linux_asan_d8

Crash Type: UNKNOWN
Crash Address: 0x7f41d1643b20
Crash State:
  v8::internal::FixedArray::get
  v8::internal::TypeFeedbackOracle::GetInfo
  v8::internal::TypeFeedbackOracle::CallIsMonomorphic
  

Minimized Testcase (7.52 Kb): https://cluster-fuzz.appspot.com/download/AMIfv94NjnM6Q4C2iwpAqQKE8fUqxJwsEZ3m807CaJU1vitXXH9selXBKWLZOiD4_pJuADJen8bqjlLpaN5ZM9FqrkO9QlnfJjRNhnuTsLBfpTqZjMhr-g2-S5kLKJo1RKlfg3HzF0zQkDmKVZfYWAQ58uBONkZTsw

Filer: mbarbella
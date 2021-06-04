Detailed report: https://cluster-fuzz.appspot.com/testcase?key=6390149838536704

Fuzzer: Decoder_langfuzz
Job Type: Linux_msan_d8

Crash Type: Use-of-uninitialized-value
Crash Address: 
Crash State:
  v8::internal::Decoder<v8::internal::Simulator>::DecodeBranchSystemException
  v8::internal::Simulator::CallVoid
  v8::internal::Simulator::CallJS
  
Regressed: https://cluster-fuzz.appspot.com/revisions?job=linux_msan_d8&range=299683:299847

Minimized Testcase (13.00 Kb): https://cluster-fuzz.appspot.com/download/AMIfv97k79ae8xp5fUEsxRVTVs1KlYXtiQRWFPndPgwQofvBm-insjPZX5lO9zTNBCndceM-iD_jW0dKCD6cmNRzer2yf5DO9f058EC4Je73SKNnTUW77CKvkk1kfu6Xx_IJO8yzpmun70toi05u8-YB96cMaeQcVg

Filer: aarya
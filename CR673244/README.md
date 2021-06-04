Detailed report: https://cluster-fuzz.appspot.com/testcase?key=5916664546983936

Fuzzer: decoder_langfuzz
Job Type: linux_asan_d8_ignition_v8_arm_dbg
Platform Id: linux

Crash Type: UNKNOWN READ
Crash Address: 0xffffffff
Crash State:
  v8::internal::Simulator::DecodeType2
  v8::internal::Simulator::InstructionDecode
  v8::internal::Simulator::CallInternal
  
Recommended Security Severity: Medium

Regressed: V8: r41057:41058

Minimized Testcase (7.56 Kb): https://cluster-fuzz.appspot.com/download/AMIfv948WJpUb9kKH9TmQs8nvK8kZOTD5ZJKOAyA0BmnaR0yjOo4vXUjYZhHOvsUm9KJY336Bsymu3uyWVJZTWvUfuNf9OV3EwNsuFt5NpgtOAl-fpS6pnLyCpDAi3qKb0ElPfqGSBJW1HGcY8QW2NB-pCst9PasXQ?testcase_id=5916664546983936

Issue manually filed by: ishell

See https://dev.chromium.org/Home/chromium-security/bugs/reproducing-clusterfuzz-bugs for more information.
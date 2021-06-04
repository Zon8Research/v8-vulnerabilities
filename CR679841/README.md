Detailed report: https://cluster-fuzz.appspot.com/testcase?key=5430118219776000

Fuzzer: decoder_langfuzz
Job Type: linux_asan_d8_v8_mipsel_dbg
Platform Id: linux

Crash Type: Stack-buffer-overflow WRITE 1
Crash Address: 0xdd9bd044
Crash State:
  v8::internal::DoubleToRadixCString
  v8::internal::Builtin_Impl_NumberPrototypeToString
  v8::internal::Builtin_NumberPrototypeToString
  
Sanitizer: address (ASAN)

Recommended Security Severity: High

Regressed: V8: r41254:41255

Minimized Testcase (6.93 Kb): https://cluster-fuzz.appspot.com/download/AMIfv97Rjac1GOhxDLJWb27tYeadq24hCM3Lgfiuf86W9mAxz-E_qnk1EwrEG_vLjqAC7R_4cn9gtmY9She6liPIIN5WTekkLOrir_Lg1a_s_Xsycj-S-92FxvP1vs_0zNDJS6foO6DEPmCckvnnxlAK12IHxRs2L2RVQBzMInipDxN7jUy9azBRZH9RtlJkvUdQtByUbDxuWobzqCcrmdPFr7Dbg9PIrNoPEMtVWh42eGt32UZiOjAOrnWO5n5gluLUNkOG2CJDIu5KdST9nZ0cPsNzHmqsIHkpTENtaHUMnVFrK1Zv7zmmcFH1xA4DPrOVQClKtTy5Z-uRiDU2sVis4zwZDq88BC320gpQE1THg8Ur8qtIQ-w6tBgZxTlo65vN3MX0oRruigCvktWYV5BzfOXCHXRorg?testcase_id=5430118219776000

Issue filed automatically.

See https://dev.chromium.org/Home/chromium-security/bugs/reproducing-clusterfuzz-bugs for more information.
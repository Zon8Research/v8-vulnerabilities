Detailed report: https://clusterfuzz.com/testcase?key=4913749791342592

Fuzzer: inferno_layout_test_unmodified
Job Type: linux_asan_content_shell_drt
Platform Id: linux

Crash Type: Heap-use-after-free READ {*}
Crash Address: 0x606000133340
Crash State:
  v8::internal::libc_memcpy
  v8::internal::Invoke
  v8::internal::Execution::TryCall
  
Sanitizer: address (ASAN)

Recommended Security Severity: High

Regressed: https://clusterfuzz.com/revisions?job=linux_asan_content_shell_drt&range=461086:461121

Reproducer Testcase: https://clusterfuzz.com/download/AMIfv96KOWoOwzsVrRwSjMwGuyY_GCB049zslCwPOcPpDUIk8tNACZ1LUSowC9vD6JlATxf8eiGB_d6dyZBqyob-MTjIzvQb9IyN_WA4tAu5cmkdPLfcFqoO3b8YniUlQHFqIEV901omzGn55uUZqzOG0zXQd-cSZDTRPrTsqKENp0T3NxMef49kRL7M1-XIlc9b8_TZTbrvquvDsaD8n5rLEZOGNgFbxA6QtDdlCIkOhxuVGi-zt7Tcquj9zZDZmbVGExUYTBM6mHMEQSfilJMxypvgZWPKvRMT-ve_SPbhPj2WGeQWb9Tc4ywQMKYovhMWBUeI6Koz30AIsGr9t8-KuwIs8L81h4utu6TkH5STnUf9F1QG1ShGV6gDD9uAGcQqwhyftAuzaJYpbGi3d3Spje6LEBj58Q?testcase_id=4913749791342592


Issue filed automatically.

See https://dev.chromium.org/Home/chromium-security/bugs/reproducing-clusterfuzz-bugs for more information.
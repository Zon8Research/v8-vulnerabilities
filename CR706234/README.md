Detailed report: https://clusterfuzz.com/testcase?key=5465767912144896

Fuzzer: mbarbella_js_mutation
Job Type: linux_msan_d8
Platform Id: linux

Crash Type: Use-of-uninitialized-value
Crash Address: 
Crash State:
  v8::internal::interpreter::BytecodeRegisterOptimizer::RegisterTransfer
  v8::internal::interpreter::BytecodeArrayBuilder::StoreAccumulatorInRegister
  v8::internal::interpreter::BytecodeGenerator::BuildVariableAssignment
  
Sanitizer: memory (MSAN)

Recommended Security Severity: Medium

Regressed: https://clusterfuzz.com/revisions?job=linux_msan_d8&range=459483:459538

Reproducer Testcase: https://clusterfuzz.com/download/AMIfv94nXmj9hZ7IOtmpzw-LzvU5TEWpUIle_ebpJRbQXqVvp4YJqIgJYeOONeykTu6QcDQxveYjetf6t-yarNRUQrG4DNcadvx7VML2_Q3YvnVF3hLo-aLR94JOeWjlROlL-0o-lQVYxXG8pOuW3aEQHsVgfKkJKP1WzDhDFR3hy31gJwltfFeWkJsRf36cgM_MsW4DZ6UVt5o9rOgktsUAp7v4G5O78dP8b1CLhkbgRGW0TkCFcNhbmcvm4WiGs-J4TYhL4W-FcUt3PGcAnWqf5Yn1auuu7jPw7MXa65k3d3v5fn5sh2iuVSwnSftZcEUTnFTUpOXUv72K93C-E68xsi3Ow0IpwPPXv12AQVurPF61wIcIgiYby4pEiDluHZLyow2mckUJ1aR0wOFJX1iezjCRaY3Ynw?testcase_id=5465767912144896


Issue filed automatically.

See https://dev.chromium.org/Home/chromium-security/bugs/reproducing-clusterfuzz-bugs for more information.
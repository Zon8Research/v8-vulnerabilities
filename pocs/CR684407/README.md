Detailed report: https://cluster-fuzz.appspot.com/testcase?key=6217690814611456

Fuzzer: libfuzzer_v8_wasm_code_fuzzer
Job Type: libfuzzer_chrome_asan_debug
Platform Id: linux

Crash Type: UNKNOWN WRITE
Crash Address: 0x00004800001e
Crash State:
  NULL
Sanitizer: address (ASAN)

Recommended Security Severity: High

Regressed: https://cluster-fuzz.appspot.com/revisions?job=libfuzzer_chrome_asan_debug&range=427885:428102

Minimized Testcase (0.09 Kb): https://cluster-fuzz.appspot.com/download/AMIfv95FT07V8iw_kRIC2NKWmpksa4HQpaQbyJkd1CGAOpxUaOmNYcAhsr9PbGtOxUg4DmYWFcgAYjqIgi61743pkzabo9X9cR18tOoJiAPeUmaXWO2ggryG2iv8FdrTXVEhJgE7evZu39Zr-6mV9k3LHdOH0Tp_2M25mR76uw19QEtFlHgSBY6WxyFTFKzSL0fuImBw3zIh7tC0DIg1Rcm38Kc82chASpcqdGYnjeSGNY3JA29NLXkRgLNyNXVq5zLqHuAGoL-1Y2xG11hNxlODecTOEmmki9EayZstVn0oTTUxPbsjBLoWDS5MN6CDCY6Qkb_IOa4DooWyZ6RfOPu7YrgND5nSIPbd0XFSbr8-0JK54_9QieQ?testcase_id=6217690814611456

Issue filed automatically.

See https://chromium.googlesource.com/chromium/src/+/master/testing/libfuzzer/reproducing.md for more information.
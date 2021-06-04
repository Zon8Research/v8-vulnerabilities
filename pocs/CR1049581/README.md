Target : ASAN-D8-DBG Latest
Crash Type: Debug check failed: bytecode_offset >= 0 (-1 vs. 0).
Crash State:

#
# Fatal error in ../../src/heap/factory.cc, line 3241
# Debug check failed: bytecode_offset >= 0 (-1 vs. 0).
#
#
#
#FailureMessage Object: 0x7ffe544e8280


POC:
<b>-------------------------</b>-
function main() {
    function v1(v2,v3,v4,v5) {
        'use strict'
        const v6 = v4(...this);
    }
    const v7 = v1();
}
    
main();
<b>-------------------------</b>-


*** - runtime flags - (null)
----
*** This sample was found through context aware fuzzing .
*** Fuzzer Generation - MK_0.25 .

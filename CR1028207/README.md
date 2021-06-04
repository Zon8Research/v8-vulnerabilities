Target : asan-d8-dbg Latest
Crash Type: DCHECK failure
Crash State:
#
# Fatal error in ../../src/ic/stub-cache.cc, line 71
# Debug check failed: !Heap::InYoungGeneration(name).
#
#
#
#FailureMessage Object: 0x7ffc30a97020

Min poc:
<b>-------------------------</b>-
function main() {
    const v2 = [13.37];
    let v3 = 9007199254740993;
    v2.length = 0;
    const v5 = v2.concat(v3);
    for (let v9 = 0; v9 < 100; v9++) {
        const v11 = new Uint8Array();
        const v12 = v11[v5];
    }
    }

main();
<b>-------------------------</b>-

This sample found through context aware fuzzing .
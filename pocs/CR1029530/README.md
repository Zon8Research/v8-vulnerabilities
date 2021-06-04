Target : ASAN-D8-DBG Latest
Crash Type: RepresentationChangerError: node #71:BigIntAsUintN of kRepWord64 (BigInt) cannot be changed to kRepWord32
Crash State:

#
# Fatal error in ../../src/compiler/representation-change.cc, line 1414
# RepresentationChangerError: node #71:BigIntAsUintN of kRepWord64 (BigInt) cannot be changed to kRepWord32
#
#
#
#FailureMessage Object: 0x7ffc2f8c1d60

POC:
<b>-------------------------</b>-
function main() {
function v0(v1,v2) {
    const v5 = [65537];
    const v7 = BigInt.asUintN(4,v5);
    let v10 = 0;
    while (v10 < 1) {
        const v11 = v10 + 1;
        v10 = v7;
    }
}
for (let v15 = 0; v15 < 255; v15++) {
    const v16 = v0();
}
}

main();

<b>-------------------------</b>-



----
*** This sample was found through context aware fuzzing .

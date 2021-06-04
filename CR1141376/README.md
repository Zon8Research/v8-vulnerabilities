<b>VULNERABILITY DETAILS</b>
Note: this bug is in experimental code: --experimental-wasm-gc.
When allocating a new array in wasm, the allocation will multiply the number of elements with the element size.
On 32bit builds, this value can wrap around and turns into a small allocation, while any array access is compared against the large length value.

The multiplication is here:
https://source.chromium.org/chromium/chromium/src/+/master:v8/src/builtins/builtins-wasm-gen.cc;l=117;drc=d84109963d6012d2eb0bbb40a2a534498c122619

<b>VERSION</b>
V8 Version: reproduces on current master: V8 version 8.8.0 (candidate)

<b>REPRODUCTION CASE</b>
repro.js is attached
out/x86/d8 --experimental-wasm-gc repro.js
Running it against a x86 build will crash at array+0x31313131
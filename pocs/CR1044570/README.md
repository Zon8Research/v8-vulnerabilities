Version: a9a66826332cd6781da92651971925f34dbb3b86
OS: Ubuntu x64
Architecture: x64

Spun-off from: https://bugzilla.mozilla.org/show_bug.cgi?id=1602497

Jeff Walden from Mozilla investigated this a write beyond the allocated characters in ICU code. 


Test case (run with d8):
---
var s = "a".repeat(0xAFFFFFF); // maybe system-dependent

print("len:", new Intl.ListFormat().format(Array(16).fill(s)).length);
---

NOTE: There must be enough free memory to trigger the crash, for example it does crash reproducibly for me with 16GB RAM, but it doesn't crash with only 10GB RAM.


Crashes with:
---
Received signal 11 SEGV_MAPERR 7f6434dbc000

==== C stack trace ===============================

 [0x564c99fb8a64]
 [0x7f67872e9390]
 [0x7f6786930bbc]
 [0x564c9a0f8840]
 [0x564c9a0c85dd]
 [0x564c9a0c882f]
 [0x564c99ffadb3]
 [0x564c99ffb2aa]
 [0x564c9981d672]
 [0x564c999807c3]
 [0x564c99eb9d58]
[end of stack trace]
Segmentation fault (core dumped)
---


Stack trace:
---
#0  __memmove_ssse3 () at ../sysdeps/x86_64/multiarch/memcpy-ssse3.S:2829
#1  0x00007ffff47311c5 in us_arrayCopy(char16_t const*, int, char16_t*, int, int) () at ../../third_party/icu/source/common/unistr.cpp:87
#2  0x00007ffff472ee09 in icu_65::UnicodeString::doAppend(char16_t const*, int, int) () at ../../third_party/icu/source/common/unistr.cpp:1594
#3  0x00007ffff4732e11 in icu_65::UnicodeString::doAppend(icu_65::UnicodeString const&, int, int) () at ../../third_party/icu/source/common/unistr.cpp:1545
#4  0x00007ffff4630c6d in icu_65::UnicodeString::append(icu_65::UnicodeString const&) () at ../../third_party/icu/source/common/unicode/unistr.h:4629
#5  0x00007ffff4696710 in icu_65::SimpleFormatter::format(char16_t const*, int, icu_65::UnicodeString const* const*, icu_65::UnicodeString&, icu_65::UnicodeString const*, signed char, int*, int, UErrorCo$
e&) () at ../../third_party/icu/source/common/simpleformatter.cpp:312
#6  0x00007ffff4696a8c in icu_65::SimpleFormatter::formatAndReplace(icu_65::UnicodeString const* const*, int, icu_65::UnicodeString&, int*, int, UErrorCode&) const ()
    at ../../third_party/icu/source/common/simpleformatter.cpp:243
#7  0x00007ffff39809ed in icu_65::joinStringsAndReplace(icu_65::SimpleFormatter const&, icu_65::UnicodeString const&, icu_65::UnicodeString const&, icu_65::UnicodeString&, signed char, int&, int*, int*, U
ErrorCode&) () at ../../third_party/icu/source/i18n/listformatter.cpp:351
#8  0x00007ffff397ffe2 in icu_65::ListFormatter::format_(icu_65::UnicodeString const*, int, icu_65::UnicodeString&, int, int&, icu_65::FieldPositionHandler*, UErrorCode&) const ()
    at ../../third_party/icu/source/i18n/listformatter.cpp:504
#9  0x00007ffff39806ac in icu_65::ListFormatter::formatStringsToValue(icu_65::UnicodeString const*, int, UErrorCode&) const () at ../../third_party/icu/source/i18n/listformatter.cpp:419
[...]
---

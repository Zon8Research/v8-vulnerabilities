Easily reproduces in debug [1 in like 3 times, the other 2 times it looops around in debugbreaks]. Needs more analysis, might be a generic problem in  v8::internal::StringStream::PrintObject or Add

Testcase::
A15.9.3.1_A3_T6.1
<script>
try {
var x1 = new Date(1899, 12, 1, 0, 0, 0, 0);
var x2 = new Date(1969, 11, 31, 23, 59, 59, 999);
var x3 = new Date(1969, 12, 1, 105000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000105000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 105000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000105000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 105000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000105000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 105000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000105000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
} catch (ex) {
}
</script>

Stacktrace::
this is corrupted
MapWord HeapObject::map_word() {
  return MapWord(reinterpret_cast<uintptr_t>(READ_FIELD(this, kMapOffset)));
}

Unhandled exception at 0x565ec4c1 (chrome.dll) in chrome.exe: 0xC0000005: Access violation reading location 0x41d8e410.
>!v8::internal::HeapObject::map_word()  Line 1097 + 0x3 bytes
 !v8::internal::HeapObject::map()  Line 1087 + 0xc bytes
 !v8::internal::Object::IsString()  Line 148 + 0x22 bytes
 !v8::internal::StringStream::PrintObject(v8::internal::Object * o=0x41d8e411)  Line 190 + 0x8 bytes
 !v8::internal::StringStream::Add(v8::internal::Vector<char const > format={...}, v8::internal::Vector<v8::internal::FmtElm> elms={...})  Line 142
 !v8::internal::StringStream::Add(const char * format=0x5a0f69ec, v8::internal::FmtElm arg0={...}, v8::internal::FmtElm arg1={...})  Line 235
 !v8::internal::JavaScriptFrame::Print(v8::internal::StringStream * accumulator=0x0593eb08, v8::internal::StackFrame::PrintMode mode=DETAILS, int index=3)  Line 986
 !v8::internal::PrintFrames(v8::internal::StringStream * accumulator=0x0593eb08, v8::internal::StackFrame::PrintMode mode=DETAILS)  Line 519 + 0x50 bytes
 !v8::internal::Top::PrintStack(v8::internal::StringStream * accumulator=0x0593eb08)  Line 538 + 0xb bytes
 !v8::internal::Top::PrintStack()  Line 495 + 0x9 bytes
 !V8_Fatal(const char * file=0x5a0e8780, int line=6428, const char * format=0x5a0e4cb0, ...)  Line 58
 !CheckHelper(const char * file=0x5a0e8780, int line=6428, const char * source=0x5a0e8758, bool condition=false)  Line 59 + 0x16 bytes
 !v8::internal::DateYMDFromTimeSlow(int date=-14802, int & year=-5877600, int & month=-858993460, int & day=-858993460)  Line 6428 + 0x33 bytes
 !v8::internal::DateYMDFromTime(int date=-2147483648, int & year=-5877600, int & month=-858993460, int & day=-858993460)  Line 6471 + 0x15 bytes
 !v8::internal::Runtime_DateYMDFromTime(v8::internal::Arguments args={...})  Line 6484 + 0x2e bytes
 	3793028e()	
 !v8::internal::Invoke(bool construct=false, v8::internal::Handle<v8::internal::JSFunction> func={...}, v8::internal::Handle<v8::internal::Object> receiver={...}, int argc=0, v8::internal::Object * * * args=0x00000000, bool * has_pending_exception=0x0593ef07)  Line 97 + 0x19 bytes
 !v8::internal::Execution::Call(v8::internal::Handle<v8::internal::JSFunction> func={...}, v8::internal::Handle<v8::internal::Object> receiver={...}, int argc=0, v8::internal::Object * * * args=0x00000000, bool * pending_exception=0x0593ef07)  Line 123 + 0x1f bytes
 !v8::Script::Run()  Line 1304 + 0x19 bytes
 !WebCore::V8Proxy::runScript(v8::Handle<v8::Script> script={...}, bool isInlineCode=false)  Line 421 + 0x13 bytes
 !WebCore::V8Proxy::evaluate(const WebCore::ScriptSourceCode & source={...}, WebCore::Node * node=0x00000000)  Line 375 + 0x2a bytes
 !WebCore::ScriptController::evaluate(const WebCore::ScriptSourceCode & sourceCode={...}, WebCore::ShouldAllowXSS shouldAllowXSS=DoNotAllowXSS)  Line 256
 !WebCore::ScriptController::executeScript(const WebCore::ScriptSourceCode & sourceCode={...}, WebCore::ShouldAllowXSS shouldAllowXSS=DoNotAllowXSS)  Line 62
 !WebCore::ScriptElement::executeScript(const WebCore::ScriptSourceCode & sourceCode={...})  Line 215 + 0x19 bytes
 !WebCore::HTMLScriptRunner::runScript(WebCore::Element * script=0x04cb3b40, const WTF::TextPosition<WTF::OneBasedNumber> & scriptStartPosition={...})  Line 314
 !WebCore::HTMLScriptRunner::execute(WTF::PassRefPtr<WebCore::Element> scriptElement={...}, const WTF::TextPosition<WTF::OneBasedNumber> & scriptStartPosition={...})  Line 175
 !WebCore::HTMLDocumentParser::runScriptsForPausedTreeBuilder()  Line 199 + 0x23 bytes
 !WebCore::HTMLDocumentParser::pumpTokenizer(WebCore::HTMLDocumentParser::SynchronousMode mode=AllowYield)  Line 235 + 0x8 bytes
 !WebCore::HTMLDocumentParser::pumpTokenizerIfPossible(WebCore::HTMLDocumentParser::SynchronousMode mode=AllowYield)  Line 170
 !WebCore::HTMLDocumentParser::append(const WebCore::SegmentedString & source={...})  Line 312
 !WebCore::DecodedDataDocumentParser::appendBytes(WebCore::DocumentWriter * writer=0x04c8f1f0, const char * data=0x00000000, int length=0, bool shouldFlush=true)  Line 54 + 0x1f bytes
 !WebCore::DocumentWriter::addData(const char * str=0x00000000, int len=0, bool flush=true)  Line 200 + 0x20 bytes
 !WebCore::DocumentWriter::endIfNotLoadingMainResource()  Line 221
 !WebCore::DocumentWriter::end()  Line 207
 !WebCore::DocumentLoader::finishedLoading()  Line 281
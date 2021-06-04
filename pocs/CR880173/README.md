UserAgent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36

Steps to reproduce the problem:
1. download and unzip the release asan chromium :asan-linux-release-583299
2. Run ./chrome crash.html

What is the expected behavior?

What went wrong?
Can get UAF stably as long as the version number is greater than 70.0.3522.0.

In https://chromium.googlesource.com/v8/v8.git/+/07aafb76f60326f5750787cf0e48e859d0eaa194/src/wasm/module-compiler.cc:2179

AsyncCompileJob::~AsyncCompileJob() {
  background_task_manager_.CancelAndWait();
  if (native_module_) native_module_->compilation_state()->Abort();

  CancelPendingForegroundTask();     <-----was moved here from abort()

  for (auto d : deferred_handles_) delete d;
}

In order to fix missing cancellation of background compilation,the function CancelPendingForegroundTask() was moved from abort() to ~AsyncCompileJob().
Maybe it did not consider that job_ was freed in the progress of backing_thread shutdown.

And may the fix could be like this?
1.Check the AsyncCompileJob is deleted or not before CancelPendingForegroundTask? 
or
2.Try to make abort() not be missing and move CancelPendingForegroundTask() to abort() again?

Hope my work helps.

Did this work before? N/A 

Chrome version: 70.0.3524.0  Channel: n/a
OS Version: 
Flash Version:
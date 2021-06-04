<b>VULNERABILITY DETAILS</b>

I am not sure if this is really a security issue or if it is exploitable,
but I'm not familiar with Blink internals and this can probably lead to a UAF.

MessagePort::~MessagePort() assumes (with a DCHECK) that close() has been called if the port had been previously started.
close() is called via a LifecycleNotifier and if it is owned in a worker then it will only be called when terminating the WorkerGlobalScope.
It is possible that the destructor is called before from the GC, this currently causes a crash in debug versions.
It seems to me that the DCHECK is there to avoid a potential UAF,
but I could not trigger that.

I have attached a reproduction case.
Creating the Blob is not necessary for the bug, it's only to comply with Same Origin Policy, the worker could be loaded from another js file too.

Possible fixes:
1. Call close() from the destructor to ensure there will be no UAF.
2. If this cannot be exploited then simply remove the DCHECK.

I could try it only on version 57, because currently if I checkout an older version then "gclient sync" fails with a git error for webrtc, so I couldn't compile a debug version.

<b>VERSION</b>

Chrome Version: Reproduced on 57 but it probably affects older versions too
Operating System: Reproduced on Linux x64 but all OS versions should be affected

<b>REPRODUCTION CASE</b>

0. Use a debug version of Chrome to have DCHECKs enabled.
1. Load the attached html page.
2. Trigger a GC sweep (DevConsole -> Timeline/Memory -> Trash icon)
3. Aw, Snap!

<b>FOR CRASHES, PLEASE INCLUDE THE FOLLOWING ADDITIONAL INFORMATION</b>

Type of crash: tab
Crash State: DCHECK failure

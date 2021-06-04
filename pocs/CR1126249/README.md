
<b>VULNERABILITY DETAILS</b>

While fuzzing V8 a sample was generated that leads to the following crash:

---> Debug Build

```
	#
	# Fatal error in ../../src/builtins/builtins-array.cc, line 154
	# Debug check failed: 0 <= length && length <= kMaxSafeInteger.
	#
	#
	#
	#FailureMessage Object: 0x7ffdf42a6620
```

---> Release Build

```
	Received signal 11 SEGV_ACCERR 10500818d000

	==== C stack trace ===============================

	 [0x563691ee3677]
	 [0x7f8baafcb390]
	 [0x7f8baa616cde]
	 [0x5636915addd9]
	 [0x5636915add45]
	 [0x5636916f14d9]
	 [0x5636914986b4]
	 [0x563691dd4e98]
	[end of stack trace]

```

It seems to be triggering an OOB write on an Heap Object.

<b>REPRODUCTION CASE</b>

Commit:

```
	3219b29d41d1f12861d67ee40b836cbee60b2fff
```

I'm using builds from https://commondatastorage.googleapis.com/v8-asan/index.html

Release: 

```
	d8-linux-release-v8-component-69751
```

Debug:

```
	d8-linux-debug-v8-component-69751
```


Command for repro:
	./d8 sample.js

It should give you an output similar to the ones described at "vulnerability details".

I'm attaching the bug as "sample.js".

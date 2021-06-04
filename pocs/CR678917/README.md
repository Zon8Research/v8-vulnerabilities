UserAgent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36

Steps to reproduce the problem:
1. Make a small string
2. Add a small chunk to result of 1. many times
3. It occurs crash

What is the expected behavior?

What went wrong?
It usually occurs crash because of dereference [0x13]
Sometimes it makes eip to zero. I attached dump.

Did this work before? N/A 

Chrome version: 55.0.2883.87  Channel: stable
OS Version: 10.0
Flash Version: Shockwave Flash 24.0 r0
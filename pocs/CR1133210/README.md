UserAgent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36

Steps to reproduce the problem:
1. download chromium of asan-linux-debug-811138
2. ./chrome ./poc.pdf
3.

What is the expected behavior?

What went wrong?
In debug version, this poc will triger a DCHECK failure, the isolate is a Global Object which not satisfy the dcheck.
In asan-release version on Windows, it will print ASAN log with the accession-violation on UNKNOWN ADDRESS 
And, on windows ,you need to add `--no-sandbox` to see the ASAN.

Did this work before? N/A 

Chrome version: 85.0.4183.121  Channel: stable
OS Version: 10.0
Flash Version:
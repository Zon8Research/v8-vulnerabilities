UserAgent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36

Steps to reproduce the problem:
1.run the poc file with the commandline  d8  --sparkplug --allow-natives-syntax  argmuents

What is the expected behavior?
register_count  should always check no matter debug or release version

What went wrong?
no check register_count  in release version ,which maybe lead to RCE 

Did this work before? N/A 

Chrome version: 87.0.4280.88  Channel: dev
OS Version: 10.0
Flash Version: 

git hash: c174643b08210c7136fb7cb588a62cfd42c25dcb
on ubuntu 18.04
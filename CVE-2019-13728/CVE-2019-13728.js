var worker;
var i = 0;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function go(){
    while(i < 0x200){
        worker = new Worker("./worker.js");
        worker.postMessage(1);
        await sleep(2000);
        i++;
    }
}
go();


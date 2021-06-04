function gc() {
    for (let i = 0; i < 0x10; i++) {
        let ab = new ArrayBuffer(1024 * 1024 * 10);
    }
}

function jit_func() {

eval(`

function f1200(a, ) {

}

(function() {
    for (let c = 0; c < 505; c++) {
        while (Promise >= 0xDEADBEEF) {
	        Array.prototype.slice.call(f1200, f1200, f1200);          
        }

        for (let i = 0; i < 413; i++) {

        }

    }
})();

gc();

`);


}


try{ jit_func();} catch(e) {}
try{ jit_func();} catch(e) {}
try{ jit_func();} catch(e) {}
%OptimizeFunctionOnNextCall(jit_func);
try { jit_func(); } catch(e) {} 

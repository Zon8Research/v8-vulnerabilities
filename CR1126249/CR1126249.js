function jit_func(a) {
    let v16213 = 0 * -1;
    var v31749 = new Array(1337);
    var v25608 = -0x80000000;

    if (a) {
        v25608 = -(v16213 = -1);
    }

    var v19229 = ((v16213-v25608) == -0x80000000);

    if (a) {
        v19229 = -0x1337;
    }

    let v5568 = Math.sign(v19229);

    v5568 = Math.sign(v19229) < 0|0|0 ? 0 : v5568;

    let v51206 = new Array(v5568);
    
    v51206.shift();
    Array.prototype.unshift.call(v51206);
    v51206.shift();
    v5568 = 2;

    var v22083 = new Array(0);
   
    v51206[5] = 1337;
    v51206[7] = v51206[5];
    v51206.shift();

    var v51606 = new Array(Math.min(0, v5568));
    
    v22083[3] = v51206;
    v51206[7] = v51606;

    return v22083.toString();
}


for (let i = 0; i < 0x10000; i++) {
    jit_func(true);
}

jit_func(false);

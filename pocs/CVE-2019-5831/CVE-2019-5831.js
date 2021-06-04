function v0(v2, v3){
    Object.defineProperty(v2, 'length', { writable: v3 });
}
function v4(v6, v7) {
    try {
        var v9 = [];
        var v11 = v6.bind();
        v11(v9, v7);
        v11.__proto__ = v9;
        var v12 = {};
        v12.__proto__ = v9;
        v9.__proto__ = 13.37;
        v12.unshift(3);
    } catch (e) {
        v9[0] = 1.1;
        return v9[0];
    }
}
v4(v0, false);
v4(v0, false);
%OptimizeFunctionOnNextCall(v0);
%OptimizeFunctionOnNextCall(v4);
v4(v0, false);
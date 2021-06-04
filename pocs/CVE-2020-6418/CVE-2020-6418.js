
ITERATIONS = 10000;
TRIGGER = false;

function f(a, p) {
    return a.pop(Reflect.construct(function() {}, arguments, p));
}

let a;
let p = new Proxy(Object, {
    get: function() {
        if (TRIGGER) {
            a[2] = 1.1;
        }
        return Object.prototype;
    }
});
for (let i = 0; i < ITERATIONS; i++) {
    let isLastIteration = i == ITERATIONS - 1;
    a = [0, 1, 2, 3, 4];
    if (isLastIteration)
        TRIGGER = true;
    print(f(a, p));
}
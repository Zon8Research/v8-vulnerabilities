function main() {
    const v2 = [];
    const v3 = {hasOwnProperty:v2};
    function v5(v6,v7,v8,v9,v10) {
        const v14 = Intl.NumberFormat;
        let v16 = v14;
        const v18 = Reflect.construct(v16,arguments);
        const v20 = Boolean.__proto__;
        const v22 = {preventExtensions:eval,get:eval,getPrototypeOf:Object,deleteProperty:Boolean,set:Boolean,getOwnPropertyDescriptor:eval,apply:v20,has:eval,ownKeys:Boolean,setPrototypeOf:eval,call:v20,isExtensible:v20,defineProperty:eval};
        const v24 = new Proxy(v5,v22);
        Boolean.__proto__ = v24;
        return 100;
    }
    const v25 = {construct:Boolean,call:Boolean,apply:v5,setPrototypeOf:v5,isExtensible:v5,getPrototypeOf:v5,ownKeys:Boolean,preventExtensions:Boolean};
    const v27 = new Proxy(v3,v25);
    v27.__proto__ = Boolean;
    const v29 = [];
    const v31 = [];
    const v33 = [];
    const v34 = {hasOwnProperty:v33};
    function v36(v37,v38,v39,v40,v41) {
        const v45 = v31.__proto__;
        const v47 = {preventExtensions:Boolean,e:Boolean,getPrototypeOf:eval,deleteProperty:Boolean,set:Boolean,getOwnPropertyDescriptor:Boolean,apply:v45,has:Boolean,ownKeys:Boolean,setPrototypeOf:Boolean,call:v45,isExtensible:v45,defineProperty:Boolean};
        const v49 = new Proxy(Boolean,v47);
        v45.__proto__ = v49;
        return 100;
    }
    const v50 = {construct:Boolean,call:Boolean,apply:v36,setPrototypeOf:v36,isExtensible:v36,getPrototypeOf:v36,ownKeys:Boolean,preventExtensions:v29};
    const v52 = new Proxy(v34,v50);
    v52.__proto__ = Boolean;
    const v55 = [];
    const v57 = Intl.NumberFormat;
    v57.__proto__ = v55;
    const v58 = v57();
}

main();

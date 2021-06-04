function main() {
    function v0(v1,v2) {
        let v5 = 0;
        do {
            const v9 = [1000.0];
            const v11 = {};
            const v12 = [v9,v11,v11,v11,v11];
            const v13 = {deleteProperty:v9,has:1000.0,setPrototypeOf:Intl,apply:v9,isExtensible:v11,set:v11,preventExtensions:v12,get:v12,getOwnPropertyDescriptor:v12,getPrototypeOf:v9,defineProperty:10000,ownKeys:1337,construct:10000};
            const v15 = new Proxy(Intl,v13);
            try {
                const v18 = {setPrototypeOf:BigInt,ownKeys:BigInt,has:BigInt,preventExtensions:Object,getPrototypeOf:BigInt,call:v15,isExtensible:v15,apply:Object,get:v15,getOwnPropertyDescriptor:Object};
                const v20 = new Proxy(v11,v18);
                const v21 = BigInt.asUintN(v20);
            } catch(v22) {
            }
        } while (v5 < 8);
    }
    const v23 = v0();
    }
    main();
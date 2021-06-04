function main() {
    const v1 = [0];
    const v5 = [12.42,isNaN,"[a-b-c]"];
    for (const v6 of v5) {
        try {
            const v8 = {a:12.42};
            for (const v10 in this) {
                const v11 = this[v10];
                const v12 = v8.__proto__;
                v12.toString = v11;
            }
            try {
                for (const v14 in this) {
                    const v15 = this[v14];
                    delete this[v14];
                    const v16 = v15(this);
                    delete this[this];
                }
            } catch(v17) {
            }
            for (const v19 in this) {
                const v20 = this[v19];
                const v21 = v20 - 1;
            }
            for (const v23 in this) {
                const v24 = this[v23];
                const v25 = v1.forEach(v24);
            }
        } catch(v26) {
        }
    }
    for (const v30 in this) {
        const v31 = this[v30];
        const v32 = v31(2);
        try {
            for (const v37 in this) {
                const v38 = this[v37];
                const v39 = v38(2);
            }
        } catch(v40) {
            v32.constructor = URIError;
        }
    }
    }
    
    main();
    
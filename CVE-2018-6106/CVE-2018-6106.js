async function* asyncGenerator() {
}

let gen = asyncGenerator();
gen.return({
    get then() {
        delete this.then;

        gen.next();
    }
});

function SDD() {
    class H {
        ['h']() {}
    }
    let h = H.prototype.h;
	h[1024] = {};
	h["XXX"] = {};
	h[-1] = {};
}
SDD();
SDD();

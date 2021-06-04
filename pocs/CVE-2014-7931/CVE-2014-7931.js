function start() {
o23=document.body;
o39=new MutationObserver(cb_observer_136_1);
o39.observe(top.o23, {childList: true, attributes: true, characterDataOldValue: true});
o23.style.position='fixed';
}
function cb_observer_136_1(arg) {
to=arg.shift();
gc();
gc();
gc();
}
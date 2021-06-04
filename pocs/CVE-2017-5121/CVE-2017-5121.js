var f = function()
{
  var o = { a: {}, b: { ba: { baa: 0, bab: [] }, bb: {}, bc: { bca: {bcaa: 0, bcab: 0, bcac: this} } } };
  o.b.bc.bca.bcab = 0;
  o.b.bb.bba = Array.prototype.slice.apply(o.b.ba.bab);
};
while(true) f(f);

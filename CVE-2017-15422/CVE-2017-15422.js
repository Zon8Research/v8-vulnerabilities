let PERSIAN_EPOCH = 1948320;
function compute(julianDay){
    let daysSinceEpoch = julianDay - PERSIAN_EPOCH
    //print daysSinceEpoch
    let t = 33*daysSinceEpoch+3;
    //print(t);
    let year = 1 + Math.floor((t%-0x100000000)/12053);
    //print(year);
    let farvardin1 = 365 * (year - 1) + Math.floor((8 * year + 21)/33);
    //print(farvardin1);
    let dayOfYear = (daysSinceEpoch - farvardin1);
    return dayOfYear-1;
}

function getday(d){
    for(var a of d){
        if(a.type === 'day')
            return a.value;
    }
}

function toHex(d){
    s = d.toString(16);
    return '0'.repeat(4-s.length)+s;
}

var dateti1 = new Intl.DateTimeFormat("bs-Cyrl-u-ca-persian");
date2 = null;
for(var i=0; i<50; i++){
    let julianDay = 128202205+i*31;
    let dayOfYear = compute(-julianDay);
    //print(dayOfYear);
    Date.prototype["valueOf"] = function(){return -28800000-(2440588+julianDay)*86400000;};
    var d = dateti1.formatToParts(date2);
    dayOfMonth = getday(d);
    result = (dayOfYear + 1 - dayOfMonth)&0xffff;
    print(toHex(result));
}

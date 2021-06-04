str = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';


let go = () => {
  try {
    for (var v_in in str) {
     var v = new Uint32Array(0x10000);
     go();
    }
  } catch(e) {}


  v_in.a = 0x41424344;
}


go();

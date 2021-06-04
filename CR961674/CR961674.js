const otherWindow = document.getElementById('frame').contentWindow;
try {
  bodyy.parentNode.removeChild(bodyy);
  otherWindow.eval(`import('foobar');`);
} catch (e) {
  e.stack;   //  CRASH HERE
}
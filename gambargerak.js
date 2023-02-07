var sun = document.getElementById("sun");
const Posx = [];
const Posy = [];
var sw = window.screen.width;
var sw2 = window.screen.width / 2;
var sh = window.screen.height;
var sh2 = window.screen.height / 2;
//document.getElementById("h1").innerHTML = sh + ' '+sh2;
setTimeout(function () {
  window.captureEvents(Event.MOUSEMOVE);
  window.onmousemove = GetCoordinates;
}, 5000);
function koordinat(e) {
  let posiX = e.pageX;
  let posiY = e.pageY;
  let jarakX = 0;
  let jarakY = 0;
  let percentx = 0;
  let percenty = 0;
  if (posiX > sw2) {
    jarakX = posiX - sw2;
    percentx = (jarakX / sw2) * 100;
  }
  if (posiX < sw2) {
    jarakX = sw2 - posiX;
    percentx = (jarakX / sw2) * 100;
    percentx = -percentx;
  }
  if (posiY > sh2) {
    jarakY = posiY - sh2;
    percenty = (jarakY / sh2) * 100;
  }
  if (posiY < sh2) {
    jarakY = sh2 - posiY;
    percenty = (jarakY / sh2) * 100;
    percenty = -percenty;
  }
  return [percentx, percenty];
}
function FindPosition(oElement) {
  let elem = document.getElementById(oElement);
  let x = window.getComputedStyle(elem).left;
  let y = window.getComputedStyle(elem).top;
  Posx[oElement] = x.replace("px", "");
  Posy[oElement] = y.replace("px", "");
  //document.getElementById("h2").innerHTML = x + " == " + y;
}
function hitung(e, oElement) {
  let element = document.getElementById(oElement);
  let posisiX = 0;
  let posisiY = 0;
  let tkoordinat = koordinat(e);
  let persenX = parseInt(tkoordinat[0]) / 100;
  let persenY = parseInt(tkoordinat[1]) / 100;
  let tambahX = 50 * persenX;
  let tambahY = 50 * persenY;
  posisiX = parseInt(Posx[oElement]) + tambahX;
  posisiY = parseInt(Posy[oElement]) + tambahY;
  //document.getElementById("h1").innerHTML = Posx[oElement]+" === "+Posy[oElement];
  element.style.left = -posisiX + "px";
  element.style.top = -posisiY + "px";
}
function gerakkan(e, oElement) {
  if (Posx[oElement] == undefined && Posy[oElement] == undefined) {
    FindPosition(oElement);
    setTimeout(function () {
      hitung(e, oElement);
    }, 1000);
  } else {
    hitung(e, oElement);
  }
}

function GetCoordinates(e) {
  gerakkan(e, "sun");
  gerakkan(e, "madu");
}

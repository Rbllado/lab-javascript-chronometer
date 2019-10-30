var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");

// Me viene del otro fichero. Hay una función que hace uso de printTime.
function printTime(min, seg, miliseconds) {
  if (min > 0) {
    printMinutes(min);
  }
    printSeconds(seg);
}

function printMinutes(min) {
  minDec.innerHTML = min[0];
  minUni.innerHTML = min[1];
}

function printSeconds(seg) {
  secDec.innerHTML = seg[0];
  minUni.innerHTML = seg[1];
}

function printMilliseconds() {}

function printSplit() {}

function clearSplits() {}

function setStopBtn() {}

function setSplitBtn() {}

function setStartBtn() {}

function setResetBtn() {}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  if (btnLeft.innerHTML == "START") {
    chronometer.startClick();
    btnLeft.innerHTML = "STOP";
    btnRight.innerHTML = "SPLIT";
    btnLeft.setAttribute("class", "btn stop");
    btnRight.setAttribute("class", "btn split");
  } else {
    chronometer.stopClick();
    btnLeft.innerHTML = "START";
    btnLeft.setAttribute("class", "btn start");
    btnRight.innerHTML == "RESET";
    btnRight.setAttribute("class", "btn reset");
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {});

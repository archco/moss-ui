/* eslint-disable no-unused-vars */

/************************************************************
  Toast
*************************************************************/

var toastCount = 0;
function toastShow() {
  window.Moss.toast('toast test ' + toastCount);
  toastCount++;
}

/************************************************************
  MessageBox
*************************************************************/

function showMessage() {
  var text = document.querySelector('#input-msg').value || 'empty';
  var status = document.querySelector('#select-msg').value;
  window.Moss.messageBox.add(text, status);
}

/************************************************************
  Color Library
*************************************************************/

function convertColor(hexToRgb) {
  var inputHex = document.querySelector('#input-hex-color');
  var inputRgb = document.querySelector('#input-rgb-color');

  if (hexToRgb) {
    inputRgb.value = window.Moss.lib.Color.hexToRgb(inputHex.value).join(',');
  } else {
    var array = inputRgb.value.split(',').map(function (x) {
      return parseInt(x);
    });

    inputHex.value = window.Moss.lib.Color.rgbToHex(array[0], array[1], array[2], true);
  }
}

function getLightness() {
  var value = window.Moss.lib.Color
    .lightness(document.querySelector('#input-lightness').value);
  document.querySelector('#output-lightness').innerHTML = 'lightness value: ' + value;
}

function getContrast() {
  var inputValue = document.querySelector('#input-contrast').value;
  var contrast = window.Moss.lib.Color.contrast(inputValue);
  var output = document.querySelector('#output-contrast');

  output.style.backgroundColor = inputValue;
  output.style.color = contrast;
  output.innerHTML = 'bg-color: ' + inputValue + ' contrast-color: ' + contrast;
}

/************************************************************
  ElementUtil Library
*************************************************************/

(function () {
  var eu = window.Moss.lib.ElementUtil;

  // toggle class
  eu.addListener('#btn-toggle-class', 'click', function () {
    eu.toggleClass('#toggle-class-target', 'bg-color-danger');
  });

  // toggle show
  eu.addListener('#btn-toggle-show', 'click', function () {
    eu.toggleShow('#toggle-show-target');
  });

  // filter list
  eu.addListener('#input-filter-list', 'keyup', function (e) {
    eu.filter('#filter-list li', e.currentTarget.value);
  });

  eu.addListener('#btn-sort-list', 'click', function () {
    eu.sortElements('#sort-list', 'li');
  });

  // sort table
  if (eu.getElement('#sort-table-target')) {
    eu.sortTable('#sort-table-target');
  }
})();

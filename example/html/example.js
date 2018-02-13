/* eslint-disable no-unused-vars */

var options = {};

// data for demo.
var treeData = [
  {
    name: 'MOSS-UI',
    items: [
      { name: 'SCSS' },
      { name: 'Vue' },
      {
        name: 'JS Libraries',
        items: [
          { name: 'Color' },
          { name: 'ElementUtil' },
          { name: 'Util' },
        ],
      },
    ],
  },
];
var treeData2 = [
  {
    name: '<a href="./index.html">MOSS-UI</a>',
    opened: true,
    items: [
      { name: '<a href="./scss.html">SCSS</a>' },
      { name: '<a href="./vue.html">Vue</a>' },
      {
        name: '<a href="./js-libraries.html">JS Libraries</a>',
        items: [
          { name: '<a href="./js-libraries.html#color">Color</a>' },
          { name: '<a href="./js-libraries.html#elementutil">ElementUtil</a>' },
          { name: '<a href="./js-libraries.html#util">Util</a>' },
        ],
      },
    ],
  },
];

window.vm = new window.Vue({
  el: '#app',
  data: {
    treeData: treeData,
    treeData2: treeData2,
  },
  methods: {
    test : function (arg) {
      console.log(arg);
    },
  },

  beforeMount: function () {
    this.$on('clipboard-success', function (event) {
      var msg = event.action == 'copy' ? 'Copied' : 'Cut';
      window.Moss.toast( msg + ' on clipboard.');
    });
  },
});

/************************************************************
  Aside Menu
*************************************************************/

var docSize = new window.Moss.lib.ElementMeasurer();
var asideMenu = document.querySelector('aside .menu');
if (asideMenu) {
  window.addEventListener('scroll', onScroll);
}

function onScroll() {
  if (docSize.scrollTop > asideMenu.offsetTop) {
    asideMenu.style.position = 'fixed';
    asideMenu.style.top = '45px';
  } else {
    asideMenu.style.position = null;
    asideMenu.style.top = null;
  }
}

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
var Color = window.Moss.lib.Color;

function convertColor(hexToRgb) {
  var inputHex = document.querySelector('#input-hex-color');
  var inputRgb = document.querySelector('#input-rgb-color');

  if (hexToRgb) {
    var color1 = new Color(inputHex.value);
    inputRgb.value = color1.toRgb();
  } else {
    var color2 = new Color(inputRgb.value);
    inputHex.value = color2.toHex(true);
  }
}

function getBrightness() {
  var input = document.querySelector('#input-lightness');
  var value = new Color(input.value).brightness;
  document.querySelector('#output-lightness').innerHTML = 'lightness value: ' + value;
}

function getContrast() {
  var input = document.querySelector('#input-contrast');
  var output = document.querySelector('#output-contrast');
  var color = new Color(input.value);
  var contrast = new Color(color.isLight ? '#333' : '#fff');

  output.style.backgroundColor = input.value;
  output.style.color = contrast.toHex(true);
  output.innerHTML = 'bg-color: ' + color.toRgb() + ' contrast-color: ' + contrast.toRgb();
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
    eu.sort('#sort-list', { items: 'li' });
  });

  // sort table
  if (eu.getElement('#sort-table-target')) {
    eu.sort('#sort-table-target');
  }
})();

/***********************************************************
  SVG
***********************************************************/

(function () {
  var arrowIcon = document.querySelector('#svg-arrow-example');
  if (!arrowIcon) return;

  arrowIcon.innerHTML = window.Moss.lib.Svg.arrowRight;
  arrowIcon.style.transition = 'transform .5s ease-in-out';
  arrowIcon.addEventListener('click', function () {
    if (arrowIcon.style.transform == '') {
      arrowIcon.style.transform = 'rotate(3.25turn)';
    } else {
      arrowIcon.style.transform = '';
    }
  });
})();

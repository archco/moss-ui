import Vue from 'vue';
import Moss from './moss';
import Popper from 'popper.js';

const options = {};

// data for demo.
const treeData = [
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
const treeData2 = [
  {
    name: '<a href="./index.html">MOSS-UI</a>',
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

Vue.use(Moss, options);
window.vm = new Vue({
  el: '#app',
  data: {
    treeData,
    treeData2,
  },
  methods: {
    test(arg) {
      console.log(arg);
    },
  },

  beforeMount() {
    this.$on('clipboard-success', event => {
      let msg = event.action == 'copy' ? 'Copied' : 'Cutted';
      window.Moss.toast(`${msg} on clipboard.`);
    });
  },
});

window.toggle = false;
let btn = document.querySelector('#btn');
let pop = document.querySelector('#popper');
btn.addEventListener('click', e => {
  e.preventDefault();
  pop.style.display = window.toggle ? null : 'none';
  window.toggle = !window.toggle;
});
window.popper = new Popper(btn, pop, {
  placement: 'bottom',
  modifiers: {
    offset: { offset: '2,2' },
    arrow: { element: '[x-arrow]' },
  },
});

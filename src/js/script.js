import Vue from 'vue';
import Moss from './moss';

const options = {};

// data for demo.
const treeData = {
  name: 'MOSS-UI',
  children: [
    { name: 'SCSS' },
    { name: 'Vue' },
    {
      name: 'JS Libraries',
      children: [
        { name: 'Color' },
        { name: 'ElementUtil' },
        { name: 'Util' },
      ],
    },
  ],
};
const treeData2 = {
  name: '<a href="./index.html">MOSS-UI</a>',
  children: [
    { name: '<a href="./scss.html">SCSS</a>' },
    { name: '<a href="./vue.html">Vue</a>' },
    {
      name: '<a href="./js-libraries.html">JS Libraries</a>',
      children: [
        { name: '<a href="./js-libraries.html#color">Color</a>' },
        { name: '<a href="./js-libraries.html#elementutil">ElementUtil</a>' },
        { name: '<a href="./js-libraries.html#util">Util</a>' },
      ],
    },
  ],
};

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
});

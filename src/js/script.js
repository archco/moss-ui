import Vue from 'vue';
import Moss from './moss';

const options = {};

Vue.use(Moss, options);
window.vm = new Vue({
  el: '#app',
  methods: {
    test(arg) {
      console.log(arg);
    },
  },
});

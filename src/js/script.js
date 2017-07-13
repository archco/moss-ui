import Vue from 'vue';
import Cosmos from './cosmos';

const options = {};

Vue.use(Cosmos, options);
window.vm = new Vue({
  el: '#app'
});

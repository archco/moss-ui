import Cosmos from './cosmos';
const Vue = window.Vue;

const options = {};

Vue.use(Cosmos, options);
window.vm = new Vue({
  el: '#app'
});

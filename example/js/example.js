/* eslint-disable no-unused-vars */
import { treeData, treeData2 } from './data/tree';
import * as Partials from './partials';

var options = {};

window.vm = new window.Vue({
  el: '#app',
  data: {
    treeData,
    treeData2,
  },
  methods: {
    test(arg) {
      console.log(arg);
    },

    eventTest(event) {
      console.log(event);
    },
  },

  beforeMount() {
    this.$on('clipboard-success', function (event) {
      var msg = event.action == 'copy' ? 'Copied' : 'Cut';
      window.Moss.toast(msg + ' on clipboard.');
    });
  },
});

for (const fn of Object.values(Partials)) {
  fn();
}

/* eslint-disable no-unused-vars */
import { treeData, treeData2 } from './data/tree';
import collection from './data/collection.json';
import * as Partials from './partials';

const searchOptions = {
  keys: [
    { name: 'name', weight: .5 },
    { name: 'category', weight: .3 },
    { name: 'description', weight: .2 },
  ],
};

window.vm = new window.Vue({
  el: '#app',
  data: {
    treeData,
    treeData2,
    collection,
    searchOptions,
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
    this.$on('clipboard-success', event => {
      const msg = event.action == 'copy' ? 'Copied' : 'Cut';
      window.Moss.toast(`${msg} on clipboard`);
    });
  },
});

window.collection = collection;

for (const fn of Object.values(Partials)) {
  fn();
}

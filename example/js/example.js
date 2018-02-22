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

const { strToKebab } = window.Moss.lib.Util;
const { Color } = window.Moss.lib;

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

    onSearchItemClick({ name, category }) {
      // redirect to
      window.location.href = `${category}.html#${strToKebab(name)}`;
    },

    onSearchSubmit({ result }) {
      if (result.length < 1) return;
      this.onSearchItemClick(result[0]);
    },

    // category badge style of search-result.
    getBadgeStyle(category) {
      // categories: scss, scss-helpers, vue, vue-directives, js-libraries
      const c = {
        scss: '#c69',
        js: '#f5da55',
        vue: '#4fc08d',
      };
      const prefix = /(^\w+)/.exec(category)[1];
      const bgColor = new Color(c[prefix]);
      return {
        marginRight: '.5rem',
        color: bgColor.brightness > 165 ? '#333' : '#fff',
        backgroundColor: bgColor.toHex(true),
      };
    }
  },

  beforeMount() {
    this.$on('clipboard-success', event => {
      const msg = event.action == 'copy' ? 'Copied' : 'Cut';
      window.Moss.toast(`${msg} on clipboard`);
    });
  },
});

// invoke function for partial examples.
for (const fn of Object.values(Partials)) {
  fn();
}

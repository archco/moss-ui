import { treeData, treeData2 } from './data/tree';
import collection from './data/collection.json';
import * as Partials from './partials';

window.Vue.use(window.MossUI.default);

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

    onSearchInputChange({ input, vnode }) {
      // Set suggestions. (Ajax Simulation)
      const suggestions = [
        { name: 'Tim Robbins' },
        { name: 'Tim Burton' },
        { name: 'Tim Tebow' },
      ];
      if (input.toLowerCase() === 'tim') {
        setTimeout(() => {
          vnode.suggestions = suggestions;
        }, 500);
      } else {
        setTimeout(() => {
          vnode.suggestions = [];
        }, 200);
      }
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
    },
  },

  beforeMount() {
    this.$on('clipboard-success', event => {
      const msg = event.action == 'copy' ? 'Copied' : 'Cut';
      window.Moss.toast(`${msg} on clipboard`);
    });
    this.$on('scrollspy-activate', item => {
      console.log(item.elm);
    });
  },
});

// invoke function for partial examples.
for (const fn of Object.values(Partials)) {
  fn();
}

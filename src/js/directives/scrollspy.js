import Scrollspy from '../lib/classes/scrollspy';

/*
  v-scrollspy="{ value }"

  value: {
    linkSelector: 'a',
    scrollElement: 'body', // 'body' | element | selector
    activeTarget: 'parent', // 'parent' | 'self' | selector
    activeClass: 'active',
    offset: 24,
    onActivate: null,
  }
 */
export default {
  name: 'scrollspy',

  inserted(el, binding, vnode) {
    let onActivate = (item) => {
      vnode.context.$root.$emit('scrollspy-activate', item);
    };

    let options = Object.assign({}, { onActivate }, binding.value);
    let scrollspy = new Scrollspy(el, options);

    vnode.context.$root.$on('scrollspy-refresh', () => scrollspy.refresh());
  },
};

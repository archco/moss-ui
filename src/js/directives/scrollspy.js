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
  inserted(el, binding, vnode) {
    const onActivate = item => {
      vnode.context.$root.$emit('scrollspy-activate', item);
      if (binding.value && typeof binding.value.onActivate === 'function') {
        binding.value.onActivate(item);
      }
    };

    const options = Object.assign({}, binding.value, { onActivate });
    const scrollspy = new Scrollspy(el, options);

    vnode.context.$root.$on('scrollspy-refresh', () => scrollspy.refresh());
  },
};

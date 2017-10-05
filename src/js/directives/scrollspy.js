import Scrollspy from '../lib/classes/scrollspy';

/*
  v-scrollspy="{ value }"

  value: {
    selector: 'a',
    activeClass: 'active',
    activeTarget: 'parent', // 'parent' | 'self' | selector
    offset: 24,
    baseElement: 'body', // 'body' | Element | Selector
  }
 */
export default {
  name: 'scrollspy',

  inserted(el, binding, vnode) {
    let scrollspy = new Scrollspy(el, binding.value);
    console.log(scrollspy);

    // TODO: event register to vue. onChange, emitRefresh..
  },
};

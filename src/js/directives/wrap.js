import ElementUtil from '../lib/element-util';

// v-wrap:{className}.{raw}="'{tagName}'"

export default {
  name: 'wrap',
  inserted(el, binding) {
    let className = binding.modifiers.raw
      ? binding.arg
      : `${binding.arg}-wrapper`;
    let tagName = binding.value || 'div';

    ElementUtil.wrap(el, className, tagName);
  },
};

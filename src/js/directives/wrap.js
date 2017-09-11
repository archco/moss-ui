import ElementUtil from '../lib/element-util';

/*
  v-wrap:{arg}.{modifiers}="'{value}'"

  arg: class name. It is auto convert. e.g.) item -> item-wrapper
  modifiers:
    raw: If this given, it does not convert class name.
  value: {String} Tag name of wrapper. default value is 'div'.
 */
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

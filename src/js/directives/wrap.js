import ElementUtil from 'element-util';

/*
  v-wrap:{arg}.{modifiers}="'{value}'"

  arg: class name. It is auto convert. e.g.) item -> item-wrapper
  modifiers:
    raw: If this given, it does not convert class name.
  value: {String} Tag name of wrapper. default value is 'div'.
 */
export default {
  inserted(el, binding) {
    const className = binding.modifiers.raw
      ? binding.arg
      : `${binding.arg}-wrapper`;
    const tagName = binding.value || 'div';

    ElementUtil.wrap(el, className, tagName);
  },
};

/*
  This directive is based on clipboard.js
  @link https://github.com/zenorocha/clipboard.js
  @license MIT License © Zeno Rocha
 */
import Clipboard from 'clipboard';
import ElementUtil from 'element-util';

/*
  v-clipboard.{modifiers}:{arg}="value"

  modifiers: copy or cut.
  arg: event name when success.
  value: String | Object.

  value = {
    text: '',
    target: '',
    callback: fn,
  }
 */
export default {
  bind(el, binding, vnode) {
    const options = resolveOptionsForClipboard(binding);
    const clipboard = new Clipboard(el, options);
    const eventName = binding.arg || 'clipboard-success';

    clipboard.on('success', event => {
      vnode.context.$root.$emit(eventName, event);

      if (typeof binding.value === 'object'
        && typeof binding.value.callback === 'function') {
        binding.value.callback(event);
      }
    });
  },
};

function resolveOptionsForClipboard(binding) {
  const options = {
    action: () => binding.modifiers.cut ? 'cut' : 'copy',
  };

  if (typeof binding.value === 'string') {
    options.text = () => binding.value;
  } else if (typeof binding.value === 'object') {
    if (binding.value.text) options.text = () => binding.value.text;
    if (binding.value.target) {
      options.target = () => ElementUtil.getElement(binding.value.target);
    }
  }

  return options;
}

/*
  This directive is based on clipboard.js
  @link https://github.com/zenorocha/clipboard.js
 */
import Clipboard from 'clipboard';
import ElementUtil from '../lib/element-util';

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
  name: 'clipboard',

  bind(el, binding, vnode) {
    let options = resolveOptionsOfClipboard(binding);
    let clipboard = new Clipboard(el, options);
    let eventName = binding.arg || 'clipboard-success';

    clipboard.on('success', event => {
      vnode.context.$root.$emit(eventName, event);

      if (typeof binding.value === 'object'
        && typeof binding.value.callback === 'function') {
        binding.value.callback(event);
      }
    });
  },
};

function resolveOptionsOfClipboard(binding) {
  let options = {
    action() {
      return (binding.modifiers.cut) ? 'cut' : 'copy';
    },
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

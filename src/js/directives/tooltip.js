import Tooltip from 'tooltip.js';

/*
  v-tooltip:{arg}="'{value}'"

  arg: direction. top (default) | right | bottom | left
  value: {String} tooltip label.
 */
export default {
  name: 'tooltip',
  inserted(el, binding) {
    new Tooltip(el, parseOption(binding));
  },
};

function getDefaultOption() {
  return {
    placement: 'auto',
    title: '',
    template: `<div class="tooltip with-arrow" role="tooltip"><div class="tooltip-arrow" x-arrow></div><div class="tooltip-inner"></div></div>`, // jscs:ignore maximumLineLength
    offset: '1px,1px',
  };
}

function parseOption(binding) {
  let option = {};

  // arg: placement.
  if (binding.arg) option.placement = binding.arg;

  // modifiers: trigger - [hover]|focus|click|manual
  let mods = Object.keys(binding.modifiers);
  if (mods.length) {
    option.trigger = mods.join(' ');
  }

  // value: (object) option or (string) title.
  if (typeof binding.value === 'object') {
    option = binding.value;
  } else {
    option.title = binding.value;
  }

  return Object.assign(getDefaultOption(), option);
}

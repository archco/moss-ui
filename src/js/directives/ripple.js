import { MooColor } from 'moo-color';
import ElementMeasurer from 'element-measurer';

export default {
  name: 'ripple',

  bind(el, binding) {
    el.classList.add('ripple');

    el.addEventListener('click', e => {
      let offset = new ElementMeasurer(el).getOffset();
      let xPos = e.pageX - offset.left;
      let yPos = e.pageY - offset.top;
      let div = document.createElement('div');
      let size = getShortLength(el);

      div.classList.add('ripple-effect');
      div.style.width = `${size}px`;
      div.style.height = `${size}px`;
      div.style.top = `${yPos - (size / 2)}px`;
      div.style.left = `${xPos - (size / 2)}px`;
      div.style.backgroundColor = getRippleColor(el, binding);
      el.appendChild(div);

      window.setTimeout(() => div.remove(), 1500);
    });
  },
};

function getShortLength(elm) {
  let width = elm.getBoundingClientRect().width;
  let height = elm.getBoundingClientRect().height;
  return width < height ? width : height;
}

function getRippleColor(el, binding) {
  let opt = binding.value || {};
  let mod = binding.modifiers;
  let getContrastColor = elm => {
    let style = window.getComputedStyle(elm);
    let color = new MooColor(style.backgroundColor);
    return color.isLight ? '#000' : '#fff';
  };

  return opt.color ? opt.color
    : mod.light ? '#fff'
    : mod.dark ? '#000'
    : getContrastColor(el);
}

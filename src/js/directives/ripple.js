import { MooColor } from 'moo-color';
import ElementMeasurer from 'element-measurer';

/*
  v-ripple.{modifiers}="{value}"

  modifiers: [auto] or light or dark
  value: {
    color: '#fff' // ripple color.
  }
 */
export default {
  bind(el, binding) {
    el.classList.add('ripple');

    el.addEventListener('click', e => {
      const offset = new ElementMeasurer(el).getOffset();
      const xPos = e.pageX - offset.left;
      const yPos = e.pageY - offset.top;
      const div = document.createElement('div');
      const size = getShortLength(el);

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
  const width = elm.getBoundingClientRect().width;
  const height = elm.getBoundingClientRect().height;
  return width < height ? width : height;
}

function getRippleColor(el, binding) {
  const opt = binding.value || {};
  const mod = binding.modifiers;
  const getContrastColor = elm => {
    const style = window.getComputedStyle(elm);
    const color = new MooColor(style.backgroundColor);
    return color.isLight ? '#000' : '#fff';
  };

  return opt.color ? opt.color
    : mod.light ? '#fff'
    : mod.dark ? '#000'
    : getContrastColor(el);
}

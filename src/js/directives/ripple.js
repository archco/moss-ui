import Color from '../lib/color';

export default {
  name: 'ripple',

  bind(el, binding) {
    el.classList.add('ripple');

    el.addEventListener('click', e => {
      // FIXME: el.offsetLeft가 아닌 전체 document와의 offset 수치가 필요함.
      let xPos = e.pageX - el.offsetLeft;
      let yPos = e.pageY - el.offsetTop;
      let div = document.createElement('div');
      let size = getShortLength(el);

      div.classList.add('ripple-effect');
      div.style.width = `${size}px`;
      div.style.height = `${size}px`;
      div.style.top = `${yPos - (size / 2)}px`;
      div.style.left = `${xPos - (size / 2)}px`;

      // set ripple color.
      // TODO: rgba색일 경우의 처리를 고려해보자.
      div.style.backgroundColor = getRippleColor(el, binding);

      el.appendChild(div);
      window.setTimeout(() => div.remove(), 1500);
    });
  },
};

function getShortLength(elm) {
  let width = elm.scrollWidth;
  let height = elm.scrollHeight;
  return width < height ? width : height;
}

function getContrastColor(elm) {
  let style = window.getComputedStyle(elm);
  let color = new Color(style.backgroundColor);
  return color.contrast();
}

function getRippleColor(el, binding) {
  let opt = binding.value || {};
  let mod = binding.modifiers;

  return opt.color ? opt.color
    : mod.light ? '#fff'
    : mod.dark ? '#000'
    : getContrastColor(el);
}

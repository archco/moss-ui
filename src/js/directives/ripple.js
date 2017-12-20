export default {
  name: 'ripple',

  inserted(el) {
    el.addEventListener('click', e => {
      let xPos = e.pageX - el.offsetLeft;
      let yPos = e.pageY - el.offsetTop;
      let div = document.createElement('div');
      let size = getShortLength(el);

      el.classList.add('ripple');
      div.classList.add('ripple-effect');
      el.appendChild(div);
      div.style.width = `${size}px`;
      div.style.height = `${size}px`;
      div.style.top = `${yPos - (size / 2)}px`;
      div.style.left = `${xPos - (size / 2)}px`;
      window.setTimeout(() => div.remove(), 2000);
    });
  },
};

function getShortLength(elm) {
  let width = elm.getBoundingClientRect().width;
  let height = elm.getBoundingClientRect().height;
  return width < height ? width : height;
}

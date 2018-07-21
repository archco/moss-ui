// information
export function information() {
  const elms = document.querySelectorAll('.moss-version');
  for (const elm of elms) {
    elm.innerHTML = window.Moss.version
  }
  document.querySelector('#copyright-year').innerHTML = new Date().getFullYear();
}

// aside menu.
export function asideMenu() {
  const ElementMeasurer = window.Moss.lib.ElementMeasurer;
  const asideMenu = document.querySelector('aside.sidebar');
  if (!asideMenu) return;

  const docSize = new ElementMeasurer();
  const headerSize = new ElementMeasurer('#app > header');
  const navSize = new ElementMeasurer('#app > nav');
  const footerSize = new ElementMeasurer('#app > footer.footer');

  const headerHeight = headerSize.scrollHeight;
  const navHeight = navSize.scrollHeight;
  const footerHeight = footerSize.scrollHeight;

  const onScroll = () => {
    if (docSize.scrollTop < headerHeight) {
      asideMenu.style.top = `${headerHeight + navHeight}px`;
      asideMenu.style.height = `calc(100vh - ${headerHeight + navHeight}px)`;
    } else {
      asideMenu.style.top = `${navHeight}px`;
      asideMenu.style.height = `calc(100vh - ${navHeight}px)`;
    }

    if (docSize.scrollTop >= docSize.maxScrollTop - footerHeight) {
      asideMenu.style.height = `calc(100vh - ${navHeight + footerHeight}px)`;
    }
  };

  window.addEventListener('scroll', onScroll);
  onScroll();
}

// toast.
export function toast() {
  let toastCount = 0;
  window.toastShow = () => {
    window.Moss.toast('toast test ' + toastCount);
    toastCount++;
  };
}

// message-box
export function messageBox() {
  window.showMessage = () => {
    var text = document.querySelector('#input-msg').value || 'empty';
    var status = document.querySelector('#select-msg').value;
    window.Moss.messageBox.add(text, status);
  };
}


// Color library.
export function colorLibrary() {
  const Color = window.Moss.lib.Color;

  window.convertColor = (hexToRgb) => {
    const inputHex = document.querySelector('#input-hex-color');
    const inputRgb = document.querySelector('#input-rgb-color');

    if (hexToRgb) {
      inputRgb.value = new Color(inputHex.value).toRgb();
    } else {
      inputHex.value = new Color(inputRgb.value).toHex(true);
    }
  }

  window.getBrightness = () => {
    const input = document.querySelector('#input-lightness');
    const value = new Color(input.value).brightness;
    document.querySelector('#output-lightness').innerHTML = 'lightness value: ' + value;
  }

  window.getContrast = () => {
    const input = document.querySelector('#input-contrast');
    const output = document.querySelector('#output-contrast');
    const color = new Color(input.value);
    const contrast = new Color(color.isLight ? '#333' : '#fff');

    output.style.backgroundColor = input.value;
    output.style.color = contrast.toHex(true);
    output.innerHTML = `bg-color: ${color.toRgb()} contrast-color: ${contrast.toRgb()}`;
  }
}

// ElementUtil
export function elementUtil() {
  const eu = window.Moss.lib.ElementUtil;

  // toggle class
  eu.addListener('#btn-toggle-class', 'click', () => {
    console.log('click');
    eu.toggleClass('#toggle-class-target', 'bg-color-danger');
  });

  // toggle show
  eu.addListener('#btn-toggle-show', 'click', () => {
    eu.toggleShow('#toggle-show-target');
  });

  // filter list
  eu.addListener('#input-filter-list', 'keyup', (e) => {
    eu.filter('#filter-list li', e.currentTarget.value, { action: 'hideOthers' });
  });

  eu.addListener('#btn-sort-list', 'click', () => {
    eu.sort('#sort-list', { items: 'li' });
  });

  // sort table
  if (eu.getElement('#sort-table-target')) {
    eu.sort('#sort-table-target');
  }
}

// SVG icons.
export function arrowIcon() {
  const arrowIcon = document.querySelector('#svg-arrow-example');
  if (!arrowIcon) return;

  arrowIcon.innerHTML = window.Moss.lib.Svg.arrowRight;
  arrowIcon.style.transition = 'all .5s ease-in-out';
  arrowIcon.addEventListener('click', () => {
    if (arrowIcon.style.transform == '') {
      arrowIcon.style.transform = 'rotate(3.25turn)';
      arrowIcon.style.color = '#f80';
    } else {
      arrowIcon.style.transform = '';
      arrowIcon.style.color = '';
    }
  });
}

export function caretIcon() {
  const caretIcon = document.querySelector('#svg-caret-example');
  if (!caretIcon) return;

  caretIcon.innerHTML = window.Moss.lib.Svg.caretDown;
  caretIcon.style.transition = 'all .2s ease-out';
  caretIcon.addEventListener('click', () => {
    if (caretIcon.style.transform == '') {
      caretIcon.style.transform = 'scale(2, 0.5) rotate(0.5turn)';
      caretIcon.style.color = 'aqua';
    } else {
      caretIcon.style.transform = '';
      caretIcon.style.color = '';
    }
  });
}

export function closeIcon() {
  const closeIcon = document.querySelector('#svg-close-example');
  if (!closeIcon) return;

  closeIcon.innerHTML = window.Moss.lib.Svg.close;
  closeIcon.style.transition = 'color .2s ease-out';
  closeIcon.style.animation = '3s linear infinite spin';
  closeIcon.addEventListener('mouseover', () => {
    closeIcon.style.animationDuration = '0.5s';
    closeIcon.style.color = '#32cd32';
  });

  closeIcon.addEventListener('mouseleave', () => {
    closeIcon.style.animationDuration = '3s';
    closeIcon.style.color = '';
  });
}

export function centeringDropdownBox() {
  const scrollTo = window.Moss.lib.Util.scrollTo;
  const dropdownBox = document.querySelector('#dropdown-box-1');
  if (!dropdownBox) return;

  scrollTo([150, 150], {
    base: dropdownBox,
    duration: 0,
  });
}

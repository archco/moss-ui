import {
  getSvgByName,
  makeIcon,
  makeIconHtml,
} from '../src/js/lib/methods/icon';

describe('#getSvgByName', () => {
  it('should be works.', () => {
    const svg = getSvgByName('arrow-up');
    expect(svg).toBeTruthy();
    expect(typeof svg).toEqual('string');
  });

  it('returns empty string when given icon name is wrong.', () => {
    expect(getSvgByName('not-icon')).toEqual('');
  });
});

describe('#makIcon', () => {
  it('should be works.', () => {
    const icon = makeIcon('caret-up');
    expect(icon instanceof HTMLElement).toBeTruthy();
    expect(icon.classList.contains('moss-icon')).toBeTruthy();
    expect(icon.innerHTML).toBeTruthy();
  });
});

describe('#makeIconHtml', () => {
  it('should be works.', () => {
    const html = makeIconHtml('close');
    const div = document.createElement('div');
    div.innerHTML = html;

    expect(html).toBeTruthy();
    expect(div.children[0].tagName).toEqual('I');
    expect(div.children[0].classList.contains('moss-icon')).toBeTruthy();
  });
});

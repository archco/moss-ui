import expect from 'expect';
import { mount } from '@vue/test-utils';
import CloseButton from '../../src/js/components/close-button.vue';

describe('#CloseButton', function () {
  it('mount', function () {
    const wrapper = mount(CloseButton, {
      propsData: {
        position: 'top-right',
      },
      attachToDocument: true,
    });
    const elm = wrapper.element;
    expect(elm.classList.contains('close-button')).toBe(true);
    expect(elm.classList.contains('at-corner')).toBe(true);
  });

  it('closeable.', function () {
    const wrapper = mount(CloseButton, {
      attachToDocument: true,
    });
    const elm = wrapper.element;
    const mockElm = document.createElement('div');
    document.documentElement.appendChild(mockElm);
    mockElm.appendChild(elm);
    wrapper.trigger('click');
    expect(mockElm.style.display).toBe('none');
  });
});

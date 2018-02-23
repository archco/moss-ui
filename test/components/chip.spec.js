import expect from 'expect';
import { mount } from '@vue/test-utils';
import Chip from '../../src/js/components/chip.vue';

describe('#Chip', () => {
  let wrapper;

  it('set tag and text.', () => {
    wrapper = mount(Chip, {
      propsData: {
        tag: 'span',
      },
      slots: {
        default: 'chip test',
      }
    });
    expect(wrapper.element.tagName).toBe('SPAN');
    expect(wrapper.element.textContent).toBe('chip test');
  });

  it('color test.', () => {
    wrapper = mount(Chip, {
      propsData: {
        color: '#333',
      },
      slots: {
        default: 'chip test',
      }
    });
    const style = window.getComputedStyle(wrapper.element);
    expect(style.backgroundColor).toEqual('rgb(51, 51, 51)');
    expect(style.color).toEqual('rgb(255, 255, 255)');
  });

  it('closeable.', () => {
    wrapper = mount(Chip, {
      propsData: {
        closeable: true,
      },
      slots: {
        default: 'chip test',
      }
    });
    expect(wrapper.contains('button')).toBe(true);
    const c = wrapper.find('button');
    expect(c.element.classList.contains('close-button')).toBe(true);
  });
});

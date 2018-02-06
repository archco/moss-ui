import expect from 'expect';
import { mount } from '@vue/test-utils';
import Dropdown from '../../src/js/components/dropdown.vue';

const slots = {
  button: `<button class="reference">dropdown</button>`,
  default: `
    <a href="#" class="dropdown-item">Item 01</a>
    <a href="#" class="dropdown-item">Item 02</a>
    <a href="#" class="dropdown-item">Item 03</a>
  `,
}
const fakePopper = {
  constructor: () => {},
  scheduleUpdate: () => {},
};

describe('#Dropdown', () => {
  it('mount', () => {
    const wrapper = mount(Dropdown, {
      slots: slots,
    });
    const elm = wrapper.element;
    expect(elm.classList.contains('dropdown')).toBe(true);
    expect(elm.querySelector('.dropdown-content').children.length).toBe(3);
  });

  it('button click for content toggling.', () => {
    const wrapper = mount(Dropdown, {
      slots: slots,
    });
    // mock.
    wrapper.vm.$data.pop = fakePopper;

    const content = wrapper.element.querySelector('.dropdown-content');
    expect(content.classList.contains('show')).toBe(false);
    wrapper.find('button.reference').trigger('click');
    expect(content.classList.contains('show')).toBe(true);
  });
});

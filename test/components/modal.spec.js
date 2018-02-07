import expect from 'expect';
import { mount } from '@vue/test-utils';
import Modal from '../../src/js/components/modal.vue';

describe('#Modal', () => {
  it('mount.', () => {
    const wrapper = mount(Modal, {
      propsData: {
        name: 'test-modal',
        title: 'TEST',
      },
      slots: {
        default: `<p>Modal contents</p>`,
      },
      attachToDocument: true,
    });
    document.documentElement.appendChild(wrapper.element);
    expect(wrapper.find('.modal-content')).toBeTruthy();
  });
});

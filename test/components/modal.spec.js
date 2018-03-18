import { mount } from '@vue/test-utils';
import Modal from '../../src/js/components/modal.vue';

describe('#Modal', () => {
  const wrapper = mount(Modal, {
    propsData: {
      name: 'test-modal',
      title: 'TEST',
    },
    slots: {
      default: `
      <p>Modal contents</p>
      <button id="closeBtn" data-toggle="close">close</button>
      `,
    },
    attachToDocument: true,
  });
  document.documentElement.appendChild(wrapper.element);

  it('mount.', () => {
    expect(wrapper.find('.modal-content')).toBeTruthy();
    expect(wrapper.vm.show).toBe(false);
    expect(wrapper.vm.name).toBe('test-modal');
  });

  it('modal open.', (done) => {
    wrapper.vm.toggleModal('test-modal', 'show');
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.show).toBe(true);
      done();
    });
  });

  it('close modal by "data-toggle=close" button.', (done) => {
    wrapper.find('#closeBtn').trigger('click');
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.show).toBe(false);
      done();
    });
  });
});

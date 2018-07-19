import { shallowMount as mount } from '@vue/test-utils';
import Modal from '../../src/js/components/modal.vue';
import flushPromises from 'flush-promises';

describe('#Modal', () => {
  const wrapper = mount(Modal, {
    propsData: {
      name: 'test-modal',
      title: 'TEST',
    },
    slots: {
      default: [
        '<p>Modal contents</p>',
        '<button id="closeBtn" data-toggle="close">close</button>'
      ],
    },
    mocks: {
      $moss: {
        modal: {
          opened: [],
        },
      },
    },
    attachToDocument: true,
  });
  document.documentElement.appendChild(wrapper.element);

  it('mount.', () => {
    expect(wrapper.find('.modal-content')).toBeTruthy();
    expect(wrapper.vm.show).toBe(false);
    expect(wrapper.vm.name).toBe('test-modal');
  });

  it('modal open.', async () => {
    wrapper.vm.toggleModal('test-modal', 'show');
    await flushPromises();
    expect(wrapper.vm.show).toBe(true);
  });

  it('close modal by "data-toggle=close" button.', async () => {
    wrapper.find('#closeBtn').trigger('click');
    await flushPromises();
    expect(wrapper.vm.show).toBe(false);
  });

  it('will be emitted `state` event when state changed.', async () => {
    wrapper.vm.toggleModal('test-modal', 'show');
    await flushPromises();
    expect(wrapper.emitted('state')).toBeTruthy();
    expect(wrapper.emitted('state')[0]).toEqual([true]);
  });

  it('can set custom header.', () => {
    const wrapper2 = mount(Modal, {
      propsData: {
        name: 'test2',
        title: 'TEST',
      },
      slots: {
        header: `
        <h4>MY TITLE</h4>
        `,
        default: [
          '<p>Modal contents</p>',
          '<button id="closeBtn" data-toggle="close">close</button>',
        ],
      },
      attachToDocument: true,
    });
    const header = wrapper2.vm.$slots.header;
    expect(header.length).toBe(1);
    expect(header[0].elm.tagName).toEqual('H4');
    expect(header[0].elm.textContent).toEqual('MY TITLE');
  });
});

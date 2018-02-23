import expect from 'expect';
import { mount } from '@vue/test-utils';
import Message from '../../src/js/components/message.vue';

describe('#Message', () => {
  it('mount.', () => {
    const wrapper = mount(Message, {
      slots: {
        default: 'message.',
      },
      attachToDocument: true,
    });
    const div = document.createElement('div');
    div.appendChild(wrapper.element);
    document.documentElement.appendChild(div);
    expect(wrapper.element.classList.contains('message')).toBe(true);
  });

  it('sets status.', () => {
    const wrapper = mount(Message, {
      propsData: {
        status: 'warning',
      },
      slots: {
        default: 'message.',
      },
      attachToDocument: true,
    });
    const div = document.createElement('div');
    div.appendChild(wrapper.element);
    document.documentElement.appendChild(div);
    expect(wrapper.element.classList.contains('warning')).toBe(true);
  });
});

import { shallowMount } from '@vue/test-utils';
import MessageBox from '../../src/js/components/message-box.vue';

describe('#MessageBox', () => {
  const wrapper = shallowMount(MessageBox, {
    attachToDocument: true,
  });
  const getMessage = index => wrapper.vm.messages[index];

  beforeAll(() => {
    document.documentElement.appendChild(wrapper.element);
  });

  it('mount.', () => {
    expect(wrapper.vm.messages.length).toBe(0);
  });

  it('adds new message.', () => {
    wrapper.vm.add('new message.');
    expect(wrapper.vm.messages.length).toBe(1);
    expect(getMessage(0).status).toEqual('default');
    wrapper.vm.add('error message.', 'error');
    expect(getMessage(1).status).toEqual('error');
    for (let i = 0; i < 8; i++) {
      wrapper.vm.add('message');
    }
    expect(wrapper.vm.messages.length).toBe(10);
  });

  it('remove a message.', () => {
    const targetId = 3
    expect(wrapper.vm.messages.findIndex(m => m.id === targetId)).toEqual(3); // auto increment.
    wrapper.vm.remove(targetId);
    expect(wrapper.vm.messages.findIndex(m => m.id === targetId)).toEqual(-1);
  });

  it('clear all messages.', () => {
    wrapper.vm.clear();
    expect(wrapper.vm.messages.length).toEqual(0);
  });
});

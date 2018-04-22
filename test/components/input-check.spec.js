import { mount } from '@vue/test-utils';
import InputCheck from '../../src/js/components/input-check.vue';

describe('#InputCheck', () => {
  const wrapper = mount(InputCheck, {
    propsData: {
      name: 'test',
      value: 'ok',
    },
    slots: {
      default: 'is test?',
    }
  });

  it('mount.', () => {
    expect(wrapper.find('input').attributes().name).toBe('test');
  });

  it('toggle test.', () => {
    expect(wrapper.find('input').element.checked).toBe(false);
    wrapper.setProps({ checked: true });
    expect(wrapper.find('input').element.checked).toBe(true);
  });
});

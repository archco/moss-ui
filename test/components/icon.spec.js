import { mount } from '@vue/test-utils';
import Icon from '@/components/icon.vue';

describe('#Icon', () => {
  it('should can mount.', () => {
    const wrapper = mount(Icon, {
      propsData: {
        name: 'caret-down'
      }
    });
    expect(wrapper.element).toBeTruthy();
    expect(wrapper.element.classList.contains('moss-icon')).toBeTruthy();
  });
});

import { shallowMount } from '@vue/test-utils';
import NavDrawer from '../../src/js/components/nav-drawer.vue';

// mock method.
jest.mock('element-util', () => {
  return {
    addOuterListener: jest.fn(),
  };
});

describe('#NavDrawer', () => {
  it('mount.', () => {
    const wrapper = shallowMount(NavDrawer, {
      propsData: {
        id: 'drawer01',
      },
      slots: {
        default: `<div class="nav-drawer-body">...</div>`,
      }
    });
    expect(wrapper).toBeTruthy();
    expect(wrapper.vm.$refs.collapse).toBeTruthy();
  });
});

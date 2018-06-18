import { shallowMount } from '@vue/test-utils';
import Tabs from '../../src/js/components/tabs.vue';
import Tab from '../../src/js/components/tab.vue';

describe('#Tabs', () => {
  const wrapper = shallowMount(Tabs, {
    slots: {
      default: [
        '<tab name="tab1" selected>tab 1 content</tab>',
        '<tab name="tab2">tab 2 content</tab>',
        '<tab name="tab3">tab 3 content</tab>',
      ],
    },
    stubs: {
      tab: Tab,
    }
  });

  it('should mount.', () => {
    expect(wrapper.vm.tabs.length).toBe(3);

    // NOTE: Can not access to data of the stubbed child component.
    // https://vue-test-utils.vuejs.org/guides/common-tips.html#shallow-rendering
    // expect(wrapper.vm.tabs[0].isActive).toBe(true);
    // expect(wrapper.vm.tabs[2].name).toEqual('tab3');
  });

  it('change tab by click.', () => {
    wrapper.find('ul.tabs > li:nth-child(3) > a').trigger('click');
    const tabSelectedEvent = wrapper.emitted('tab-selected');
    expect(tabSelectedEvent).toBeTruthy();

    // NOTE: Can not access to data of the stubbed child component.
    // expect(tabSelectedEvent[0][0]).toEqual(wrapper.vm.tabs[2]);
  });
});

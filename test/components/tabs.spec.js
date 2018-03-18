import { shallow } from '@vue/test-utils';
import Tabs from '../../src/js/components/tabs.vue';

function makeTab(name, content, selected = false) {
  return `
  <tab name="${name}" ${selected ? 'selected' : ''}>
    <p>${content}</p>
  </tab>
  `
}

describe('#Tabs', () => {
  const wrapper = shallow(Tabs, {
    slots: {
      default: `
      ${makeTab('tab1', 'content', true)}
      ${makeTab('tab2', 'content')}
      ${makeTab('tab3', 'content')}
      `,
    }
  });

  it('shallow.', () => {
    expect(wrapper.vm.tabs.length).toBe(3);
    expect(wrapper.vm.tabs[2].name).toEqual('tab3');
  });

  it('change tab by click.', () => {
    wrapper.find('ul.tabs > li:nth-child(3) > a').trigger('click');
    expect(wrapper.vm.tabs[0].isActive).toBe(false);
    expect(wrapper.vm.tabs[2].isActive).toBe(true);
  });
});

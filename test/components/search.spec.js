import expect from 'expect';
import { mount } from '@vue/test-utils';
import Search from '../../src/js/components/search.vue';
import collection from '../../example/js/data/collection.json';

const fakePopper = {
  constructor: () => {},
  scheduleUpdate: () => {},
};

describe('#Search', () => {
  const wrapper = mount(Search, {
    propsData: {
      collection,
      searchOptions: {
        keys: ['name', 'category'],
      },
    }
  });
  wrapper.vm.$data.popper = fakePopper;

  it('Returns fuzzy search result as array.', () => {
    wrapper.vm.search('grid');
    expect(Array.isArray(wrapper.vm.result)).toBe(true);
    expect(wrapper.vm.result.length > 0).toBe(true);
  });

  it('result-limit option will slice result.', () => {
    wrapper.setProps({ resultLimit: 5 });
    wrapper.vm.search('scss'); // no-limit: 18 hits.
    expect(wrapper.vm.result.length).toBe(5);
  });
});

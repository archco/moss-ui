import { shallowMount } from '@vue/test-utils';
import flushPromises from 'flush-promises';
import Search from '../../src/js/components/search.vue';
import collection from '../../example/js/data/collection.json';

const fakePopper = {
  constructor: () => {},
  scheduleUpdate: () => {},
};

describe('#Search', () => {
  const wrapper = shallowMount(Search, {
    propsData: {
      collection,
      searchOptions: {
        keys: ['name', 'category'],
      },
    }
  });
  wrapper.vm.$data.popper = fakePopper;

  it('Returns fuzzy search result as array.', (done) => {
    wrapper.vm.$data.input = 'grid';
    wrapper.vm.$nextTick().then(() => {
      expect(Array.isArray(wrapper.vm.result)).toBe(true);
      expect(wrapper.vm.result.length > 0).toBe(true);
      done();
    });
  });

  it('result-limit option will slice result.', (done) => {
    wrapper.setProps({ resultLimit: 5 });
    wrapper.vm.$data.input = 'scss'; // no-limit: 18 hits.
    wrapper.vm.$nextTick().then(() => {
      expect(wrapper.vm.result.length).toBe(5);
      done();
    });
  });

  describe('#Set suggestions.', () => {
    const wrapper = shallowMount(Search, {
      propsData: {
        // no-collection. -> not use fuse.js
      }
    });
    wrapper.vm.$data.popper = fakePopper;

    it('`input-change` event.', async () => {
      wrapper.vm.$data.input = 'test';
      await flushPromises();
      expect(wrapper.emitted('input-change')).toBeTruthy();
      const [inputData] = wrapper.emitted('input-change')[0];
      expect(inputData.input).toEqual('test');
    });

    it('set data `suggestions`.', async () => {
      wrapper.setData({
        suggestions: [
          { name: 'test-1' },
          { name: 'test-2' },
          { name: 'test-3' },
        ]
      });

      await flushPromises();

      expect(wrapper.vm.result.length).toBe(3);
      expect(wrapper.vm.$data.showResult).toBe(true);
    });
  });
});

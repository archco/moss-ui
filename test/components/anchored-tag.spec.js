import expect from 'expect';
import { mount } from '@vue/test-utils';
import AnchoredTag from '../../src/js/components/anchored-tag.vue';

describe('#AnchoredTag', function () {
  it('set tag and text.', function () {
    const wrapper = mount(AnchoredTag, {
      propsData: {
        tag: 'h1',
        owned: true,
      },
      slots: {
        default: 'Hello',
      }
    });
    expect(wrapper.props().tag).toBe('h1');
    expect(wrapper.element.tagName).toBe('H1');
    expect(wrapper.element.textContent).toBe('Hello');
  });
});

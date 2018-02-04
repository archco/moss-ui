import expect from 'expect';
import { shallow } from '@vue/test-utils';
import AnchoredTag from '../src/js/components/anchored-tag.vue';

describe('anchored-tag.vue', function () {
  it('', function () {
    const wrapper = shallow(AnchoredTag, {
      propsData: {
        tag: 'h1',
        owned: true,
      },
      slots: {
        default: 'Hello',
      }
    });
    expect(wrapper.props().tag).toBe('h1');
  });
});

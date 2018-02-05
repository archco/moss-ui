import expect from 'expect';
import { mount } from '@vue/test-utils';
import Collapse from '../../src/js/components/collapse.vue';

describe('#Collapse', function () {
  it('mount.', function () {
    const wrapper = mount(Collapse, {
      propsData: {
        id: 'test-target',
      },
      slots: {
        default: `<p class="description">Hello world</p>`,
      }
    });
    const elm = wrapper.element;
    expect(elm.tagName).toBe('DIV');
    expect(elm.style.display).toBe('none');
    expect(elm.children[0].classList.contains('description')).toBe(true);
  });

  it('expanded prop test.', function () {
    const wrapper = mount(Collapse, {
      propsData: {
        id: 'test-target',
        expanded: true,
      },
      slots: {
        default: `<p class="description">Hello world</p>`,
      }
    });
    expect(wrapper.props().expanded).toBe(true);
    expect(wrapper.element.style.display).not.toBe('none');
  });

  it('toggle by event emit.', function () {
    const wrapper = mount(Collapse, {
      propsData: {
        id: 'test-target',
      },
      slots: {
        default: `<p class="description">Hello world</p>`,
      }
    });
    wrapper.vm.$root.$emit('collapse-toggle', 'test-target');
    const toggleEvent = wrapper.emitted()['collapse-toggle'];
    expect(toggleEvent).toBeTruthy();
    expect(toggleEvent[0]).toEqual(['test-target']);
  });
});

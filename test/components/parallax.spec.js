import { mount } from '@vue/test-utils';
import Parallax from '../../src/js/components/parallax.vue';

describe('#Parallax', () => {
  it('mount.', () => {
    const wrapper = mount(Parallax, {
      propsData: {
        src: '../image.jpg',
        height: '400px',
      },
      attachToDocument: true,
    });
    const elm = wrapper.element;
    expect(elm.style.backgroundImage).toEqual(`url(../image.jpg)`);
    expect(elm.style.height).toEqual('400px');
  });
});

import expect from 'expect';
import { mount } from '@vue/test-utils';
import InputRadio from '../../src/js/components/input-radio.vue';

describe('#InputRadio', () => {
  const r1 = mount(InputRadio, {
    propsData: {
      name: 'test',
      value: 'first',
      attachToDocument: true,
      checked: true,
    },
    slots: {
      default: 'radio 1',
    }
  });
  const r2 = mount(InputRadio, {
    propsData: {
      name: 'test',
      value: 'second',
      attachToDocument: true,
    },
    slots: {
      default: 'radio 2',
    }
  });
  const r3 = mount(InputRadio, {
    propsData: {
      name: 'test',
      value: 'third',
      attachToDocument: true,
    },
    slots: {
      default: 'radio 3',
    }
  });
  const getCheck = w => w.find('input').element.checked;

  beforeEach(() => {
    [r1, r2, r3].forEach(w => {
      document.documentElement.appendChild(w.element);
    });
  });

  it('mount.', () => {
    expect(getCheck(r1)).toBe(true);
  });

  it('if turns on a radio, others turn off.', () => {
    r2.setProps({ checked: true });
    expect(getCheck(r1)).toBe(false);
    expect(getCheck(r2)).toBe(true);
    expect(getCheck(r3)).toBe(false);
  });
});

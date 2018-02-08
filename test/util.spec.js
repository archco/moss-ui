import expect from 'expect';
import * as Util from '../src/js/lib/util';

describe('Util', () => {
  it('is object', () => {
    expect(typeof Util).toBe('object');
  });

  describe('#isContains', () => {
    it('Big object contains small object.', () => {
      const big = { a: 1, b: 'string', c: [1, 2, 3] };
      const small = { a: 1, c: [1, 2, 3] };
      expect(Util.isContains(big, small)).toBe(true);
    });

    it('Returns false if not contains.', () => {
      const big = { a: 1, b: 'string', c: [1, 2, 3] };
      const small = { a: 1, d: true };
      expect(Util.isContains(big, small)).toBe(false);
    });
  });

  describe('#isEmpty', () => {
    it('"" is empty.', () => {
      expect(Util.isEmpty('')).toBe(true);
      expect(Util.isEmpty('a')).toBe(false);
    });

    it('{} is empty', () => {
      expect(Util.isEmpty({})).toBe(true);
      expect(Util.isEmpty({ a: 1 })).toBe(false);
    });
  });

  describe('#capitalize', () => {
    it('works.', () => {
      expect(Util.capitalize('hello world')).toBe('Hello World');
      expect(Util.capitalize('HELLO WORLD')).toBe('Hello World');
    });
  });

  describe('#strToCamel', () => {
    it('CamelCase', () => {
      expect(Util.strToCamel('hello-world')).toBe('HelloWorld');
      expect(Util.strToCamel('space case')).toBe('SpaceCase');
    });

    it('can to smallCamel.', () => {
      expect(Util.strToCamel('hello-world', true)).toBe('helloWorld');
    });
  });

  describe('#strToKebab', () => {
    it('works.', () => {
      expect(Util.strToKebab('HelloWorld')).toBe('hello-world');
      expect(Util.strToKebab('space cowboy')).toBe('space-cowboy');
    });
  });
});

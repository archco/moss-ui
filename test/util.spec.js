import expect from 'expect';
import Util from '../src/js/lib/util';

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
});

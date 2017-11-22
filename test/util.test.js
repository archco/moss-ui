var expect = window.chai.expect;
var Util = window.Moss.lib.Util;

describe('Util', () => {
  it('is object', () => {
    expect(Util).to.be.an('object');
  });

  describe('#isContains', () => {
    it('Big object contains small object.', () => {
      let big = { a: 1, b: 'string', c: [1, 2, 3] };
      let small = { a: 1, c: [1, 2, 3] };
      expect(Util.isContains(big, small)).to.be.true;
    });

    it('Returns false if not contains.', () => {
      let big = { a: 1, b: 'string', c: [1, 2, 3] };
      let small = { a: 1, d: true };
      expect(Util.isContains(big, small)).to.be.false;
    });
  });

  describe('#isEmpty', () => {
    it('"" is empty.', () => {
      expect(Util.isEmpty('')).to.be.true;
      expect(Util.isEmpty('a')).to.be.false;
    });

    it('{} is empty', () => {
      expect(Util.isEmpty({})).to.be.true;
      expect(Util.isEmpty({ a: 1 })).to.be.false;
    });
  });
});

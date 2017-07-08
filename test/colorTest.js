import { expect } from 'chai';
import Color from '../src/js/lib/color';

describe('Color library', function() {
  describe('#constructor', function() {
    it('expect to be an instance of Color', function() {
      let color = new Color('#fff');

      expect(color).to.be.an.instanceof(Color);
    });
  });

  describe('#colorToArray', function() {
    let array = Color.colorToArray('#ff8000');

    it('expect to be an array', function() {
      expect(array).to.be.an('array');
    });

    it('expect #ff8000 to deep equal [255,128,0]', function() {
      expect(array).to.deep.equal([255,128,0]);
    });
  });

  describe('#hexToRgb', function() {
    it('expect to be an array', function() {
      expect(Color.hexToRgb('#888')).to.be.an('array');
    });

    it('expect #ffffff to deep equal [255,255,255]', function() {
      expect(Color.hexToRgb('#ffffff')).to.deep.equal([255,255,255]);
    });

    it('expect #fff to deep equal [255,255,255] - shorthand.', function() {
      expect(Color.hexToRgb('#fff')).to.deep.equal([255,255,255]);
    });
  });

  describe('#rgbToHex', function() {
    it('expect to be a string', function() {
      expect(Color.rgbToHex(255, 255, 255)).to.be.a('string');
    });

    it('expect 255,136,0 to equal #ff8800', function() {
      expect(Color.rgbToHex(255, 136, 0)).to.equal('#ff8800');
    });

    it('expect 255,136,0 to equal #f80 - to shorthand.', function() {
      expect(Color.rgbToHex(255, 136, 0, true)).to.equal('#f80');
    });
  });

  describe('#lightness', function() {
    it('expect to be a number', function() {
      expect(Color.lightness('#f00')).to.be.a('number');
      expect(Color.lightness([255,0,0])).to.be.a('number');
    });

    it('expect to be within 0 ~ 255', function() {
      expect(Color.lightness('#000')).to.be.within(0, 255);
      expect(Color.lightness('#fff')).to.be.within(0, 255);
    });
  });

  describe('#contrast', function() {
    it('expect to be a string', function() {
      expect(Color.contrast('#f00')).to.be.a('string');
    });

    it('expect contrast color of #f00 to equal #fff', function() {
      expect(Color.contrast('#f00')).to.be.equal('#fff');
    });
  });
});

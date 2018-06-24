import MossUI, {
  Case,
  Color,
  Components,
  Directives,
  ElementMeasurer,
  ElementUtil,
  Svg,
  Util,
} from '../src/js/moss.js';

describe('#MossUI', () => {
  it('is object that includes `install` method.', () => {
    expect(typeof MossUI).toBe('object');
    expect('install' in MossUI).toBeTruthy();
    expect(typeof MossUI.install).toBe('function');
  });
});

describe('#Case', () => {
  it('should not empty.', () => {
    expect(Case).toBeTruthy();
    expect(Object.values(Case).every(x => typeof x === 'function')).toBeTruthy();
  });
});

describe('#Color', () => {
  it('should not empty.', () => {
    expect(Color).toBeTruthy();
    expect(typeof Color).toBe('function');
  });
});

describe('#Components', () => {
  it('should not empty.', () => {
    expect(Components).toBeTruthy();
    expect(typeof Components).toBe('object');
  });
});

describe('#Directives', () => {
  it('should not empty.', () => {
    expect(Directives).toBeTruthy();
    expect(typeof Directives).toBe('object');
  });
});

describe('#ElementMeasurer', () => {
  it('should not empty.', () => {
    expect(ElementMeasurer).toBeTruthy();
    expect(typeof ElementMeasurer).toBe('function');
  });
});

describe('#ElementUtil', () => {
  it('should not empty.', () => {
    expect(ElementUtil).toBeTruthy();
    expect(typeof ElementUtil).toBe('object');
  });
});

describe('#Svg', () => {
  it('should not empty.', () => {
    expect(Svg).toBeTruthy();
    expect(typeof Svg).toBe('object');
  });
});

describe('#Util', () => {
  it('should not empty.', () => {
    expect(Util).toBeTruthy();
    expect(typeof Util).toBe('object');
    expect(Object.values(Util).every(x => typeof x === 'function')).toBeTruthy();
  });
});

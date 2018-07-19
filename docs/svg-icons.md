# SVG Icons

Simple icons with [SVG](https://svgontheweb.com/).

### Table of contents

- [Use via icon component](#use-via-icon-component)
- [Use via JS util methods](#use-via-js-util-methods)
- [Icons](#icons)

## Use via icon component

``` html
<icon name="arrow-up" />
```

### Props

| Name | Type | Default | Description |
| ---- |:----:| ------- | ----------- |
| name | `string` | `''` | a name of svg icon. e.g. 'arrow-down', 'close' |

## Use via JS util methods

``` js
import { Util } from 'moss-ui';
const { addSvg, getSvgByName, makeIcon, makeIconHtml } = Util;

const icon = makeIcon('caret-down');
document.querySelector('#target').appendChild(icon);
```

### [addSvg](https://github.com/archco/moss-ui/blob/master/docs/js/util.md#addsvg)

Add custom svg icon into the SVG icon list.

``` ts
addSvg(name: string, value: string): void;
```

### [getSvgByName](https://github.com/archco/moss-ui/blob/master/docs/js/util.md#getsvgbyname)

Get svg string by name. e.g. `'<svg>...</svg>'`

``` ts
getSvgByName(name: string): string;
```

### [makeIcon](https://github.com/archco/moss-ui/blob/master/docs/js/util.md#makeicon)

Make icon element by svg-icon name. e.g. `<i class="moss-icon"><svg>...</svg></i>`

``` ts
makeIcon(name: string): HTMLElement;
```

### [makeIconHtml](https://github.com/archco/moss-ui/blob/master/docs/js/util.md#makeiconhtml)

Make icon html string by svg-icon name. e.g. `'<i class="moss-icon"><svg>...</svg></i>'`

``` ts
makeIconHtml(name: string): string;
```

## Icons

Available icon names.

- `arrow-left`
- `arrow-right`
- `arrow-up`
- `arrow-down`
- `caret-left`
- `caret-right`
- `caret-up`
- `caret-down`
- `close`
- `check`
- `search`
- `ellipsis-vertical`
- `ellipsis-horizontal`

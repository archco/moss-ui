# SVG Icons

Simple icons with [SVG](https://svgontheweb.com/).

### Table of contents

- [Usage](#usage)
  - [Use via icon component](#use-via-icon-component)
  - [Use via JS util methods](#use-via-js-util-methods)
- [Icons](#icons)

## Usage

### Use via icon component

``` html
<icon name="arrow-up" />
```

#### Props

| Name | Type | Default | Description |
| ---- |:----:| ------- | ----------- |
| name | `string` | `''` | a name of svg icon. e.g. 'arrow-down', 'close' |

### Use via JS util methods

``` js
import { Util } from 'moss-ui';
const { getSvgByName, makeIcon, makeIconHtml } = Util;

const icon = makeIcon('caret-down');
document.querySelector('#target').appendChild(icon);
```

#### getSvgByName

Get svg string by name.

- Syntax

  ``` js
  const svgStr = getSvgByName(name);
  ```

- Param `string` name - a name of svg icon. e.g. 'arrow-down', 'close'
- Returns `string` - `'<svg>...</svg>'`

#### makeIcon

Make icon element by svg-icon name.

- Syntax

  ``` js
  const icon = makeIcon(name);
  ```

- Param `string` name - a name of svg icon. e.g. 'arrow-down', 'close'
- Returns `HTMLElement` - `<i class="icon"><svg>...</svg></i>`

#### makeIconHtml

Make icon html string by svg-icon name.

- Syntax

  ``` js
  const iconHtml = makeIconHtml(name);
  ```

- Param `string` name - a name of svg icon. e.g. 'arrow-down', 'close'
- Returns `string` - `'<i class="icon"><svg>...</svg></i>'`

## Icons

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

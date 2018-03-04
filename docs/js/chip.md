# Chip

> sources:  
[js/components/chip](../../src/js/components/chip.vue)  
[scss/components/chip](../../src/scss/components/_chip.scss)

### Table of contents

- [Usage](#usage)
  - [Tag chip](#tag-chip)
  - [Contact chip](#contact-chip)
  - [Link chip](#link-chip)
  - [with color](#with-color)
- [Props](#props)
- [Events](#events)
- [SCSS variables](#scss-variables)

## Usage

### Tag chip

``` html
<chip title="tag-sample">TagSample</chip>
<chip closeable>TagSample</chip>
```

### Contact chip

``` html
<chip img-src="avatar.png" img-alt="avatar image">John Doe</chip>
<chip img-src="avatar.png" img-alt="avatar image" closeable>John Doe</chip>
```

### Link chip

``` html
<chip tag="a" href="#" closeable>Chip</chip>
<chip
  tag="a"
  href="#"
  img-src="avatar.png"
  img-alt="avatar"
  closeable>
  Jane Doe
</chip>
```

### with color

``` html
<chip color="#69c">Color Chip</chip>
```

## Props

| Name | Type | Default | Description |
| ---- |:----:| ------- | ----------- |
| tag | `String` | `'span'` | A tag name. e.g. `'a'`, `'span'` |
| color | `String` | `''` | `background-color` of a chip. |
| closeable | `Boolean` | `false` | Enable close-button. |
| close-action | `String` | `'remove'` | Specify an action when clicked the close-button. It can set 'remove', 'hide' or '' (It's no action) |
| img-src | `String` | `''` | Image source. |
| img-alt | `String` | `''` | Alternate text. |

## Events

| Name | Argument | Description |
| ---- |:--------:| ----------- |
| close | chip: `VNode` | It triggers when clicked close-button. |

## SCSS variables

``` scss
$chip-font-size: .85em !default;
$chip-height: 2em !default; // unit:em, This value is base of local variables of chip.
$chip-bg-color: $background-color-shade !default;
```

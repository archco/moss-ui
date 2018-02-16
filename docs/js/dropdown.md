# Dropdown

> sources:  
[js/components/dropdown](../../src/js/components/dropdown.vue)  
[scss/components/dropdown](../../src/scss/components/_dropdown.scss)

**Notice**: This component is built on [Popper.js](https://github.com/FezVrasta/popper.js). If you want more information, please see [popper-documentation](https://github.com/FezVrasta/popper.js/blob/master/docs/_includes/popper-documentation.md).

### Table of contents

- [Usage](#usage)
  - [Toggle dropdown](#toggle-dropdown)
  - [Hover dropdown](#hover-dropdown)
  - [Content placement](#content-placement)
  - [Content offset](#content-offset)
  - [Content decorators](#content-decorators)
- [Props](#props)
- [SCSS variables](#scss-variables)

## Usage

### Toggle dropdown

```html
<dropdown>
  <button class="btn" slot="button">TOGGLE</button>
  <a href="#" class="dropdown-item active">Item 01</a>
  <a href="#" class="dropdown-item">Item 02</a>
  <a href="#" class="dropdown-item">Item 03</a>
</dropdown>
```

### Hover dropdown

```html
<dropdown toggle="hover">
  <button class="btn" slot="button">HOVER</button>
  <a href="#" class="dropdown-item">Item 01</a>
  <a href="#" class="dropdown-item">Item 02</a>
</dropdown>
```

### Content placement

> @see [Popper.placements][]

- Placements: `auto` `top` `right` `bottom` `left`
- Variation suffixes: `-start` `-end`
- Default value: `bottom`

```html
<dropdown toggle="hover" placement="right-start">
  <button class="btn" slot="button">HOVER</button>
  <a href="#" class="dropdown-item">Item 01</a>
  <a href="#" class="dropdown-item">Item 02</a>
</dropdown>
```

### Content Offset

> @see [modifiers~offset][]

If the placement is `top` or `bottom`, this value means `width, height`. In case of `left` or `right`, it means `height, width`.

**Caveat**: If you set offset, it could not working as expected in hover type dropdown.

```html
<dropdown toggle="hover" offset="10%, 10">
  <button class="btn" slot="button">HOVER</button>
  <a href="#" class="dropdown-item">Item 01</a>
  <a href="#" class="dropdown-item">Item 02</a>
</dropdown>
```

### Content decorators

- classes: `.dropdown-item`, `.dropdown-header` and `.dropdown-divider`.
- disabled-item attribute: `[disabled]`

```html
<dropdown>
  <button class="btn" slot="button">DROPDOWN</button>
  <h3 class="dropdown-header">Header</h3>
  <a href="#" class="dropdown-item">Item 01</a>
  <a href="#" class="dropdown-item">Item 02</a>
  <div class="dropdown-divider"></div>
  <a href="#" class="dropdown-item" disabled>Item 03</a>
  <a href="#" class="dropdown-item">Item 04</a>
</dropdown>
```

### Button without caret

``` html
<dropdown :button-with-caret="false">...</dropdown>
```

## Props

| Name | Type | Default | Description |
| ---- |:----:| ------- | ----------- |
| toggle | `String` | `'toggle'` | content toggle type. 'toggle' or 'hover' |
| placement | `String` | `'bottom'` | Placement of dropdown content. |
| offset | `String` | `'1px, 1px'` | Offset value for dropdown content. see [modifiers~offset][] |
| flip | `String` | `'on'` | Turn on/off flip mode. see [modifiers~flip][]. |
| prevent-overflow | `String` | `'on'` | Turn on/off preventOverflow mode. see [modifiers~preventOverflow] |
| modifiers | `Object` | `{}` | set [modifiers][] option for Popper.js |
| button-with-caret | `Boolean` | `true` | Whether append caret or not on dropdown-button. |

## SCSS variables

``` scss
$dropdown-bg-color: $background-color !default;
$dropdown-bg-hover-color: rgba(#000, .15) !default;
$dropdown-padding-y: .35em !default;
$dropdown-padding-x: .7em !default;
$dropdown-line-height: $body-line-height !default;
$dropdown-item-hover-color: get-contrast($dropdown-bg-color) !default;
$dropdown-item-color: rgba($dropdown-item-hover-color, .8) !default;
$dropdown-active-bg-color: rgba(#000, .15) !default;
$dropdown-active-color: get-contrast($dropdown-bg-color) !default;
$dropdown-min-width: 120px !default;
$dropdown-shadow: $shadow-normal !default;
$dropdown-header-color: $text-color-weak !default;
$dropdown-header-font-size: 1em !default;
$dropdown-divider-margin-y: .4rem !default;
$dropdown-divider-color: $border-color !default;
```

[Popper.placements]: https://github.com/FezVrasta/popper.js/blob/master/docs/_includes/popper-documentation.md#Popper.placements
[modifiers~offset]: https://github.com/FezVrasta/popper.js/blob/master/docs/_includes/popper-documentation.md#modifiersoffset
[modifiers~flip]: https://github.com/FezVrasta/popper.js/blob/master/docs/_includes/popper-documentation.md#modifiersflip
[modifiers~preventOverflow]: https://github.com/FezVrasta/popper.js/blob/master/docs/_includes/popper-documentation.md#modifierspreventoverflow
[modifiers]: https://github.com/FezVrasta/popper.js/blob/master/docs/_includes/popper-documentation.md#modifiers--object

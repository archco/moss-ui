# Dropdown

> source: [js/components/dropdown](../../src/js/components/dropdown.vue)

## Usage
> This component is built on [Popper.js](https://github.com/FezVrasta/popper.js). If you want more information, please see [popper-documentation](https://github.com/FezVrasta/popper.js/blob/master/docs/_includes/popper-documentation.md).

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

## Props

| name | type | description | default |
| ---- | ---- | ----------- | ------- |
| toggle | String | toggle type: `toggle` or `hover` | 'toggle' |
| placement | String | Placement of dropdown content. | 'bottom' |
| offset | String | Offset value for dropdown content. see [modifiers~offset][] | '1px, 1px' |
| flip | String | Turn on/off flip mode. see [modifiers~flip][]. | 'on' |
| prevent-overflow | String | Turn on/off preventOverflow mode. see [modifiers~preventOverflow] | 'on' |
| modifiers | Object | set [modifiers][] option for Popper.js | {} |

[Popper.placements]: https://github.com/FezVrasta/popper.js/blob/master/docs/_includes/popper-documentation.md#Popper.placements
[modifiers~offset]: https://github.com/FezVrasta/popper.js/blob/master/docs/_includes/popper-documentation.md#modifiersoffset
[modifiers~flip]: https://github.com/FezVrasta/popper.js/blob/master/docs/_includes/popper-documentation.md#modifiersflip
[modifiers~preventOverflow]: https://github.com/FezVrasta/popper.js/blob/master/docs/_includes/popper-documentation.md#modifierspreventoverflow
[modifiers]: https://github.com/FezVrasta/popper.js/blob/master/docs/_includes/popper-documentation.md#modifiers--object

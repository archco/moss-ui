# Spacing

> source: [scss/helpers/spacing.scss](https://github.com/archco/moss-ui/blob/master/src/scss/helpers/_spacing.scss)

Helper classes for specifying margin or padding spacing to element. These classes refer to the bootstrap. see [details](https://getbootstrap.com/docs/4.0/utilities/spacing/)

### Table of contents

- [Notation](#notation)
  - [property](#property)
  - [sides](#sides)
  - [size](#size)
- [Usage](#usage)
- [SCSS Variables](#scss-variables)

## Notation

### property

- `m` - margin
- `p` - padding

### sides

- `t` - top
- `r` - right
- `b` - bottom
- `l` - left
- `y` - Y axis, top and bottom.
- `x` - X axis, right and left.
- blank - all 4 sides.

### size

- `0` - Setting `margin` or `padding` to `0`.
- `1` - `$spacer` * .25
- `2` - `$spacer` * .5
- `3` - `$spacer` (default value is `1rem`)
- `4` - `$spacer` * 1.5
- `5` - `$spacer` * 3
- `auto`

## Usage

``` html
<!-- If set $spacer to `1rem`. (default value) -->
<div class="mt-0">margin-top: 0;</div>
<div class="pr-1">padding-right: .25rem;</div>
<div class="mb-2">margin-bottom: .5rem;</div>
<div class="px-3">padding-right: 1rem; padding-left: 1rem;</div>
<div class="my-4">margin-top: 1.5rem; margin-bottom: 1.5rem;</div>
<div class="pl-5">padding-left: 3rem;</div>

<!-- Horizontal centering -->
<div class="mx-auto" style="width: 200px;">Centered</div>
```

## SCSS Variables

``` scss
$spacer: 1rem !default;
$spacers: () !default;
$spacers: map-merge((
  0: 0,
  1: $spacer * .25,
  2: $spacer * .5,
  3: $spacer,
  4: $spacer * 1.5,
  5: $spacer * 3,
), $spacers);
```

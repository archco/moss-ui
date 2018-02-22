# Sizing

> source: [scss/helpers/sizing.scss](https://github.com/archco/moss-ui/blob/master/src/scss/helpers/_sizing.scss)

Helper classes for specifying width or height of element. These classes refer to the bootstrap. see [details](https://getbootstrap.com/docs/4.0/utilities/sizing/).

## Usage

- Supported percentage values: 25%, 50%, 75% and 100%.
- Keywords: `w` means width. `h` means height.

``` html
<div class="w-25">width 25%</div>
<div class="h-50">height 50%</div>
<div class="w-100 h-75">width 100% and height 75%</div>
```

### Max width

Only supported `max-width: 100%;` and `max-height: 100%;`.

``` html
<img class="mw-100" src="image.jpg">
```

## SCSS Variables

``` scss
$sizes: () !default;
$sizes: map-merge((
  25: 25%,
  50: 50%,
  75: 75%,
  100: 100%,
  auto: auto,
), $sizes);
```

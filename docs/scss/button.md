# Button

> source: [scss/parts/button](../../src/scss/parts/_button.scss)

### Table of contents

- [Usage](#usage)
  - [btn](#btn)
  - [btn-flat](#btn-flat)
  - [btn-icon](#btn-icon)
  - [disabled](#disabled)
  - [Button with color-set](#button-with-color-set)
  - [Button with is-loading](#button-with-is-loading)
  - [Button Group](#button-group)
- [Notes](#notes)
  - [Optional modifiers](#optional-modifiers)
  - [Auto button color](#auto-button-color)
- [SCSS variables](#scss-variables)

## Usage

### btn

``` html
<button class="btn danger">Danger</button>
<a class="btn info" href="#">link button</a>
```

### btn-flat

``` html
<button class="btn-flat success">Success</button>
<a class="btn-flat warning" href="#">link button</a>
```

### btn-icon

``` html
<button class="btn-icon warning">
  <i class="fa fa-exclamation" aria-hidden="true"></i>
</button>
```

### disabled

``` html
<button class="btn" disabled>Button</button>
```

### Button with Color-set

> based on [Color-set](color-set.md)

Available color keywords: default, primary, secondary, info, success, warning, danger, error, light, dark, shade, link

``` html
<button class="btn success">Okay</button>
<button class="btn-flat info">See details</button>
<button class="btn-icon secondary">...</button>
```

### Button with is-loading

This uses [loader](loader.md)

``` html
<button class="btn is-loading">loading</button>
```

### Button Group

Available content buttons for button-group: `.btn`, `.btn-flat`, `dropdown`

#### Horizontal button group (default)

``` html
<div class="btn-group">
  <button class="btn">Left</button>
  <button class="btn">Center</button>
  <button class="btn">Right</button>
</div>
```

#### Vertical button group

``` html
<div class="btn-group-vertical">
  <button class="btn">Top</button>
  <button class="btn">Middle</button>
  <button class="btn">Bottom</button>
</div>
```

## Notes

### Optional modifiers

- [Color-set](color-set.md) classes: `default`, `primary`, `secondary`, `info`, `success`, `warning`, `danger`, `error`, `light`, `dark`, `shade`, `link`
- Style class: `full-width`
- disabled attribute: `disabled`

### Auto button color

> See in [variables.scss](../../src/scss/_variables.scss)

``` scss
// If $auto-button-color-enable set true,
// button-color in color-set set automatically that based by contrast of background-color.
$auto-button-color-enable: true !default;
```

## SCSS variables

``` scss
$button-radius: $radius-small !default;
$button-color: $text-color-light !default;
// If $auto-button-color-enable set true,
// button-color in color-set set automatically that based by contrast of background-color.
$auto-button-color-enable: true !default;
$button-default-bg-color: $primary-color !default;
$button-flat-default-bg-color: $link-color !default;
$button-outline-color: $outline-color !default;
$button-padding-y: .5em !default;
$button-padding-x: 1em !default;
$button-margin: .2em !default;
```

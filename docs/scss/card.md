# Card

> source: [scss/parts/card](../../src/scss/parts/_card.scss)

### Table of contents

- [Usage](#usage)
  - [Vertical Card](#vertical-card)
  - [Horizontal Card](#horizontal-card)
  - [Inline](#inline)
  - [Hoverable](#hoverable)
- [Optional modifier classes](#optional-modifier-classes)
- [SCSS Variables](#scss-variables)

## Usage

### Vertical Card

It is default value of card contents direction.

``` html
<div class="card">
  <div class="card-image">
    <img src="image.jpg">
    <h3 class="card-title">Title</h3>
  </div>
  <div class="card-content">
    <span>Card content</span>
  </div>
</div>
```

### Horizontal Card

``` html
<div class="card-horizontal large">
  <div class="card-image">
    <img src="image.jpg">
  </div>
  <div class="card-content">
    <span>Card content</span>
  </div>
</div>
```

### Inline

``` html
<div class="card inline small">
  <div class="card-image">
    <img src="image.jpg">
  </div>
  <div class="card-content">
    <span>Card content</span>
  </div>
</div>
```

### Hoverable

``` html
<a href="#" class="card small hoverable">
  <div class="card-image">
    <img src="image.jpg">
  </div>
  <div class="card-content">
    <span>Card content</span>
  </div>
</a>
```

## Optional modifier classes

- size: `small` `large` (default: medium)
- direction: `horizontal` (default: vertical)
- display: `inline` (default: block)
- hover: `hoverable`
- contents: `card-image` `card-title` `card-content`

## SCSS Variables

``` scss
$card-size: 300px !default;
$card-size-small: 200px !default;
$card-size-large: 400px !default;
$card-radius: $radius-small !default;
$card-shadow: $shadow-normal !default;
$card-hover-shadow: $shadow-far !default;
$card-bg-color: $background-color !default;
$card-title-color: $text-color-invert !default;
$card-content-padding-y: .5em !default;
$card-content-padding-x: .5em !default;
```

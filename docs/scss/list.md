# List

> source: [scss/parts/list](../../src/scss/parts/_list.scss)

## Usage

### list

Simply none-list-style list.

```html
<ul class="list">
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
</ul>
```

### list-group

```html
<ul class="list-group">
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
</ul>
```

### list-horizontal

```html
<ul class="list-horizontal">
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
</ul>
```

### breadcrumb

default separator is "/".

```html
<ul class="breadcrumb">
  <li><a href="#">scss</a></li>
  <li><a href="#">parts</a></li>
  <li>list</li>
</ul>
```

## SCSS variables

``` scss
$list-border-width: 1px !default;
$list-border-color: $border-color !default;
$list-padding-y: .6em !default;
$list-padding-x: .3em !default;
$list-group-padding-y: .4em !default;
$list-group-padding-x: .8em !default;
$list-group-padding: .4em .8em !default;
$list-group-border-radius: $radius-normal !default;
$list-group-hover-bg-color: rgba($background-color-invert, .1) !default;
$list-group-active-bg-color: $primary-color !default;
$list-group-active-color: get-contrast($list-group-active-bg-color) !default;
$breadcrumb-separator: '/' !default;
```

# Scaffolding

> source: [scss/parts/scaffolding](../../src/scss/parts/_scaffolding.scss)

### Table of contents
- [Default Tags](#default-tags)
  - [Link](#link)
  - [Table](#table)
  - [Blockquote](#blockquote)
- [Optional Class](#optional-classes)
- [SCSS variables](#scss-variables)

## Default Tags

### Link

**Avoid underline decoration**

The default link causes an underline when hovering. Do one of the following to write `<a>` to avoid underlining.

- Add class `.no-deco` e.g. `<a href="#" class="no-deco">`
- In html
  ```html
  <a href="#" class="no-deco">LINK</a>
  ```
- In scss
  ```scss
  .target {
    @include no-decoration;
  }
  ```


**Set inherit color to links color**

- In html
  ```html
  <a href="#" class="inherit">LINK</a>
  ```
- In scss
  ```scss
  .target {
    @include set-link-state-color(inherit);
  }
  ```

### Table

**Basic and Center position**
```html
<table class="table center">
  <thead>...</thead>
  <tbody>...</tbody>
</table>
```

**Bordered**
```html
<table class="table bordered">...</table>
```

**Striped**
```html
<table class="table striped">...</table>
```

**Hover**
```html
<table class="table hover">...</table>
```

**Responsive**
- wrapper around
  ```html
  <div class="table-responsive-wrapper">
    <table>...</table>
  </div>
  ```
- Use "wrap" directive
  ```html
  <table class="table" v-wrap:responsive>...</table>
  ```

### Blockquote
> based on [Color-set](color-set.md)

Available color keywords: default, primary, secondary, info, success, warning, danger, error, light, dark, shade, link

```html
<blockquote class="success">...</blockquote>
```


## Optional Classes

### pad

Available Tags: `<article>`, `<aside>`, `<div>`, `<p>` and `<blockquote>`

**article with `.pad`**
```html
<article class="pad">...</article>
```

### accent

Useful class for apply `$font-accent` to heading tags.

```html
<h1 class="accent">...</h1>
```

## SCSS Variables

**Link**

| Name | Type | Default | Description |
| ---- |:----:| ------- | ----------- |
| $link-color | `color` | `#0087bd` (naturalblue) | A color of link text. |
| $link-color-hover | `color` | `darken($link-color, 8%)` | A color of link text when hovered. |
| $link-decoration | `text-decoration` | `none` | Text decoration value for link. |
| $link-hover-decoration | `text-decoration` | `underline` | Text decoration value for link when hovered. |

**Table**

| Name | Type | Default | Description |
| ---- |:----:| ------- | ----------- |
| $table-cell-padding | `number` | `.75em` | Padding value for table cell. |
| $table-border-width | `number` | `1px` | table's border width. |
| $table-border-color | `color` | `#bebebe` (mediumgray) | table's border color. |
| $table-head-bg-color | `color` | `$primary-color` | Background color of `<th>`. |
| $table-head-text-color | `color` | `get-contrast($table-head-bg-color)` | Text color of `<th>`.
| $table-text-color | `color` | `inherit` | Text color of `<td>` |
| $table-row-even-bg | `color` | `rgba($background-color-invert, .05)` | Even row's background color. |
| $table-row-hover-bg | `color` | `rgba($background-color-invert, .1)` | Background color of `<tr>` when hovered.

**Blockquote**

| Name | Type | Default | Description |
| ---- |:----:| ------- | ----------- |
| $blockquote-color | `color` | `$text-color-weak` | Blockquote's text color. |
| $blockquote-border-color | `color` | `$background-color-shade` | Blockquote's border color. |

**Codes**

| Name | Type | Default | Description |
| ---- |:----:| ------- | ----------- |
| $code-padding-y | `number` | `.15em` | Code padding (Y axis) |
| $code-padding-x | `number` | `.25em` | Code padding (X axis) |
| $code-font-size | `number` | `.85em` | Code's font-size. |
| $code-bg-color | `color` | `rgba($background-color-invert, .05)` | Code's background color. |
| $code-color | `color` | `get-contrast(rgba-to-rgb($code-bg-color, $background-color))` | Code's text color. |
| $code-border-radius | `number` | `$radius-normal` | Code's border radius. |
| $code-block-padding-y | `number` | `1em` | Code block's padding (Y axis) |
| $code-block-padding-x | `number` | `1em` | Code block's padding (X axis) |
| $code-block-line-height | `number` | `1.45` | Code block's `line-height` |

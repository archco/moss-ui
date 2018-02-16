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

#### no-deco class

It's a way to remove underline decoration in link. The default link causes an underline when hovering. Do one of the following to write `<a>` to avoid underlining.

- In html
  ``` html
  <a href="#" class="no-deco">LINK</a>
  ```
- In scss
  ``` scss
  .target {
    @include no-decoration;
  }
  ```

#### inherit class

Set inherit color to every state of link. (`:link`, `:visited`, `:hover`, `:focus` and `:active`)

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

Basic and Center position

```html
<table class="table center">
  <thead>...</thead>
  <tbody>...</tbody>
</table>
```

Bordered

```html
<table class="table bordered">...</table>
```

Striped

```html
<table class="table striped">...</table>
```

Hover

```html
<table class="table hover">...</table>
```

Responsive

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

**Example**: article with `.pad`

```html
<article class="pad">...</article>
```

### accent

Useful class for apply `$font-accent` to heading tags.

```html
<h1 class="accent">...</h1>
```

## SCSS Variables

``` scss
// link colors
$link-color-hover: darken($link-color, 8%) !default;
$link-color-visited: $link-color !default;
$link-decoration: none !default;
$link-hover-decoration: underline !default;

// table
$table-cell-padding: .75em !default;
$table-border-width: 1px !default;
$table-border-color: $border-color !default;
$table-head-bg-color: $primary-color !default;
$table-head-text-color: get-contrast($table-head-bg-color) !default;
$table-text-color: inherit !default;
$table-row-even-bg: rgba($background-color-invert, .05) !default;
$table-row-hover-bg: rgba($background-color-invert, .1) !default;

// blockquote
$blockquote-color: $text-color-weak !default;
$blockquote-border-color: $background-color-shade !default;

// codes
$code-padding-y: .15em !default;
$code-padding-x: .25em !default;
$code-font-size: .85em !default;
$code-bg-color: rgba($background-color-invert, .05) !default;
$code-color: get-contrast(rgba-to-rgb($code-bg-color, $background-color)) !default;
$code-border-radius: $radius-normal !default;
$code-block-padding-y: 1em !default;
$code-block-padding-x: 1em !default;
$code-block-line-height: 1.45 !default;

// footer
$footer-bg-color: $primary-color !default;
$footer-link-hover-color: get-contrast($footer-bg-color) !default;
$footer-color: rgba($footer-link-hover-color, .85) !default;
$footer-link-color: $footer-color !default;
$footer-copyright-color: $footer-color !default;
$footer-copyright-bg-color: rgba(#000, .1) !default;

// This variable affects the `.h-*` and `.w-*` classes.
$sizes: (
  25: 25%,
  50: 50%,
  75: 75%,
  100: 100%
) !default;
```

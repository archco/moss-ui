# Navbar

> sources:  
[js/components/navbar](../../src/js/components/navbar.vue)  
[js/components/navbar-brand](../../src/js/components/navbar-brand.vue)  
[js/components/navbar-toggle](../../src/js/components/navbar-toggle.vue)  
[js/components/navbar-nav](../../src/js/components/navbar-nav.vue)  
[js/components/nav-item](../../src/js/components/nav-item.vue)  
[scss/components/navbar](../../src/scss/components/_navbar.scss)

### Table of Contents

- [Usage](#usage)
  - [Basic](#basic)
  - [Multiple navigation](#multiple-navigation)
  - [Specifying height](#specifying-height)
- [Props](#props)
- [SCSS variables](#scss-variables)

## Usage

### Basic

```html
<navbar>
  <navbar-brand href="/" type="text" slot="brand">MOSS</navbar-brand>
  <navbar-nav>
    <nav-item href='#' text="Link 1"></nav-item>
    <nav-item href='#' text="Link 2"></nav-item>
    <nav-item>
      <dropdown>
        <button slot="button">Dropdown</button>
        <a href="#">sub1</a>
        <a href="#">sub2</a>
        <a href="#">sub3</a>
      </dropdown>
    </nav-item>
  </navbar-nav>
</navbar>
```

### Multiple navigation

```html
<navbar align="between">
  <navbar-brand href="/" type="text" slot="brand">Brand</navbar-brand>
  <navbar-nav>
    <nav-item href='#' text="Left 1"></nav-item>
    <nav-item href='#' text="Left 2"></nav-item>
  </navbar-nav>
  <navbar-nav>
    <nav-item href='#' text="Right 1"></nav-item>
    <nav-item href='#' text="Right 2"></nav-item>
  </navbar-nav>
</navbar>
```

### Specifying height

If you want to specify the height of the navbar, choose one of the following two ways.

#### Option 1. Set scss-variable `$navbar-header-height`

``` scss
// _variables.scss
$navbar-header-height: 3rem; // default value is `auto`.
```

#### Option 2. Set prop `header-style` to component

``` html
<navbar :header-style="{ height: '3rem' }">
  ...
</navbar>
```

## Props

### navbar

| Name | Type | Default | Description |
| ---- |:----:| ------- | ----------- |
| align | `String` | `''` (start) | It's `justify-content` value of the `navbar`'s body content. |
| header-align | `String` | `''` (start) | It's `justify-content` value of the `navbar-header`. |
| header-style | `object` | `{}` | style object for `navbar-header`. |

**Note** Available alignment keywords: `start`, `end`, `center`, `between` and `around`.

### navbar-brand

| Name | Type | Default | Description |
| ---- |:----:| ------- | ----------- |
| href | `String` | `'/'` | Link URL. |
| type | `String` | `'text'` | The type of brand icon. 'text' or 'image'. |

### nav-item

| Name | Type | Default | Description |
| ---- |:----:| ------- | ----------- |
| href | `String` | `''` | Link URL. |
| text | `String` | `''` | The value of `textContent`. |

## SCSS variables

``` scss
$nav-bg-color: $background-color !default;
$nav-active-color: $primary-color !default;
$nav-link-color: inherit !default;
$nav-link-hover-color: $secondary-color !default;
$nav-link-padding-y: .5em !default;
$nav-link-padding-x: 1em !default;
$nav-font: $font-accent !default;
$nav-font-size: 1.25em !default;
$nav-line-height: 1.25 !default;
$navbar-toggle-width: 35px !default;
$navbar-header-height: auto !default;
```

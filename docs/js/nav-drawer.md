# Nav Drawer

> sources:  
[js/components/nav-drawer](../../src/js/components/nav-drawer.vue)  
[scss/components/nav-drawer](../../src/scss/components/_nav-drawer.scss)

It's the navigation drawer that using horizontal-collapse.

### Table of contents

- [Usage](#usage)
- [Menu Decorators](#menu-decorators)
- [Props](#props)
- [SCSS Variables](#scss-variables)

## Usage

``` html
<!-- Toggle button for the nav-drawer open/close.  -->
<button v-collapse:drawer01>Toggle Drawer</button>

<nav-drawer id="drawer01">
  <!-- Header actions -->
  <div class="nav-drawer-header">
    <button class="btn-text" v-collapse:drawer01.hide>
      <icon name="close"></icon>
    </button>
  </div>

  <!-- Body contents -->
  <div class="nav-drawer-body">
    <!-- info -->
    <div class="info bg-color-secondary d-flex justify-content-center align-items-center" style="height:150px;">
      <h2>Drawer Info</h2>
    </div>

    <!-- menu-header -->
    <h3 class="menu-header">Main Menu</h3>
    <!-- menu-item -->
    <a class="menu-item" href="#">item1</a>
    <a class="menu-item active" href="#">item2</a>
    <!-- menu-divider -->
    <div class="menu-divider"></div>
    <a class="menu-item" href="#" disabled>disabled item</a>
  </div>
</nav-drawer>
```

## Menu Decorators

### menu-header

``` html
<!-- .menu-header -->
<h2 class="menu-header">Header</h3>
```

### menu-item

``` html
<!-- .menu-item -->
<a class="menu-item" href="#">item1</a>
<!-- .menu-item.active -->
<a class="menu-item active" href="#">item2</a>
<!-- .menu-item[disabled] -->
<a class="menu-item" href="#" disabled>item3</a>
```

### menu-divider

``` html
<!-- .menu-divider -->
<div class="menu-divider"></div>
```

## Props

| Name | Type | Default | Description |
| ---- |:----:| ------- | ----------- |
| id | `string` | required | Key for the `collapse` component. |

## SCSS Variables

``` scss
$nav-drawer-base-width: 280px !default;
$nav-drawer-widths: (
  sm: 67%,
  md: 50%,
  lg: 33%,
  xl: 25%,
) !default;
$nav-drawer-shadow: $shadow-normal !default;
$nav-drawer-header-padding-y: $space-2 !default;
$nav-drawer-header-padding-x: $space-2 !default;
$nav-drawer-header-font-size: 2rem !default;
$nav-drawer-header-bg-color: $background-color !default;
$nav-drawer-header-color: $text-color !default;
$nav-drawer-body-font-size: 1em !default;
$nav-drawer-body-bg-color: $background-color !default;
$nav-drawer-body-color: $text-color !default;
$nav-drawer-menu-header-color: $text-color-weak !default;
$nav-drawer-menu-item-hover-bg-color: $shade-color !default;
$nav-drawer-menu-item-active-bg-color: $shade-color !default;
$nav-drawer-menu-item-disabled-color: $text-color-middle !default;
$nav-drawer-menu-divider-color: $border-color !default;
```

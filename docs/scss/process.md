# Progress

> This SCSS part is referenced from [bootstrap/progress](https://getbootstrap.com/docs/4.3/components/progress/)

Custom progress bars are featuring support stacked bars, animated background, and text labels.

### Table of contents

- [Usage](#Usage)
  - [Basic](#Basic)
  - [Labels](#Labels)
  - [Height](#Height)
  - [Backgrounds](#Backgrounds)
  - [Multiple bars](#Multiple-bars)
  - [Striped](#Striped)
  - [Animated stripes](#Animated-stripes)
- [SCSS Variables](#SCSS-Variables)

## Usage

### Basic

``` html
<div class="progress">
  <div class="progress-bar" style="width: 33%"></div>
</div>
```

### Labels

``` html
<div class="progress">
  <div class="progress-bar" style="width: 33%">33%</div>
</div>
```

### Height

``` html
<div class="progress" style="height: 1px">
  <div class="progress-bar" style="width: 33%"></div>
</div>
```

### Backgrounds

``` html
<div class="progress">
  <div class="progress-bar bg-warning" style="width: 33%"></div>
</div>
<!-- or -->
<div class="progress">
  <div class="progress-bar" style="width:33%; background-color:red;"></div>
</div>
```

### Multiple bars

``` html
<div class="progress">
  <div class="progress-bar" style="width: 25%"></div>
  <div class="progress-bar bg-info" style="width: 25%"></div>
  <div class="progress-bar bg-warning" style="width: 25%"></div>
</div>
```

### Striped

``` html
<div class="progress">
  <div class="progress-bar progress-bar-striped" style="width: 33%"></div>
</div>
```

### Animated stripes

``` html
<div class="progress">
  <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 33%"></div>
</div>
```

## SCSS Variables

``` scss
$progress-height: 1rem !default;
$progress-font-size: $font-size * .75 !default;
$progress-bg: $body-bg-shade !default;
$progress-border-radius: $border-radius !default;
$progress-box-shadow: $box-shadow-inset !default;
$progress-bar-bg: $primary-color !default;
$progress-bar-color: get-contrast($progress-bar-bg) !default;
$progress-bar-animation-timing: 1s linear infinite !default;
$progress-bar-transition: width .6s ease !default;
```

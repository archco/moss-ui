# Form

> source: [scss/parts/form](../../src/scss/parts/_form.scss)

### Table of contents

- [Usage](#usage)
  - [default](#default)
  - [form-inline](#form-inline)
  - [Input with Color-set](#input-with-color-set)
  - [Input with Icons](#input-with-icons)
- [SCSS variables](#scss-variables)

## Usage

### default

Default style is full-width(`width: 100%;`).

``` html
<form>
  <fieldset>
    <legend>Form</legend>
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" id="name" name="name" placeholder="name">
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input type="password" id="password" name="password">
    </div>
    <div class="form-group">
      <button class="btn" type="submit">Submit</button>
    </div>
  </fieldset>
</form>
```

### form-inline

``` html
<form class="form-inline">
  <!-- form contents -->
</form>

<!-- Apply to individual inputs. -->
<input type="text" class="inline">
```

### Input with Color-set

> based on [Color-set](color-set.md)

Available color keywords: default, primary, secondary, info, success, warning, danger, error, light, dark, shade, link

``` html
<input class="success" type="text">
```

**Related SCSS Variable**
If `$auto-input-bg-color-enable` is true, background-color of color-set input set automatically. If value is false, background-color set transparent.

``` scss
$auto-input-bg-color-enable: true !default;
```

### Input with Icons

#### Default usage

``` html
<!-- block  -->
<div class="input with-icon">
  <input type="text" placeholder="Text me..">
  <span class="icon">
    <i class="fas fa-comment-alt"></i>
  </span>
</div>

<!-- inline -->
<div class="input inline with-icon">
  <input type="text" placeholder="Text me..">
  <span class="icon">
    <i class="fas fa-comment-alt"></i>
  </span>
</div>
```

#### Icon positioning

``` html
<!-- Right -->
<div class="input with-icon-right">
  <input type="text" placeholder="Text me..">
  <span class="icon-right">
    <i class="fas fa-comment-alt"></i>
  </span>
</div>

<!-- Left -->
<div class="input with-icon-left">
  <input type="search" placeholder="Search..">
  <span class="icon-left">
    <i class="fas fa-search"></i>
  </span>
</div>

<!-- Both -->
<div class="input with-icon-left with-icon-right">
  <input type="text" placeholder="Email..">
  <span class="icon-left">
    <i class="fas fa-envelope"></i>
  </span>
  <span class="icon-right">
    <i class="fas fa-check"></i>
  </span>
</div>
```

### Fieldset with color-set

> based on [Color-set](color-set.md)

Available color keywords: default, primary, secondary, info, success, warning, danger, error, light, dark, shade, link

``` html
<fieldset class="secondary">
  <legend>Secondary Colored</legend>

</fieldset>
```

## SCSS Variables

``` scss
$fieldset-border-width: 1px !default;
$fieldset-border-color: $primary-color !default;
$fieldset-border-radius: $radius-normal !default;
$legend-padding-y: $space-1 !default;
$legend-padding-x: $space-2 !default;
$label-color: $text-color !default;

$input-height: 2em !default;
$input-padding-y: .2em !default;
$input-padding-x: .5em !default;
$input-margin: .5rem 0 !default;
$input-border: 1px solid $border-color !default;
$input-radius: $radius-small !default;
$input-outline-color: $outline-color !default;
$input-disabled-bg-color: $disabled-color !default;
// If $auto-input-bg-color-enable is true,
// background-color of color-set input set automatically.
// If value is false, background-color set transparent.
$auto-input-bg-color-enable: true !default;
```

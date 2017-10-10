# Form

> source: [scss/parts/form](../../src/scss/parts/_form.scss)

## Usage

### default (block)

```html
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

```html
<form class="form-inline">
  <!-- form contents -->
</form>
```

### Input with color-set

> based on [Color-set](color-set.md)

Available color keywords: default, primary, secondary, info, success, warning, danger, error, light, dark, shade, link

```html
<input class="success" type="text">
```

#### Related SCSS Variable

```scss
// If this value set false, color inputs background-color set transparent.
$input-color-set-bg-enable: true !default;
```

### Input with icons

### Default

```html
<!-- block  -->
<div class="input with-icon">
  <input type="text" placeholder="Text me..">
  <span class="icon">
    <i class="fa fa-commenting" aria-hidden="true"></i>
  </span>
</div>

<!-- inline -->
<div class="input inline with-icon">
  <input type="text" placeholder="Text me..">
  <span class="icon">
    <i class="fa fa-commenting" aria-hidden="true"></i>
  </span>
</div>
```

### Icon positioning

```html
<!-- Right -->
<div class="input with-icon-right">
  <input type="text" placeholder="Text me..">
  <span class="icon-right">
    <i class="fa fa-commenting" aria-hidden="true"></i>
  </span>
</div>

<!-- Left -->
<div class="input with-icon-left">
  <input type="search" placeholder="Search..">
  <span class="icon-left">
    <i class="fa fa-search" aria-hidden="true"></i>
  </span>
</div>

<!-- Both -->
<div class="input with-icon-left with-icon-right">
  <input type="text" placeholder="Email..">
  <span class="icon-left">
    <i class="fa fa-envelope" aria-hidden="true"></i>
  </span>
  <span class="icon-right">
    <i class="fa fa-check" aria-hidden="true"></i>
  </span>
</div>
```

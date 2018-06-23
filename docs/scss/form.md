# Form

> source: [scss/parts/form](../../src/scss/parts/_form.scss)

### Table of contents

- [Usage](#usage)
  - [default](#default)
  - [form-inline](#form-inline)
  - [Input with Color-set](#input-with-color-set)
  - [Input with Icons](#input-with-icons)
  - [Form Grid](#form-grid)
  - [Validation](#validation)
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

### Form Grid

``` html
<form>
  <div class="form-row">
    <div class="col">
      <input type="text" placeholder="First name">
    </div>
    <div class="col">
      <input type="text" Placeholder="Last name">
    </div>
  </div>
</form>
```

### Validation

> This feature is referenced from the bootstrap. [see here for more information](https://getbootstrap.com/docs/4.1/components/forms/#validation).

Provide feedback to users when form field values are valid or invalid.

#### HTML5 constraint validation

Using [basic constraints in HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation#Intrinsic_and_basic_constraints)

``` html
<form class="was-validated">
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="formValidation01">First name</label>
      <input type="text" id="formValidation01" placeholder="First name" value="John" required>
      <div class="valid-feedback">Looks good!</div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="formValidation02">Last name</label>
      <input type="text" id="formValidation02" placeholder="Last name" value="Doe" required>
      <div class="valid-feedback">Looks good!</div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="formValidation03">Username</label>
      <div class="input-group">
        <div class="input-group-prepend"><span class="input-group-text">@</span></div>
        <input type="text" id="formValidation03" placeholder="Username" required>
        <div class="invalid-feedback">Please choose a username.</div>
      </div>
    </div>
    <div class="col-md mb-3">
      <input id="formValidation04" type="checkbox" required>
      <label for="formValidation04">Agree to terms and conditions</label>
      <div class="invalid-feedback">You must agree before submitting.</div>
    </div>
  </div>
</form>
```

### Server side validation

Using `.is-valid` and `.is-invalid`.

``` html
<form>
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="formValidation05">First name</label>
      <input class="is-valid" type="text" id="formValidation05" placeholder="First name" value="John" required>
      <div class="valid-feedback">Looks good!</div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="formValidation06">Last name</label>
      <input class="is-valid" type="text" id="formValidation06" placeholder="Last name" value="Doe" required>
      <div class="valid-feedback">Looks good!</div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="formValidation07">Username</label>
      <div class="input-group">
        <div class="input-group-prepend"><span class="input-group-text">@</span></div>
        <input class="is-invalid" type="text" id="formValidation07" placeholder="Username" required>
        <div class="invalid-feedback">Please choose a username.</div>
      </div>
    </div>
    <div class="col-md mb-3">
      <input class="is-invalid" id="formValidation08" type="checkbox" required>
      <label for="formValidation08">Agree to terms and conditions</label>
      <div class="invalid-feedback">You must agree before submitting.</div>
    </div>
  </div>
</form>
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
$input-bg-color: $background-color !default;
$input-border: 1px solid $border-color !default;
$input-radius: $radius-small !default;
$input-outline-color: $outline-color !default;
$input-disabled-bg-color: $disabled-color !default;
// If $auto-input-bg-color-enable is true,
// background-color of color-set input set automatically.
// If value is false, background-color set transparent.
$auto-input-bg-color-enable: true !default;
```

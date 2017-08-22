# Form
> source: [scss/components/form](../../src/scss/components/_form.scss)

## Usage
#### default (block)
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
#### form-inline
```html
<form class="form-inline">
  <!-- form contents -->
</form>
```

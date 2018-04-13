# Simple CRUD

> sources:  
[js/components/simple-crud](../../src/js/components/simple-crud.vue)  
[scss/components/simple-crud](../../src/scss/components/_simple-crud.scss)

### Table of contents

- [Usage](#usage)
  - [Toggles view with dataset](#toggles-view-with-dataset)
- [Props](#props)
- [SCSS variables](#scss-variables)

## Usage

``` html
<ul class="simple-crud-list">
  <li is="simple-crud">
    <!-- Read View -->
    <div slot="read">
      <span class="content">Model Information</span>
      <span class="actions btn-group">
        <button type="button" class="btn" data-toggle="update">Edit</button>
        <button type="button" class="btn danger" data-toggle="delete">Delete</button>
      </span>
    </div>

    <!-- Update View -->
    <form slot="update" action="#" method="POST">
      <span class="content">Some inputs</span>
      <span class="actions btn-group">
        <button type="button" class="btn default" data-toggle="cancel">Cancel</button>
        <button type="submit" class="btn success">Edit</button>
      </span>
    </form>

    <!-- Delete View -->
    <form slot="delete" action="#" method="POST">
      <span class="content color-danger">
        <b>Are you sure?</b> Remove this model?
      </span>
      <span class="actions btn-group">
        <button type="submit" class="btn danger">Delete</button>
        <button type="button" class="btn default" data-toggle="cancel">Cancel</button>
      </span>
    </form>
  </li>
  ...
</ul>
```

### Toggles view with dataset

``` html
<!-- To read view -->
<button data-toggle="read">Read</button>
<!-- Cancel, same as 'read'. -->
<button data-toggle="cancel">Cancel</button>
<!-- To update view -->
<button data-toggle="update">Edit</button>
<!-- To delete view -->
<button data-toggle="delete">Delete</button>
```

## Props

| Name | Type | Default | Description |
| ---- |:----:| ------- | ----------- |
| view | `String` | `'read'` | Default view state. `read` or `update` or `delete`. |

## SCSS variables

``` scss
$simple-crud-min-height: 3em !default;
$simple-crud-padding-x: $space-2 !default;
$simple-crud-margin-bottom: $space-2 !default;
```

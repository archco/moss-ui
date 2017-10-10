# Simple CRUD

> source: [js/components/simple-crud](../../src/js/components/simple-crud.vue)

## Usage

```html
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

## Props

| name | type | description | default |
| ---- | ---- | ----------- | ------- |
| view | String | Default view state. read or update or delete. | 'read' |

## View toggle with dataset

```html
<!-- To read view -->
<button data-toggle="read">Read</button>
<!-- Cancel, same as 'read'. -->
<button data-toggle="cancel">Cancel</button>
<!-- To update view -->
<button data-toggle="update">Edit</button>
<!-- To delete view -->
<button data-toggle="delete">Delete</button>
```

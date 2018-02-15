# Modal

> sources:  
[js/components/modal.vue](../../src/js/components/modal.vue)  
[scss/components/modal.scss](../../src/scss/components/_modal.scss)

### Table of contents

- [Usage](#usage)
  - [Basic](#basic)
  - [with actions](#with-actions)
- [Props](#props)
- [Vue directive](#vue-directive)
- [SCSS variables](#scss-variables)

## Usage

### Basic

``` html
<button class="btn" v-modal:modal01>Modal Open</button>
<modal name="modal01" title="Modal Title">
  <h3>Title</h3>
  <p>...</p>
</modal>
```

### with actions

``` html
<button class="btn" v-modal:modal02>Modal Open</button>
<modal>
  <p>...</p>
  <div slot="actions">
    <!-- modal close action with v-modal directive. -->
    <button class="btn default" v-modal:modal02.close>Cancel</button>
    <!-- or use data-toggle attribute. -->
    <button class="btn default" data-toggle="close">Cancel</button>
    <button class="btn success">Okay</button>
  </div>
</modal>
```

## Props

| Name | Type | Default | Description |
| ---- |:----:| ------- | ----------- |
| name | `String` | required | Key of modal component. |
| title | `String` | `''` | Title text in modal-header. |
| effect | `String` | `'from-top'` | Transition effect name. now only 'from-top'. |
| close-button-html | `String` | `''` | `innerHTML` of close button in modal-header. |
| close-on | `Boolean` | `false` | If true, modal close when if click outside of it. |

## Vue directive

``` html
<button v-modal:{name}.{modifier}>button</button>
```

- `name`: key name of target modal.
- `modifier`
  - no modifiers (default): toggling modal.
  - `show`: show modal.
  - `close`: close modal.

## SCSS Variables

``` scss
$modal-mask-color: rgba(0, 0, 0, .5) !default;
$modal-content-bg-color: $background-color !default;
$modal-header-bg-color: $background-color !default;
$modal-close-button-color: rgba($danger-color, .5) !default;
$modal-close-button-hover-color: rgba($danger-color, 1) !default;
```

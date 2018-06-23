# Modal

> sources:  
[js/components/modal.vue](../../src/js/components/modal.vue)  
[scss/components/modal.scss](../../src/scss/components/_modal.scss)

### Table of contents

- [Usage](#usage)
  - [Basic](#basic)
  - [with actions](#with-actions)
- [Props](#props)
- [Events](#events)
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
  <p>modal contents...</p>
  <div slot="actions">
    <!-- modal close action with v-modal directive. -->
    <button class="btn default" v-modal:modal02.close>Cancel</button>
    <!-- or use data-toggle attribute. -->
    <button class="btn default" data-toggle="close">Cancel</button>
    <button class="btn success">Okay</button>
  </div>
</modal>
```

### Custom header

``` html
<modal>
  <div slot="header" class="modal-header">
    <h3 class="color-primary">My Title</h3>
    <button data-toggle="close">close</button>
  </div>
  <p>modal contents...</p>
</modal>
```

## Props

| Name | Type | Default | Description |
| ---- |:----:| ------- | ----------- |
| name | `String` | required | Key of modal component. |
| title | `String` | `''` | Title text in modal-header. |
| effect | `String` | `''` | Transition effect name. `from-top` or `fade`. If you don't want to the transition effect, please set this value to `''`. |
| close-button-html | `String` | `''` | `innerHTML` value for the close button in the modal-header. |
| close-on | `Boolean` | `false` | If this value true, modal close when click outside of it. |

## Events

| Name | Argument | Description |
| ---- |:--------:| ----------- |
| state | `boolean` | This event occurs when state changed. The argument represents whether to content is shown or not. |

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
$modal-effect-duration: .4s !default;
```

# Close button

> sources:  
[js/components/close-button](../../src/js/components/close-button.vue)  
[scss/components/close-button](../../src/scss/components/_close-button.scss)

### Table of contents

- [Usage](#usage)
  - [Specifying position](#specifying-position)
  - [Specifying target](#specifying-target)
  - [Hook on close event](#hook-on-close-event)
- [Props](#props)
- [Events](#events)
- [SCSS Variables](#scss-variables)

## Usage

``` html
<!-- default. span element will hide when click close-button.  -->
<span>Test Text <close-button /></span>

<!-- specify innerHTML -->
<span>Test Text <close-button>✖<close-button></span>

<!-- span element will remove when click close-button. -->
<span>Element Remove <close-button action="remove" /></span>
```

### Specifying position

``` html
<div>
  <p>...</p>
  <close-button position="top-right" />
</div>
```

### Specifying target

``` html
<div class="target-node">
  <p>
    ...
    <close-button target=".target-node">✖</close-button>
  </p>
</div>
```

### Hook on close event

``` html
<span>Custom close handle
  <!-- This will call 'onClose()' custom method when click close-button. -->
  <close-button action="" @close="onClose()" />
</span>
```

## Props

| Name | Type | Default | Description |
| ---- |:----:| ------- | ----------- |
| position | `String` | `''` (no specified) | '' (no specified) or 'top-right' or 'middle-right' |
| action | `String` | `hide` | `hide` or `remove` or `''` (no-action) |
| target | `String` | `''` (parentNode) | `''` or selector |
| related | `Boolean` | `false` | If true, parent node position sets `relative`. |

## Events

| name | args | description |
| ---- | ---- | ----------- |
| close | `HTMLElement` (closing target) | Emit when close-button clicked. |

## SCSS Variables

``` scss
// Not has variables.
```

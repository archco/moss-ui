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
<span>Test Text <close-button>✖</close-button></span>
<span>Element Remove <close-button action="remove">✖</close-button></span>
```

### Specifying position

``` html
<div>
  <p>...</p>
  <close-button position="top-right" parent-to-relative>
    ✖
  </close-button>
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
  <!-- This will call 'onClose()' custom method when close-button clicked.  -->
  <close-button action="" @close="onClose()">✖</close-button>
</span>
```

## Props

| Name | Type | Default | Description |
| ---- |:----:| ------- | ----------- |
| position | `String` | `''` (no specified) | '' (no specified) or 'top-right' or 'middle-right' |
| action | `String` | `hide` | `hide` or `remove` or `''` (no-action) |
| target | `String` | `''` (parentNode) | `''` or selector |
| parent-to-relative | `Boolean` | `false` | If true, parent node position sets `relative`. |

## Events

| name | args | description |
| ---- | ---- | ----------- |
| close | - | Emit when close-button clicked. |

## SCSS Variables

``` scss
$close-button-color: rgba(#000, .3) !default;
```

# Close button

> source: [js/components/close-button](../../src/js/components/close-button.vue)

## Usage

### Basic

```html
<span>Test Text <close-button>✖</close-button></span>
<span>Element Remove <close-button action="remove">✖</close-button></span>
```

### Specifying position

```html
<div>
  <p>...</p>
  <close-button
    position="top-right"
    parent-relatived>
    ✖
  </close-button>
</div>
```

### Specifying target

```html
<div class="target-node">
  <p>
    ...
    <close-button target=".target-node">✖</close-button>
  </p>
</div>
```

### Hook on close event

```html
<span>Custom close handle
  <!-- This will call 'onClose()' custom method when close-button clicked.  -->
  <close-button action="" @close="onClose()">✖</close-button>
</span>
```

## Props

| name | type | description | default |
| ---- | ---- | ----------- | ------- |
| position | String | '' (no specified) or 'top-right' or 'middle-right' | '' |
| action | String | hide or remove or '' (no-action) | 'hide' |
| target | String | '' (parentNode) or selector | '' |
| parent-relatived | Boolean | If it true, parent node's style position is set 'relative'. | false |

## Events

| name | args | description |
| ---- | ---- | ----------- |
| close | - | Emit when close-button clicked. |

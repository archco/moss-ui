# Switch

> sources:  
[js/components/input-check](../../src/js/components/input-check.vue)  
[scss/components/input-check](../../src/scss/components/_input-check.scss)
[js/components/input-radio](../../src/js/components/input-radio.vue)  
[scss/components/input-radio](../../src/scss/components/_input-radio.scss)

### Table of contents

- [Usage](#usage)
- [Props](#props)
- [SCSS variables](#scss-variables)

## Usage

``` html
<!-- input-check -->
<input-check name="is-small" v-model="isSmall">small</input-check>

<!-- input-radio -->
<input-radio name="input-radio" value="small" v-model="inputRadio">small</input-radio>

<!-- Toggle style -->
<input-check class="toggle" name="use-toggle">Toggle</input-check>
<input-radio class="toggle" name="toggle-radio" value="male">Male</input-radio>
```

## Props

### input-check

| Name | Type | Default | Description |
| ---- |:----:| ------- | ----------- |
| id | `String` | auto (e.g. "input-check-id-1") | The id attribute for `<input>`. |
| name | `String` | `null` | The name attribute for `<input>`. |
| value | `String` | `null` | The value attribute for `<input>`. |
| class-name | `String` | `null` | The class attribute for `<input>`. |
| checked | `Boolean` | `false` | The checked attribute for `<input>`. |
| required | `Boolean` | `false` | The required attribute for `<input>`. |

### input-radio

| Name | Type | Default | Description |
| ---- |:----:| ------- | ----------- |
| id | `String` | auto (e.g. "input-radio-id-1") | The id attribute for `<input>`. |
| name | `String` | `null` | The name attribute for `<input>`. |
| value | `String` | `null` | The value attribute for `<input>`. |
| class-name | `String` | `null` | The class attribute for `<input>`. |
| checked | `Boolean` | `false` | The checked attribute for `<input>`. |
| required | `Boolean` | `false` | The required attribute for `<input>`. |

## SCSS variables

``` scss
$input-switch-stroke-color: $text-color-light !default;
$input-switch-fill-color: $primary-color !default;
$input-switch-border-width: .0625em !default;
$input-switch-border-color: $background-color !default;
$input-switch-focus-color: $primary-color !default;
$input-switch-base-size: 1em !default;
$input-toggle-bg-color: $background-color !default;
$input-toggle-border-color: $border-color !default;
$input-toggle-active-color: $primary-color !default;
$input-toggle-transition-time: $transition-time !default;
```

# Tabs

> sources:  
[js/components/tabs](../../src/js/components/tabs.vue)  
[js/components/tab](../../src/js/components/tab.vue)  
[scss/components/tab](../../src/scss/components/_tab.scss)

### Table of contents
- [Usage](#usage)
- [Props](#props)
- [SCSS variables](#scss-variables)

## Usage

``` html
<tabs>
  <tab name="tab1" selected>
    <p>Tab contents..</p>
  </tab>
  <tab name="tab2">
    <p>Tab contents..</p>
  </tab>
  <tab name="tab3">
    <p>Tab contents..</p>
  </tab>
</tabs>
```

## Props

### tabs

| Name | Type | Default | Description |
| ---- |:----:| ------- | ----------- |
| effect | `String` | `''` | Transition effect name. `''`(no effect) or `'fade'` |
| align | `String` | `'start'` | \*flex alignment of tab-link. |
| grow-enabled | `Boolean` | `false` | flex-item grow enable on tab-links. |

**Note**: \*flex alignment keywords - `start` `center` `end` `around` `between`

### tab

| Name | Type | Default | Description |
| ---- |:----:| ------- | ----------- |
| name | `String` | required | `textContent` of tab-link. |
| selected | `Boolean` | `false` | If true, this tab is activate. |
| active-color | `String` | `'primary'` | Specifies active tab color. These colors based on [color-set](color-set.md). |

## SCSS variables

``` scss
$tab-font: $font-base !default;
$tab-font-size: 1em !default;
$tab-color: $text-color-weak !default;
$tab-hover-color: darken($tab-color, 15%) !default;
$tab-border-color: $border-color !default;
$tab-border-width: 1px !default;
$tab-active-color: $primary-color !default;
$tab-active-border-width: 3px !default;
$tab-active-font-weight: bold !default;
```

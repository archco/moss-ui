# Collapse

> sources:  
[js/components/collapse](../../src/js/components/collapse.vue)  
[scss/components/collapse](../../src/scss/components/_collapse.scss)

### Table of contents

- [Usage](#usage)
  - [Basic](#basic)
  - [with collapse-toggle](#with-collapse-toggle)
  - [Accordion](#accordion)
- [Props](#props)
- [Directives](#directives)
  - [v-collapse](#v-collapse)
  - [v-accordion](#v-accordion)
- [SCSS variables](#scss-variables)

## Usage

### Basic

``` html
<button class="btn" v-collapse:collapse01>TOGGLE</button>
<collapse id="collapse01">
  <h3>Title</h3>
  <p>...</p>
</collapse>
```

### with collapse-toggle

Available optional class: `with-plus` `with-caret` `with-arrow`

``` html
<div class="collapse-toggle with-plus" v-collapse:test01>TOGGLE</div>
<collapse id="test01">
  <h3>Title</h3>
  <p>...</p>
</collapse>
```

### Accordion

``` html
<ul class="list-group">
  <li>
    <div v-accordion:ac01="'accordion-group'">Accordion One</div>
    <collapse id="ac01" accordion="accordion-group" expanded>
      <h3>Title</h3>
      <p>...</p>
    </collapse>
  </li>
  <li>
    <div v-accordion:ac02="'accordion-group'">Accordion Two</div>
    <collapse id="ac02" accordion="accordion-group">
      <h3>Title</h3>
      <p>...</p>
    </collapse>
  </li>
</ul>
```

## Props

| Name | Type | Default | Description |
| ---- |:----:| ------- | ----------- |
| id | `String` | required | Key of component. |
| expanded | `Boolean` | `false` | If true, content is expanded. |
| accordion | `String` | `''` | Accordion group name. |

## Directives

### v-collapse

The directive for control of collapse component.

``` html
<button v-collapse:{id}.{modifier}>button</button>
```

- `id`: collapse id.
- `modifier`
  - no modifier (default): toggling collapse.
  - `show`: expand content.
  - `hide`: collapse content.

### v-accordion

``` html
<button v-accordion:{id}.{modifier}="'{value}'">button</button>
```

- `id`: accordion id.
- `modifier`
  - no modifier (default): toggling collapse.
  - `show`: expand content.
  - `hide`: collapse content.
- `value`: `String` accordion group name.

## SCSS variables

``` scss
$accordion-border-width: 1px !default;
$accordion-border-color: $border-color !default;
$accordion-head-padding: .5em 1em !default;
$accordion-head-active-bg-color: $primary-color !default;
$accordion-head-active-color: get-contrast($accordion-head-active-bg-color) !default;
$accordion-border-radius: $radius-normal !default;
```

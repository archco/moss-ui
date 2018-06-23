# Collapse

> sources:  
[js/components/collapse](../../src/js/components/collapse.vue)  
[scss/components/collapse](../../src/scss/components/_collapse.scss)

### Table of contents

- [Usage](#usage)
  - [Basic](#basic)
  - [Accordion](#accordion)
  - [Horizontal](#horizontal)
  - [Using collapse-toggle](#using-collapse-toggle)
  - [collapse-toggle class](#collapse-toggle-class)
- [Props](#props)
  - [Props of collapse](#props-of-collapse)
  - [Props of collapse-toggle](#props-of-collapse-toggle)
- [Events](#events)
- [Directives](#directives)
  - [v-collapse](#v-collapse)
  - [v-accordion](#v-accordion)
- [SCSS variables](#scss-variables)

## Usage

### Basic

``` html
<!-- toggling collapse via v-collapse directive. -->
<button class="btn" v-collapse:collapse01>TOGGLE</button>
<!-- or use collapse-toggle component. -->
<div is="collapse-toggle" target="collapse01">TOGGLE</div>

<collapse id="collapse01">
  <h3>Title</h3>
  <p>...</p>
</collapse>
```

### Accordion

``` html
<ul class="list-group">
  <li>
    <div is="collapse-toggle" accordion="accordion-group" target="ac01">Accordion One</div>
    <collapse id="ac01" accordion="accordion-group" expanded>
      <h3>Title</h3>
      <p>...</p>
    </collapse>
  </li>
  <li>
    <div is="collapse-toggle" accordion="accordion-group" target="ac02">Accordion One</div>
    <collapse id="ac02" accordion="accordion-group">
      <h3>Title</h3>
      <p>...</p>
    </collapse>
  </li>
</ul>
```

### Horizontal

``` html
<button v-collapse:target1>TOGGLE</button>

<collapse id="target1" direction="horizontal">...</collapse>
```

#### Horizontal collapse with Grid

``` html
<div class="row">
  <div class="col-3" is="collapse" id="target1" direction="horizontal">
    ...
  </div>
  <div class="col">
    <button v-collapse:target1>TOGGLE</button>
    ...
  </div>
</div>
```

### Using collapse-toggle

> source: [js/components/collapse-toggle](https://github.com/archco/moss-ui/blob/master/src/js/components/collapse-toggle.vue)

This component is a helper for toggling collapse or accordion.

``` html
<!-- toggle collapse. -->
<collapse-toggle target="my-collapse-id">Toggle collapse</collapse-toggle>

<!-- toggle accordion. -->
<collapse-toggle target="my-accordion-id" accordion="accordion-group-name">Toggle accordion</collapse-toggle>

<!-- specifying tag name. -->
<span class="d-inline-block" is="collapse-toggle" tag="span" target="my-collapse-id">Toggle</span>
<button type="button" class="btn" is="collapse-toggle" tag="button" target="my-collapse-id">Toggle</button>
```

## Props

### Props of Collapse

| Name | Type | Default | Description |
| ---- |:----:| ------- | ----------- |
| id | `String` | required | Key of component. |
| expanded | `Boolean` | `false` | If true, content is expanded. |
| accordion | `String` | `''` | Accordion group name. |
| direction | `String` | `'vertical'` | Collapsing direction. `vertical` or `horizontal` |

### Props of Collapse-toggle

| Name | Type | Default | Description |
| ---- |:----:| ------- | ----------- |
| target | `String` | required | Target collapse component's id |
| tag | `String` | `'div'` | tagName of this element. |
| accordion | `String` | `''` | Accordion group name. |

## Events

| Name | Argument | Description |
| ---- |:--------:| ----------- |
| state | [`CollapseState`](#collapsestate) | This event occurs when state changed. |

### CollapseState

``` ts
interface CollapseState {
  id: string;         // collapse id.
  expanded: boolean;  // whether expanded or not.
  accordion: string;  // accordion group name.
}
```

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

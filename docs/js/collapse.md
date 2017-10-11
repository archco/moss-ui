# Collapse

> source: [js/components/collapse](../../src/js/components/collapse.vue)

## Usage

### Basic

```html
<button class="btn" v-collapse:collapse01>TOGGLE</button>
<collapse id="collapse01">
  <h3>Title</h3>
  <p>...</p>
</collapse>
```

### Accordion

```html
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

### Use collapse toggle

Available optional class: `with-plus` `with-caret` `with-arrow`

```html
<div class="collapse-toggle with-plus" v-collpase:test01>TOGGLE</div>
<collapse id="test01">
  <h3>Title</h3>
  <p>...</p>
</collapse>
```

## Props

| name | type | description | default |
| ---- | ---- | ----------- | ------- |
| id | String | key of component. | is required. |
| expanded | Boolean | If true, content is expanded. | false |
| accordion | String | Accordion group name | '' |

## Directives

### v-collapse

The directive for control of collapse component.

```html
<button v-collapse:{id}.{modifier}>button</button>
```

- id: collapse id.
- modifier
  - \[ no modifier \]: toggling collapse.
  - show: expand content.
  - hide: collapse content.

### v-accordion

```html
<button v-accordion:{id}.{modifier}="'{value}'">button</button>
```

- id: collapse id.
- modifier
  - \[ no modifier \]: toggling collapse.
  - show: expand content.
  - hide: collapse content.
- value: accordion group name.

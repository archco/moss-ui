# Tabs

> sources:  
> [js/components/tabs](../../src/js/components/tabs.vue)  
> [js/components/tab](../../src/js/components/tab.vue)

## Usage

```html
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

| name | type | description | default |
| ---- | ---- | ----------- | ------- |
| effect | String | Transition effect name. 'fade' | '' (no effect) |
| align | String | \*flex alignment of tab-link. | 'start' |
| grow-enabled | Boolean | flex-item grow enable on tab-links | false |

**Note**: \*flex alignment keywords - `start` `center` `end` `around` `between`

### tab

| name | type | description | default |
| ---- | ---- | ----------- | ------- |
| name | String | Tab link's text. | is required |
| selected | Boolean | Active this tab. | false |
| active-color | String | Active color of Tab link. This colors based on [color-set](color-set.md). | '' (primary-color) |

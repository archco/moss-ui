# Search

> This component uses [fuse.js](https://github.com/krisk/fuse) and [popper.js](https://github.com/FezVrasta/popper.js/)  
> sources:  
[js/components/search](https://github.com/archco/moss-ui/blob/master/src/js/components/search.vue)  
[scss/components/search](https://github.com/archco/moss-ui/blob/master/src/scss/components/_search.scss)

Simple search component that fuzzy search given collection data such like json.

### Table of contents

- [Usage](#usage)
  - [Default](#default)
  - [Customize of result item rendering](#customize-of-result-item-rendering)
  - [Set Suggestions](#set-suggestions)
- [Props](#props)
- [Events](#events)
- [SCSS Variables](#scss-variables)

## Usage

### Default

``` json
// countries.json
[
  {
    "_id": 1,
    "name": "United States",
    "capital": "Washington, D.C",
    "language": "English"
  },
  {
    "_id": 2,
    "name": "China",
    "capital": "Beijing",
    "language": "Chinese"
  },
]
```

``` html
<!-- in html -->
<search :collection="countries"
  :search-options="{ keys: ['name', 'capital']}"
  :result-limit="5"
  auto-width
/>
```

### Customize of result item rendering

> This function is powered by [scoped slots](https://vuejs.org/v2/guide/components.html#Scoped-Slots)

``` html
<search :collection="myCollection"
  :search-options="mySearchOptions"
  @item-clicked="onSearchItemClick"
  @submit="onSearchSubmit">
  <li slot="result-item"
    slot-scope="props"
    class="my-item"
    tabindex="0"
    @click="props.onClickItem(props.item)">
    <h3>{{ props.item.title }}</h3>
    <p>{{ props.item.description }}</p>
  </li>
</search>
```

#### Caveat

- `tabindex="0"` attribute is required for key navigation on result-list.
- `@click="props.onClickItem(props.item)"` attribute is required for emit `item-clicked` event.

### Set Suggestions

In addition, This component can also be used to display search-suggestions via AJAX without using fuse.js.

``` html
<!-- If you not specifying `collection` prop, than this component will be not used the fuse.js. -->
<search @input-change="onInputChange">
  ...
</search>
```

``` js
function onInputChange({ input, vnode }) {
  axios.get('search', { params: { input } })
    .then(({ data }) => {
      vnode.suggestions = data.results;
    });
}
```

## Props

| Name | Type | Default | Description |
| ---- |:----:| ------- | ----------- |
| collection | `any[]` | `[]` | A data collection that target for searching. |
| search-options | `object` | `{}` | Search options for [fuse.js](http://fusejs.io/#live-demo) |
| popper-options | `object` | `{}` | Options for [popper.js](https://github.com/FezVrasta/popper.js/blob/master/docs/_includes/popper-documentation.md#Popper.Defaults) |
| input-placeholder | `string` | `''` | The `placeholder` attribute for search input. |
| result-limit | `number` | `0` | Limits count of result-items. If set 0, no limit. |
| auto-width | `boolean` | `false` | Auto-width style on result-list if this value true. |

## Events

| Name | Argument | Description |
| ---- |:--------:| ----------- |
| item-clicked | item: `object` - An object of `collection`. | This event occurs when click on result item. |
| submit | data: [`SubmitData`](#submit-data) | This event occurs when submit on search form. |
| input-change | data: [`InputData`](#input-data) | This event occurs when search-input are changed. |

### Submit Data

``` ts
interface SubmitData {
  input: string; // value of search input.
  result: any[]; // array of result items.
}
```

### Input Data

``` ts
interface InputData {
  input: string; // value of search input.
  vnode: VNode;  // search component.
}
```

## SCSS Variables

``` scss
$search-button-bg-color: $primary-color !default;
$search-result-border-width: 1px !default;
$search-result-border-color: $border-color !default;
$search-result-bg-color: $background-color !default;
$search-result-item-focus-color: $shade-color !default;
```

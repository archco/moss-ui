# Search

> sources:  
js/components/search  
scss/components/search  
> This component uses [fuse.js](https://github.com/krisk/fuse) and [popper.js](https://github.com/FezVrasta/popper.js/)

Simple search component that fuzzy search given collection data such like json.

### Table of contents

- [Usage](#usage)
  - [Default](#default)
  - [Customize of result item rendering](#customize-of-result-item-rendering)
- [Props](#props)
- [Events](#events)
- [SCSS Variables](#scss-variables)

## Usage

### Default

Collection

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
  ...
]
```

``` html
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

## Props

| Name | Type | Default | Description |
| ---- |:----:| ------- | ----------- |
| collection | `any[]` | `[]` | A data collection that target for searching. |
| search-options | `object` | `{}` | Search options for [fuse.js](http://fusejs.io/#live-demo) |
| popper-options | `object` | `{}` | Options for [popper.js](https://github.com/FezVrasta/popper.js/blob/master/docs/_includes/popper-documentation.md#Popper.Defaults) |
| result-limit | `number` | `0` | Limits count of result-items. If set 0, no limit. |
| auto-width | `boolean` | `false` | Auto-width style on result-list if this value true. |

## Events

#### `item-clicked`

- This event occurs when click on result item.
- Argument: `item` of `collection`.

#### `submit`

- This event occurs when submit on search form.
- Argument
  ``` js
  const data = {
    input: '',  // value of search input.
    result: [], // array of result items.
  };
  ```

## SCSS Variables

``` scss
$search-button-bg-color: $primary-color !default;
$search-result-border-width: 1px !default;
$search-result-border-color: $border-color !default;
$search-result-bg-color: $background-color !default;
$search-result-item-focus-color: $shade-color !default;
```

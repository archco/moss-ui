# Tree Item
> source: [js/components/tree-item](../src/js/components/tree-item.vue)

## Usage
#### Data Structure
```javascript
const treeData = {
  name: 'first-level',
  children: [
    { name: 'second-level-item1' },
    { name: 'second-level-item2' },
    {
      name: 'second-level-item3',
      children: [
        { name: '3rd-level-item1' },
        { name: '3rd-level-item2' },
      ],
    },
  ],
};
```

#### Basic
```html
<ul class="tree-list">
  <li is="tree-item" :model="treeData"></li>
</ul>

<!-- '.no-pad' will remove padding-left of <li>. -->
<ul class="tree-list no-pad">
  <li is="tree-item" :model="treeData"></li>
</ul>
```

#### Model name as HTML
```javascript
// Data Structure.
const treeData2 = {
  name: '<a href="./index.html">MOSS-UI</a>',
  children: [
    { name: '<a href="./scss.html">SCSS</a>' },
    { name: '<a href="./vue.html">Vue</a>' },
    {
      name: '<a href="./js-libraries.html">JS Libraries</a>',
      children: [
        { name: '<a href="./js-libraries.html#color">Color</a>' },
        { name: '<a href="./js-libraries.html#elementutil">ElementUtil</a>' },
        { name: '<a href="./js-libraries.html#util">Util</a>' },
      ],
    },
  ],
};
```

#### Set Icon
```html
<ul class="tree-list">
  <li is='tree-item' :model='treeData' opened-html='[-] ' closed-html='[+] '></li>
</ul>
```

## Props

| name | type | description | default |
| ---- | ---- | ----------- | ------- |
| model | Object | Data model. | is required. |
| opened-html | String | Icon of tree-item, It will show if opened. | `'<i class="fa fa-angle-down fa-fw" aria-hidden="true"></i>'` (font-awesome icon) |
| closed-html | String | Icon of tree-item, It will show if closed. | `'<i class="fa fa-angle-right fa-fw" aria-hidden="true"></i>'` (font-awesome icon) |

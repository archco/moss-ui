# Tree

> Sources:  
> [js/components/tree](../../src/js/components/tree.vue)  
> [js/components/tree-item](../../src/js/components/tree-item.vue)

## Usage

### Data Structure

``` js
const treeData = [
  // list-item.
  { name: 'item1' },
  // list-item that has children items.
  {
    name: 'item2',
    items: [
      { name: 'item2-1' },
      {
        name: 'item2-2',
        // If 'opened' property is true, then this item will open when loaded. default is false.
        opened: true,
        items: [
          { name: 'item2-2-1' },
        ],
      },
    ],
  },
];
```

### Basic

``` html
<ul is="tree" :items="treeData"></ul>

<!-- '.no-pad' will remove padding-left of <li>. -->
<ul class="no-pad" is="tree" :items="treeData"></ul>
```

### Item name as HTML

``` js
// Data Structure.
const treeData2 = {
  name: '<a href="./index.html">MOSS-UI</a>',
  items: [
    { name: '<a href="./scss.html">SCSS</a>' },
    { name: '<a href="./vue.html">Vue</a>' },
    {
      name: '<a href="./js-libraries.html">JS Libraries</a>',
      items: [
        { name: '<a href="./js-libraries.html#color">Color</a>' },
        { name: '<a href="./js-libraries.html#element-util">ElementUtil</a>' },
        { name: '<a href="./js-libraries.html#util">Util</a>' },
      ],
    },
  ],
};
```

### Set Icon

``` html
<ul is="tree" :items="treeData" opened-html='[-] ' closed-html='[+] '></ul>
```

## Props

| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| items | `Array` | `[]` | Item array. |
| opened | `Boolean` | `false` | Whether all children item is open or not. |
| opened-html | `String` | `'<i class="fas fa-angle-down"></i>'` (font-awesome icon) | Icon of tree-item, It will show if opened. |
| closed-html | `String` | `'<i class="fas fa-angle-right"></i>'` (font-awesome icon) | Icon of tree-item, It will show if closed. |

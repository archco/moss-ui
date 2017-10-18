# Tree

> Sources:  
> [js/components/tree](../../src/js/components/tree.vue)  
> [js/components/tree-item](../../src/js/components/tree-item.vue)

## Usage

### Data Structure

```javascript
const treeData = [
  { name: 'item1' },
  {
    name: 'item2',
    items: [
      { name: 'item2-1' },
      {
        name: 'item2-2',
        items: [
          { name: 'item2-2-1' },
        ],
      },
    ],
  },
];
```

### Basic

```html
<ul is="tree" :items="treeData"></ul>

<!-- '.no-pad' will remove padding-left of <li>. -->
<ul class="no-pad" is="tree" :items="treeData"></ul>
```

### Item name as HTML

```javascript
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
        { name: '<a href="./js-libraries.html#elementutil">ElementUtil</a>' },
        { name: '<a href="./js-libraries.html#util">Util</a>' },
      ],
    },
  ],
};
```

### Set Icon

```html
<ul is="tree" :items="treeData" opened-html='[-] ' closed-html='[+] '></ul>
```

## Props

| name | type | description | default |
| ---- | ---- | ----------- | ------- |
| items | Array | Item array. | \[\] |
| opened-html | String | Icon of tree-item, It will show if opened. | `'<i class="fa fa-angle-down fa-fw" aria-hidden="true"></i>'` (font-awesome icon) |
| closed-html | String | Icon of tree-item, It will show if closed. | `'<i class="fa fa-angle-right fa-fw" aria-hidden="true"></i>'` (font-awesome icon) |

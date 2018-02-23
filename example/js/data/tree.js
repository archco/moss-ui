export const treeData = [
  {
    name: 'MOSS-UI',
    items: [
      { name: 'SCSS' },
      { name: 'Vue' },
      {
        name: 'JS Libraries',
        items: [
          { name: 'Color' },
          { name: 'ElementUtil' },
          { name: 'Util' },
        ],
      },
    ],
  },
];

export const treeData2 = [
  {
    name: '<a href="./index.html">MOSS-UI</a>',
    opened: true,
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
  },
];

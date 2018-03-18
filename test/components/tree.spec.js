import { createLocalVue, shallow } from '@vue/test-utils';
import Tree from '../../src/js/components/tree.vue';
import TreeItem from '../../src/js/components/tree-item.vue';

const treeData = [
  // list-item.
  {
    name: 'item1',
    items: [
      { name: 'item1-1' },
      { name: 'item1-2' },
      { name: 'item1-3' },
    ],
  },
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

const treeItemData = {
  name: 'item1',
  items: [
    { name: 'item1-1' },
    { name: 'item1-2' },
    { name: 'item1-3' },
  ],
};

describe('#Tree', () => {
  it('can mount.', () => {
    const wrapper = shallow(Tree, {
      propsData: {
        items: treeData,
      },
      attachToDocument: true,
    });

    expect(wrapper.vm.items.length).toBe(2);
    expect(wrapper.vm.items[1].items[1].opened).toBe(true);
  });
});

describe('#TreeItem', () => {
  const localVue = createLocalVue();

  localVue.component('tree', Tree);

  const wrapper = shallow(TreeItem, {
    localVue,
    propsData: {
      item: treeItemData,
    },
    attachToDocument: true,
  });

  it('can mount.', () => {
    expect(wrapper.vm.item.items.length).toBe(3);
    expect(wrapper.vm.open).toBe(false);
  });

  it('toggle opened items by click.', () => {
    wrapper.find('li > div.tree-item').trigger('click');
    expect(wrapper.vm.open).toBe(true);
  });
});

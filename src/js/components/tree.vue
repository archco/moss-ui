<template lang="html">
  <ul class="tree-list">
    <li is="tree-item"
      v-for="item in items"
      :key="item.name"
      :item="item"
      :opened-html="openedHtml"
      :closed-html="closedHtml">
    </li>
  </ul>
</template>

<script>
import TreeItem from './tree-item.vue';
import { arrowRight, arrowDown } from '../../svg';

export default {
  components: { TreeItem },
  props: {
    items: {
      type: Array,
      default() {
        return [];
      },
    },
    opened: {
      type: Boolean,
      default: false,
    },
    openedHtml: {
      type: String,
      default: `<i class="icon">${arrowDown}</i>`,
    },
    closedHtml: {
      type: String,
      default: `<i class="icon">${arrowRight}</i>`,
    },
  },
  mounted() {
    if (this.opened) this.openTreeItems(this.$children);
  },
  methods: {
    openTreeItems(children) {
      children.forEach(component => {
        let tag = component.$vnode.componentOptions.tag;
        if (tag == 'tree' || tag == 'tree-item') {
          this.openTreeItems(component.$children);
          if (tag == 'tree-item') component.open = true;
        }
      });
    },
  },
}
</script>

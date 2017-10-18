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

export default {
  name: 'tree',
  components: { TreeItem },
  props: {
    items: {
      type: Array,
      default() {
        return [];
      },
    },
    openedHtml: {
      type: String,
      default: '<i class="fa fa-angle-down fa-fw" aria-hidden="true"></i>',
    },
    closedHtml: {
      type: String,
      default: '<i class="fa fa-angle-right fa-fw" aria-hidden="true"></i>',
    },
  },
}
</script>

<template lang="html">
  <li>
    <div :class="itemClass" @click="toggle">
      <span
        v-if="hasItems"
        v-html="open ? openedHtml : closedHtml">
      </span>
      <span v-html="item.name"></span>
    </div>
    <ul
      is="tree"
      v-show="open"
      v-if="hasItems"
      :items="item.items"
      :opened-html="openedHtml"
      :closed-html="closedHtml">
    </ul>
  </li>
</template>

<script>
import Tree from './tree.vue';

export default {
  name: 'tree-item',
  components: [Tree],
  props: {
    item: {
      type: Object,
      required: true,
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
  data() {
    return {
      open: false,
    };
  },
  computed: {
    hasItems() {
      return this.item.items && this.item.items.length;
    },
    itemClass() {
      return {
        'tree-item': true,
        'has-items': this.hasItems,
      };
    },
  },
  methods: {
    toggle() {
      if (this.hasItems) {
        this.open = !this.open;
      }
    },
  },
}
</script>

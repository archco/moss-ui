<template lang="html">
  <li>
    <div :class="itemClass" @click="toggle">
      <span
        v-if="hasItems"
        v-html="open ? openedIcon : closedIcon">
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
import { makeIconHtml } from '../lib/util';

export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
    openedHtml: {
      type: String,
      default: '',
    },
    closedHtml: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      open: this.item.opened ? true : false,
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
    openedIcon() {
      return this.openedHtml || makeIconHtml('arrow-down');
    },
    closedIcon() {
      return this.closedHtml || makeIconHtml('arrow-right');
    }
  },
  methods: {
    toggle() {
      if (this.hasItems) this.open = !this.open;
    },
  },
}
</script>

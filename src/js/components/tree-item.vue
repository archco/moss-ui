<template lang="html">
  <li>
    <div :class="itemClass" @click="toggle">
      <span
      v-if="isFolder"
      v-html="open ? openedHtml : closedHtml">
      </span><span v-html="model.name"></span>
    </div>
    <ul class="tree-list" v-show="open" v-if="isFolder">
      <tree-item
      v-for="model in model.children"
      :key="model.name"
      :model="model"
      :opened-html="openedHtml"
      :closed-html="closedHtml">
      </tree-item>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'tree-item',
  props: {
    model: {
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
    isFolder() {
      return this.model.children && this.model.children.length;
    },
    itemClass() {
      return {
        'tree-item': true,
        'is-folder': this.isFolder,
      };
    },
  },
  methods: {
    toggle() {
      if (this.isFolder) {
        this.open = !this.open;
      }
    },
  },
}
</script>

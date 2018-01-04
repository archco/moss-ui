<template lang="html">
  <button type="button"
    :class="classObject"
    @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
import ElementUtil from 'element-util';

export default {
  name: 'close-button',
  props: {
    position: {
      type: String,
      default: '', // '' (no specified) | top-right | middle-right
    },
    action: {
      type: String,
      default: 'hide', // hide | remove | '' (no-action)
    },
    target: {
      type: String,
      default: '', // '' (parentNode) | selector
    },
    parentToRelative: {
      type: Boolean,
      default: false, // If it true, parent node's style position is set 'relative'.
    }
  },
  data() {
    return {
      classObject: {
        'close-button': true,
        'at-corner': this.position == 'top-right',
        'at-right-middle': this.position == 'middle-right',
      }
    };
  },
  mounted() {
    if (this.parentToRelative) {
      this.$el.parentNode.style.position = 'relative';
    }
  },
  methods: {
    onClick(event) {
      this.$emit('close');
      if (!this.action) return;

      let target = (this.target)
        ? ElementUtil.findAncestor(event.target, this.target)
        : event.target.parentNode;

      if (this.action == 'hide') {
        ElementUtil.hide(target);
      } else if (this.action == 'remove') {
        target.parentNode.removeChild(target);
      }
    }
  }
}
</script>

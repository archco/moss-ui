<template lang="html">
  <button type="button"
    :class="classObject"
    @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
import ElementUtil from 'element-util';
import IconMixin from '../mixins/icon';

export default {
  mixins: [IconMixin],
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
    related: {
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
    if (this.related || this.position !== '') {
      this.$el.parentNode.style.position = 'relative';
    }
    if (this.$el.innerHTML === '') {
      // Appends 'close' icon if default slot is empty.
      this.$el.appendChild(this.makeIcon('close'));
    }
  },
  methods: {
    onClick(event) {
      const btn = event.currentTarget;
      const target = this.target
        ? ElementUtil.findAncestor(btn, this.target)
        : btn.parentNode;

      this.$emit('close', target);
      if (this.action == 'hide') {
        ElementUtil.hide(target);
      } else if (this.action == 'remove') {
        target.parentNode.removeChild(target);
      }
    }
  }
}
</script>

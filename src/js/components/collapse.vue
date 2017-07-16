<template lang="html">
  <transition name="collapsing"
    @enter="enter"
    @afterEnter="clearHeight"
    @leave="leave"
    @afterLeave="clearHeight">
    <div v-show="show">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
import { EventBus } from '../lib/event-bus';

export default {
  name: 'collapse',
  props: {
    id: {
      type: String,
      required: true,
    },
    expanded: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      show: this.expanded,
    };
  },
  methods: {
    enter(el) {
      el.style.maxHeight = 'none';
      const realHeight = window.getComputedStyle(el).height;
      el.style.maxHeight = '0px';
      el.offsetHeight; // Force repaint
      el.style.maxHeight = realHeight;
    },
    leave(el) {
      el.style.maxHeight = 'none';
      const realHeight = window.getComputedStyle(el).height;
      el.style.maxHeight = realHeight;
      el.offsetHeight; // Force repaint
      el.style.maxHeight = '0px';
    },
    clearHeight(el) {
      el.style.maxHeight = null;
    },
    toggleCollapse(id, action = 'toggle') {
      if (id !== this.id) return;
      action = action.toLowerCase();
      if (action === 'show') {
        this.show = true;
      } else if (action === 'hide') {
        this.show = false;
      } else {
        this.show = !this.show;
      }
    }
  },
  beforeMount() {
    EventBus.$on('collapse-toggle', this.toggleCollapse.bind(this));
  }
}
</script>

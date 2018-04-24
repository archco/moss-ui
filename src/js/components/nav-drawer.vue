<template>
  <collapse class="nav-drawer"
    :id="id"
    direction="horizontal"
    ref="collapse"
    @state="onStateChange">
    <slot></slot>
  </collapse>
</template>

<script>
import { addOuterListener } from 'element-util';
import Collapse from './collapse.vue';

export default {
  components: { Collapse },
  props: ['id'],
  computed: {
    shown() {
      return this.$refs.collapse.show;
    },
  },
  mounted() {
    addOuterListener(
      document.documentElement,
      this.$el,
      'click',
      this.onOtherClick.bind(this),
      true,
    );
  },
  methods: {
    onOtherClick() {
      if (this.shown) this.close();
    },
    open() {
      this.$refs.collapse.toggleCollapse(this.id, 'show');
    },
    close() {
      this.$refs.collapse.toggleCollapse(this.id, 'close');
    },
    onStateChange(state) {
      this.$emit('state', state);
    }
  }
}
</script>

<template>
  <collapse class="nav-drawer"
    :id="id"
    direction="horizontal"
    ref="collapse">
    <slot></slot>
  </collapse>
</template>

<script>
import { addOuterListener } from 'element-util';

export default {
  props: ['id'],
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
      const c = this.$refs.collapse;
      if (c.show) c.toggleCollapse(this.id, 'close');
    }
  }
}
</script>

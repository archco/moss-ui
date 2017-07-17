<template lang="html">
  <button type="button" :class="classObject">
    <div class="icon-bar1" :style="barStyle"></div>
    <div class="icon-bar2" :style="barStyle"></div>
    <div class="icon-bar3" :style="barStyle"></div>
  </button>
</template>

<script>
export default {
  name: 'navbar-toggle',
  props: {
    opened: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: '',
    },
  },
  computed: {
    classObject() {
      return {
        'navbar-toggle': true,
        change: this.opened,
      };
    },
    barStyle() {
      return {
        backgroundColor: (this.color) ? this.color : null,
      };
    }
  },
}
</script>

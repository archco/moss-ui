<template>
  <div v-show="isActive"><slot></slot></div>
</template>

<script>
export default {
  name: 'tab',
  props: {
    name: {
      type: String,
      required: true,
    },
    selected: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      isActive: this.selected,
    };
  }
}
</script>

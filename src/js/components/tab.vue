<template>
  <transition :name="effectName">
    <div v-show="isActive"><slot></slot></div>
  </transition>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    selected: {
      type: Boolean,
      default: false,
    },
    activeColor: {
      type: String,
      default: '',
    }
  },
  data() {
    return {
      isActive: this.selected,
      effectName: '',
    };
  }
}
</script>

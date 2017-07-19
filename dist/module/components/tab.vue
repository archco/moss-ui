<template>
  <transition :name="effectName">
    <div v-show="isActive"><slot></slot></div>
  </transition>
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
    },
    tipColor: {
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

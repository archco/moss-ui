<template lang="html">
  <transition :name="effectName">
    <div :class="classObject" v-if="show">
      <slot></slot>
      <button type="button" class="close-button at-right-middle" @click="onClose" v-html="closeHtml"></button>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'message',
  props: {
    status: {
      type: String,
      default: '',
    },
    effect: {
      type: String,
      default: 'fade',
    },
    closeEmit: {
      type: String,
      default: '',
    },
    closeHtml: {
      type: String,
      default: '✖',
    }
  },
  computed: {
    effectName() {
      return `message-${this.effect}`;
    }
  },
  data() {
    let classObject = { 'message': true };
    if (this.status) classObject[`${this.status.toLowerCase()}`] = true;

    return {
      classObject,
      show: true,
    };
  },
  methods: {
    onClose() {
      if (this.closeEmit) {
        this.$emit(this.closeEmit, this);
      } else {
        this.show = false;
      }
    }
  }
}
</script>

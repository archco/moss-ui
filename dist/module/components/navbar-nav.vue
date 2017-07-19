<template lang="html">
  <ul :class="classObject">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'navbar-nav',
  props: {
    align: {
      type: String,
      default: '',
    }
  },
  computed: {
    classObject() {
      let obj = {'navbar-nav': true};
      if (this.align) obj[`justify-content-${this.align}`] = true;
      return obj;
    }
  }
}
</script>

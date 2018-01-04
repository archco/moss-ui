<template lang="html">
  <a :href="href" :class="classObject">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'navbar-brand',
  props: {
    href: {
      type: String,
      default: '/',
    },
    type: {
      type: String,
      default: 'text', // text | image
    },
  },
  computed: {
    classObject() {
      let obj = { 'navbar-brand': true };
      if (this.isText) obj['text'] = true;
      return obj;
    },
    isText() {
      return this.type.toLowerCase() === 'text';
    },
  },
}
</script>

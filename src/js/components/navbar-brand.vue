<template lang="html">
  <a :href="href" :class="classObject">
    {{ text }}
    <slot></slot>
  </a>
</template>

<script>
import NodeUtil from '../mixins/node-util';

export default {
  name: 'navbar-brand',
  mixins: [ NodeUtil ],
  props: {
    href: {
      type: String,
      default: '/',
    },
    type: {
      type: String,
      default: 'image', // image | text
    }
  },
  computed: {
    classObject() {
      let obj = { 'navbar-brand': true };
      if (this.type.toLowerCase() == 'text') obj['text'] = true;
      return obj;
    }
  },
  data() {
    return {
      text: '',
    };
  },
  mounted() {
    if (this.type.toLowerCase() == 'text') {
      this.text = this.getChildrenTextContent(this.$slots.default);
      this.clearChildren(this.$slots.default);
    }
  }
}
</script>

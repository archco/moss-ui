<template lang="html">
  <li class="nav-item">
    <a :href="href"
      class="nav-link"
      v-if="hasHref">
      {{ linkText }}
    </a>
    <slot></slot>
  </li>
</template>

<script>
import NodeUtil from '../mixins/node-util';

export default {
  name: 'nav-item',
  mixins: [NodeUtil],
  props: {
    href: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    }
  },
  computed: {
    hasHref() {
      return this.href !== '';
    }
  },
  data() {
    return {
      linkText: this.text,
    };
  },
  methods: {
    convertLinkText() {
      if (this.hasHref && this.$slots.default) {
        this.linkText = this.getChildrenTextContent(this.$slots.default);
        this.clearChildren(this.$slots.default);
        this.$slots.default = [];
      }
    },
  },
  mounted() {
    this.convertLinkText();
  },
}
</script>

<template lang="html">
  <div class="scroll-to-container">
    <button
      type="button"
      class="scroll-to-top"
      v-if="!disableTop"
      v-show="showToTop"
      @click.prevent="toTop"
      v-html="topHtml"></button>
    <button
      type="button"
      class="scroll-to-bottom"
      v-if="!disableBottom"
      v-show="showToBottom"
      @click.prevent="toBottom"
      v-html="bottomHtml"></button>
  </div>
</template>

<script>
import Util from '../lib/util';

export default {
  name: 'scroll-to',
  props: {
    duration: {
      type: Number,
      default: 600,
    },
    easing: {
      type: String,
      default: 'easeOutCubic',
    },
    offset: {
      type: Number,
      default: 0,
    },
    topHtml: {
      type: String,
      default: '↑',
    },
    bottomHtml: {
      type: String,
      default: '↓',
    },
    disableTop: {
      type: Boolean,
      default: false,
    },
    disableBottom: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      showToTop: true,
      showToBottom: true,
    };
  },
  methods: {
    toTop() {
      Util.scrollIt(0, this.duration, this.easing);
    },
    toBottom() {
      Util.scrollIt(Util.getDocumentBottom(), this.duration, this.easing);
    },
    onScroll() {
      this.showToTop = Util.getScrollTop() >= this.offset;
      this.showToBottom = Util.getScrollBottom() >= this.offset;
    }
  },
  mounted() {
    if (this.offset) {
      window.addEventListener('scroll', this.onScroll.bind(this));
      this.onScroll(); // invoke once.
    }
  }
}
</script>

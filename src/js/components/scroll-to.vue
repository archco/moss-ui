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
import ElementMeasurer from 'element-measurer';

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
      docSize: new ElementMeasurer(),
    };
  },
  methods: {
    toTop() {
      Util.scrollIt(0, this.duration, this.easing);
    },
    toBottom() {
      Util.scrollIt(this.docSize.maxScrollTop, this.duration, this.easing);
    },
    onScroll() {
      this.showToTop = this.docSize.scrollTop >= this.offset;
      this.showToBottom = (this.docSize.maxScrollTop - this.docSize.scrollTop)
        >= this.offset;
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

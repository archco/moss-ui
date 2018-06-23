<template lang="html">
  <div class="scroll-button-container">
    <button
      type="button"
      class="scroll-button-top"
      v-if="!disableTop"
      v-show="showToTop"
      @click.prevent="toTop"
      v-html="topIcon"></button>
    <button
      type="button"
      class="scroll-button-bottom"
      v-if="!disableBottom"
      v-show="showToBottom"
      @click.prevent="toBottom"
      v-html="bottomIcon"></button>
  </div>
</template>

<script>
import ElementMeasurer from 'element-measurer';
import { scrollTo, makeIconHtml } from '../lib/util';

export default {
  props: {
    duration: {
      type: Number,
      default: 600,
    },
    easing: {
      type: String,
      default: 'easeInOut',
    },
    offset: {
      type: Number,
      default: 0,
    },
    topHtml: {
      type: String,
      default: '',
    },
    bottomHtml: {
      type: String,
      default: '',
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
  computed: {
    topIcon() {
      return this.topHtml || makeIconHtml('arrow-up');
    },
    bottomIcon() {
      return this.bottomHtml || makeIconHtml('arrow-down');
    },
  },
  data() {
    return {
      showToTop: true,
      showToBottom: true,
      docSize: new ElementMeasurer(),
    };
  },
  mounted() {
    if (this.offset) {
      window.addEventListener('scroll', this.onScroll.bind(this));
      this.onScroll(); // for initialize.
    }
  },
  methods: {
    toTop() {
      scrollTo(0, { duration: this.duration, easing: this.easing });
    },
    toBottom() {
      scrollTo(this.docSize.maxScrollTop, { duration: this.duration, easing: this.easing });
    },
    onScroll() {
      this.showToTop = this.docSize.scrollTop >= this.offset;
      this.showToBottom = (this.docSize.maxScrollTop - this.docSize.scrollTop)
        >= this.offset;
    }
  }
}
</script>

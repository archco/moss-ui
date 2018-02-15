<template lang="html">
  <div class="scroll-to-container">
    <button
      type="button"
      class="scroll-to-top"
      v-if="!disableTop"
      v-show="showToTop"
      @click.prevent="toTop"
      v-html="topContent"></button>
    <button
      type="button"
      class="scroll-to-bottom"
      v-if="!disableBottom"
      v-show="showToBottom"
      @click.prevent="toBottom"
      v-html="bottomContent"></button>
  </div>
</template>

<script>
import { scrollIt } from '../lib/util';
import ElementMeasurer from 'element-measurer';
import IconMixin from '../mixins/icon';

export default {
  mixins: [IconMixin],
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
    topContent() {
      return this.topHtml === '' ? this.makeIconHtml('arrow-up') : this.topHtml;
    },
    bottomContent() {
      return this.bottomHtml === '' ? this.makeIconHtml('arrow-down') : this.bottomHtml;
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
      scrollIt(0, this.duration, this.easing);
    },
    toBottom() {
      scrollIt(this.docSize.maxScrollTop, this.duration, this.easing);
    },
    onScroll() {
      this.showToTop = this.docSize.scrollTop >= this.offset;
      this.showToBottom = (this.docSize.maxScrollTop - this.docSize.scrollTop)
        >= this.offset;
    }
  }
}
</script>

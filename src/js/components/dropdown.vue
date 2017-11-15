<template lang="html">
  <div class="dropdown">
    <slot name="button"></slot>
    <div :class="contentClass">
      <slot></slot>
      <div x-arrow v-if="withArrow"></div>
    </div>
  </div>
</template>

<script>
import Popper from 'popper.js';

export default {
  name: 'dropdown',
  props: {
    toggle: {
      type: String,
      default: 'toggle', // toggle|hover
    },
    align: {
      type: String,
      default: 'left', // left|center|right
    },
    withArrow: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      btn: null,
      content: null,
      showContent: false,
      pop: undefined,
    };
  },
  watch: {
    showContent(val) {
      if (val) this.updatePopper();
    },
  },
  computed: {
    contentClass() {
      return {
        'dropdown-content': true,
        'show': this.showContent,
        'with-arrow': this.withArrow,
      };
    }
  },
  methods: {
    initElements() {
      // button.
      this.btn = this.$slots.button[0].elm;
      this.btn.classList.add(`dropdown-${this.toggle}`);
      // content.
      this.content = this.$el.querySelector('.dropdown-content');
      // items.
      this.$slots.default.forEach(item => {
        if (item.tag === 'a') item.elm.classList.add('dropdown-item');
      });
    },
    onToggle() {
      this.updatePopper();
      this.showContent = !this.showContent;
    },
    onOtherClick(event) {
      if (event.target !== this.btn && this.showContent === true) {
        this.showContent = false;
      }
    },
    onKeydown(event) {
      if (!this.showContent) return;
      // IE: escape key value is 'Esc' (others: 'Escape')
      if (event.key.match(/(^Escape|^Esc)/)) {
        this.showContent = false;
      }
    },
    getPlacement() {
      return this.align == 'left'
        ? 'bottom-start'
        : this.align == 'right'
        ? 'bottom-end'
        : 'bottom';
    },
    createPopper() {
      this.pop = new Popper(this.btn, this.content, {
        placement: this.getPlacement(),
        modifiers: {
          offset: { offset: '1px, 1px' },
          flip: { enabled: true },
        },
      });
    },
    updatePopper() {
      if (this.pop) {
        this.pop.scheduleUpdate();
      } else {
        this.createPopper();
        this.updatePopper();
      }
    },
    onMouseover() {
      this.updatePopper();
      this.showContent = true;
    },
    onMouseout() {
      this.showContent = false;
    },
  },
  mounted() {
    this.initElements();
    if (this.toggle === 'toggle') {
      this.btn.addEventListener('click', this.onToggle.bind(this));
      window.addEventListener('click', this.onOtherClick.bind(this));
      window.addEventListener('keydown', this.onKeydown.bind(this));
    } else if (this.toggle === 'hover') {
      this.$el.addEventListener('mouseover', this.onMouseover.bind(this));
      this.$el.addEventListener('mouseout', this.onMouseout.bind(this));
    }
  },
}
</script>

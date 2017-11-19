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
import ElementUtil from 'element-util';

export default {
  name: 'dropdown',
  props: {
    toggle: {
      type: String,
      default: 'toggle', // toggle|hover
    },
    placement: {
      type: String,
      default: 'bottom', // auto|top|right|bottom|left (surfix: '-start'|'-end')
    },
    modifiers: {
      type: Object,
      default() {
        return {};
      },
    },
    offset: {
      type: String,
      default: '1, 1',
    },
    flip: {
      type: String,
      default: 'on', // on|off
    },
    preventOverflow: {
      type: String,
      default: 'on', // on|off
    },
    withArrow: {
      // NOTE: This is experimental prop.
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      btn: null,
      content: null,
      isShown: false,
      pop: undefined,
    };
  },
  watch: {
    isShown(val) {
      if (val) this.updatePopper();
    },
  },
  computed: {
    contentClass() {
      return {
        'dropdown-content': true,
        'show': this.isShown,
        'with-arrow': this.withArrow,
      };
    },
  },
  methods: {
    initElements() {
      // button.
      this.btn = this.$slots.button[0].elm;
      this.btn.classList.add(`dropdown-button`);
      // content.
      this.content = this.$el.querySelector('.dropdown-content');
      // items.
      this.$slots.default.forEach(item => {
        if (item.tag === 'a') item.elm.classList.add('dropdown-item');
      });
    },
    show() {
      this.isShown = true;
    },
    hide() {
      this.isShown = false;
    },
    toggleShow() {
      this.isShown ? this.hide() : this.show();
    },
    onOtherClick(event) {
      let isOwn = event.target == this.btn
        || event.target == this.content
        || ElementUtil.findAncestor(event.target, this.content) !== null;

      if (!isOwn && this.isShown === true) this.hide();
    },
    onKeydown(event) {
      if (!this.isShown) return;
      // IE: escape key value is 'Esc' (others: 'Escape')
      if (event.key.match(/(^Escape|^Esc)/)) {
        this.hide();
      }
    },
    createPopper() {
      let modifiers = Object.assign(this.modifiers, {
        offset: { offset: this.offset },
        flip: { enabled: this.flip === 'on' },
        preventOverflow: { enabled: this.preventOverflow === 'on' },
        hide: { enabled: this.preventOverflow === 'on' },
      });
      this.pop = new Popper(this.btn, this.content, {
        placement: this.placement,
        modifiers,
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
  },
  mounted() {
    this.initElements();
    if (this.toggle === 'toggle') {
      this.btn.addEventListener('click', this.toggleShow.bind(this));
      window.addEventListener('click', this.onOtherClick.bind(this));
      window.addEventListener('keydown', this.onKeydown.bind(this));
    } else if (this.toggle === 'hover') {
      this.$el.addEventListener('mouseover', this.show.bind(this));
      this.$el.addEventListener('mouseout', this.hide.bind(this));
    }
  },
}
</script>

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
import IconMixin from '../mixins/icon';
import { caretDown } from '../../svg';

export default {
  mixins: [IconMixin],
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
    },
    buttonWithCaret: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      btn: null,
      content: null,
      items: [],
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
      const isOwn = ElementUtil.findAncestor(event.target, this.$el) != null;

      if (!isOwn && this.isShown == true) this.hide();
    },
    onBtnKeydown(event) {
      if (event.key.match(/Escape|Esc/)) {
        this.hide();
        this.btn.focus();
      }
      if (event.key.match(/ArrowUp|ArrowDown|Up|Down/)) {
        event.preventDefault();
        if (!this.isShown) this.show();
        if (event.key.match(/ArrowUp|Up/)) {
          this.items[this.items.length - 1].focus();
        }
        if (event.key.match(/ArrowDown|Down/)) {
          this.items[0].focus();
        }
      }
    },
    onItemKeydown(event) {
      if (event.key.match(/Escape|Esc/)) {
        this.hide();
        this.btn.focus();
      }
      if (event.key.match(/ArrowUp|ArrowDown|Up|Down/)) {
        event.preventDefault();
        let index = this.items.findIndex(item => item == event.currentTarget);
        if (index === -1) return;
        if (event.key.match(/ArrowUp|Up/)) {
          index = index == 0 ? this.items.length - 1 : index - 1;
          this.items[index].focus();
        }
        if (event.key.match(/ArrowDown|Down/)) {
          index = index == this.items.length - 1 ? 0 : index + 1;
          this.items[index].focus();
        }
      }
    },
    createPopper() {
      const modifiers = Object.assign(this.modifiers, {
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
    initElements() {
      // button.
      this.btn = this.$slots.button[0].elm;
      this.btn.classList.add(`dropdown-button`);
      if (this.buttonWithCaret) {
        this.btn.appendChild(this.makeIcon('caret-down'));
      }
      // content.
      this.content = this.$el.querySelector('.dropdown-content');
      // items.
      const items = this.content.querySelectorAll('.dropdown-item:not([disabled])');
      this.items = ElementUtil.nodeListToArray(items);
    },
    addListeners() {
      if (this.toggle === 'toggle') {
        this.btn.addEventListener('click', this.toggleShow.bind(this));
        window.addEventListener('click', this.onOtherClick.bind(this));
      } else if (this.toggle === 'hover') {
        this.$el.addEventListener('mouseover', this.show.bind(this));
        this.$el.addEventListener('mouseout', this.hide.bind(this));
      }
      // Navigation by key.
      this.btn.addEventListener('keydown', this.onBtnKeydown.bind(this));
      this.items.forEach(
        item => item.addEventListener('keydown', this.onItemKeydown.bind(this))
      );
    },
  },
  mounted() {
    this.initElements();
    this.addListeners();
  },
}
</script>

<template lang="html">
  <div class="dropdown">
    <slot name="button"></slot>
    <div :class="contentClass" :data-align="align">
      <slot></slot>
    </div>
  </div>
</template>

<script>
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
    }
  },
  data() {
    return {
      btn: null,
      showContent: false,
    };
  },
  computed: {
    contentClass() {
      return {
        'dropdown-content': true,
        'show': this.showContent,
      };
    }
  },
  methods: {
    initElements() {
      // button.
      this.btn = this.$slots.button[0].elm;
      this.btn.classList.add(`dropdown-${this.toggle}`);
      // items.
      this.$slots.default.forEach(item => {
        if (item.tag === 'a') {
          item.elm.classList.add('dropdown-item');
        }
      });
    },
    toggleContent() {
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
  },
  mounted() {
    this.initElements();
    if (this.toggle === 'toggle') {
      this.btn.addEventListener('click', this.toggleContent.bind(this));
      window.addEventListener('click', this.onOtherClick.bind(this));
      window.addEventListener('keydown', this.onKeydown.bind(this));
    }
  },
}
</script>

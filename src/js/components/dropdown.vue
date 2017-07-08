<template lang="html">
  <div class="dropdown">
    <slot name="button"></slot>
    <div class="dropdown-content">
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
      content: null,
      items: [],
    };
  },
  mounted() {
    this.initElements();
    if (this.toggle === 'toggle') {
      this.btn.addEventListener('click', this.toggleContent.bind(this));
      window.addEventListener('click', this.onOtherClick.bind(this));
    }
  },
  methods: {
    initElements() {
      // button.
      this.btn = this.$slots.button[0].elm;
      this.btn.classList.add(`dropdown-${this.toggle}`);
      // content.
      this.content = this.$el.querySelector('.dropdown-content');
      this.content.dataset.align = this.align;
      // items.
      this.$slots.default.forEach(item => {
        item.elm.classList.add('dropdown-item');
        this.items.push(item.elm);
      });
    },
    toggleContent() {
      this.content.classList.toggle('show');
    },
    onOtherClick(event) {
      if (event.target !== this.btn && this.content.classList.contains('show')) {
        this.content.classList.remove('show');
      }
    },
  },
}
</script>

<style lang="scss">
</style>

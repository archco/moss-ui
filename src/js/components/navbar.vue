<template lang="html">
  <nav class="navbar">
    <div class="navbar-header">
      <a href="#" class="navbar-brand text">Navbar</a>
      <navbar-toggle
        class="hide-tablet-up"
        :color="toggleColor"
        :opened="toggle"
        @click.native="onToggleClick"
      />
    </div>
    <div :class="bodyClass">
      <slot></slot>
    </div>
  </nav>
</template>

<script>
import NavbarToggle from './navbar-toggle.vue';

export default {
  name: 'navbar',
  components: { NavbarToggle },
  props: {
    align: {
      type: String,
      default: '',
    }
  },
  data() {
    return {
      toggle: false,
      toggleColor: '',
    };
  },
  computed: {
    bodyClass() {
      let obj = {'navbar-body': true};
      if (this.align) obj[`justify-content-${this.align}`] = true;
      return obj;
    }
  },
  methods: {
    onToggleClick() {
      this.toggle = !this.toggle;
      console.log(this.toggle);
    },
  },
  mounted() {
    this.toggleColor = window.getComputedStyle(this.$el).color;
  }
}
</script>

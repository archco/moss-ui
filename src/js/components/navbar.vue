<template lang="html">
  <nav class="navbar">
    <div :class="headerClass" :style="headerStyle">
      <slot name="brand"></slot>
      <navbar-toggle
        class="hide-tablet-up"
        :color="toggleColor"
        :opened="toggleExpanded"
        @click.native="onToggleClick"
      />
    </div>
    <collapse id="navbar-body"
      :class="bodyClass"
      :expanded="navShow">
      <slot></slot>
    </collapse>
  </nav>
</template>

<script>
import NavbarToggle from './navbar-toggle.vue';
import Collapse from './collapse.vue';
import { isMobileSize } from '../lib/util';

export default {
  components: { NavbarToggle, Collapse },
  props: {
    align: {
      type: String,
      default: '',
    },
    headerAlign: {
      type: String,
      default: '',
    },
    headerStyle: {
      type: Object,
      default() {
        return {};
      },
    }
  },
  data() {
    return {
      toggleColor: '',
      toggleExpanded: false,
      navShow: true,
    };
  },
  computed: {
    headerClass() {
      let obj = {'navbar-header': true};
      if (this.headerAlign) obj[`justify-content-${this.headerAlign}`] = true;
      return obj;
    },
    bodyClass() {
      let obj = {'navbar-body': true};
      if (this.align) obj[`justify-content-${this.align}`] = true;
      return obj;
    }
  },
  methods: {
    onToggleClick() {
      this.toggleExpanded = !this.toggleExpanded;
      this.navShow = this.toggleExpanded;
    },
    responsiveBody() {
      if (isMobileSize(768)) {
        this.toggleExpanded = this.navShow = false;
      } else {
        this.toggleExpanded = false;
        this.navShow = true;
      }
    }
  },
  mounted() {
    // Auto toggle color.
    this.toggleColor = window.getComputedStyle(this.$el).color;

    // Add resize listener.
    window.addEventListener('resize', this.responsiveBody.bind(this));
    this.responsiveBody();
  },
}
</script>

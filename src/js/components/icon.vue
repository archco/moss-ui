<template>
  <i class="moss-icon" v-html="svgContent"></i>
</template>

<script>
import { getSvgByName } from '../lib/util';

export default {
  props: {
    name: {
      type: String,
      default: '',
    },
    svg: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      svgContent: this.svg || getSvgByName(this.name) || '',
    };
  },
}
</script>

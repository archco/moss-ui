<template>
  <i class="icon" v-html="svgContent"></i>
</template>

<script>
import * as Svg from '../../svg';
import { strToCamel } from '../lib/util';

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
      svgContent: this.svg || Svg[strToCamel(this.name, true)] || '',
    };
  },
}
</script>

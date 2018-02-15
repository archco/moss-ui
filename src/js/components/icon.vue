<template>
  <i class="icon" v-html="svgContent"></i>
</template>

<script>
import IconMixin from "../mixins/icon";

export default {
  mixins: [IconMixin],
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
      svgContent: this.svg || this.getSvgByName(this.name) || '',
    };
  },
}
</script>

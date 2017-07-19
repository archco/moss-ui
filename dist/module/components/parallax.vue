<template lang="html">
  <div class="parallax" :style="styleObject"></div>
</template>

<script>
export default {
  name: 'parallax',
  props: {
    src: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      default: '300px',
    }
  },
  data() {
    return {
      styleObject: {
        backgroundImage: `url('${this.src}')`,
        height: this.height,
      }
    };
  }
}
</script>

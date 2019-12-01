<template>
  <div></div>
</template>

<script>
export default {
  props: {
    type: String,
  },
  data() {
    return {
      entries: {
        dots: {
          className: 'loader-dots',
          divCount: 4,
        }
      }
    };
  },
  mounted() {
    const item = this.$data.entries[this.type];
    this.$el.classList.add(item.className);
    for (let i = 0; i < item.divCount; i++) {
      this.$el.appendChild(document.createElement('div'));
    }
  },
}
</script>

<style lang="scss">
@keyframes loader-dots1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes loader-dots3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes loader-dots2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(.3em, 0);
  }
}

.loader-dots {
  display: inline-block;
  position: relative;
  width: 1em;
  height: 1em;

  div {
    position: absolute;
    top: .4125em;
    width: .1625em;
    height: .1625em;
    border-radius: 50%;
    background: currentColor;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }

  div:nth-child(1) {
    left: .1em;
    animation: loader-dots1 0.6s infinite;
  }
  div:nth-child(2) {
    left: .1em;
    animation: loader-dots2 0.6s infinite;
  }
  div:nth-child(3) {
    left: .4em;
    animation: loader-dots2 0.6s infinite;
  }
  div:nth-child(4) {
    left: .7em;
    animation: loader-dots3 0.6s infinite;
  }
}
</style>

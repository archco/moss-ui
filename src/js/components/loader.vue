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
        },
        roller: {
          className: 'loader-roller',
          divCount: 8,
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
%loader {
  display: inline-block;
  position: relative;
  width: 1em;
  height: 1em;
}

// dots

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
  @extend %loader;

  div {
    position: absolute;
    top: .4125em;
    width: .1625em;
    height: .1625em;
    border-radius: 50%;
    background: currentColor;
    animation-timing-function: ease-in-out;
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

// roller

$roller-dots: (
  1: .7875em .7875em,
  2: .85em .7em,
  3: .8875em .6em,
  4: .9em .5em,
  5: .8875em .4em,
  6: .85em .3em,
  7: .7875em .2125em,
  8: .7em .15em,
);

@keyframes loader-roller {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.loader-roller {
  @extend %loader;

  div {
    animation: loader-roller 1.2s ease-in-out infinite;
    transform-origin: .5em .5em;

    &:after {
      content: " ";
      display: block;
      position: absolute;
      width: .0875em;
      height: .0875em;
      border-radius: 50%;
      background: currentColor;
      margin: -.05em 0 0 -.05em;
    }

    @each $num, $position in $roller-dots {
      &:nth-child(#{$num}) {
        animation-delay: - $num * 0.036s;

        &:after {
          top: nth($position, 1);
          left: nth($position, 2);
        }
      }
    }
  }
}
</style>

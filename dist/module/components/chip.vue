<script>
import CloseButton from './close-button.vue';
import Color from '../lib/color';

export default {
  name: 'chip',
  props: {
    tag: {
      type: String,
      default: 'span',
    },
    closeable: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: '',
    },
    imgSrc: {
      type: String,
      default: '',
    },
    imgAlt: {
      type: String,
      default: '',
    }
  },
  render(createElement) {
    return createElement(
      this.tag,
      this.dataObject(),
      this.childrenArray(createElement),
    );
  },
  methods: {
    /**
     * Return data object for chip component.
     *
     * @return {Object}
     */
    dataObject() {
      return {
        'class': {
          chip: true,
        }
      };
    },
    /**
     * Return array of child nodes.
     *
     * @param  {Function} createElement
     * @return {Array}
     */
    childrenArray(createElement) {
      let children = [];
      if (this.imgSrc) {
        children.push(createElement(
          'img',
          {
            attrs: {
              src: this.imgSrc,
              alt: this.imgAlt,
            }
          }
        ));
      }
      children = children.concat(this.$slots.default);
      if (this.closeable) {
        children.push(createElement(
          CloseButton,
          {
            props: {
              action: 'remove'
            }
          },
          ['✖']
        ));
      }

      return children;
    },
    coloring() {
      if (!this.color) return;

      let color = new Color(this.color);
      this.$el.style.backgroundColor = color.toHex(true);
      this.$el.style.color = color.contrast('#333', '#fff');
    },
  },
  mounted() {
    this.coloring();
  },
}
</script>

<style lang="scss" scoped>
  @import 'src/scss/basement';

  .chip {
    // local variables.
    $_chip-size: $chip-height;

    display: inline-block;
    height: $chip-height;
    padding: 0 $_chip-size / 2;
    margin-right: $_chip-size / 4;
    margin-bottom: $_chip-size / 4;
    font-size: $chip-font-size;
    line-height: strip-unit($_chip-size);
    background-color: $chip-bg-color;
    border-radius: $_chip-size;

    img {
      float: left;
      width: $_chip-size;
      height: $_chip-size;
      margin-right: $_chip-size / 4;
      margin-left: -$_chip-size / 2;
      border-radius: 50%;
    }
  }

  a.chip {
    @include no-decoration;
    color: inherit;
    transition: box-shadow $transition-time;

    &:hover,
    &:focus {
      box-shadow: $shadow-near;
    }
  }

</style>

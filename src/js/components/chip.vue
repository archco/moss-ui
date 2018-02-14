<script>
import CloseButton from './close-button.vue';
import { MooColor } from 'moo-color';

export default {
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
    dataObject() {
      return {
        'class': {
          chip: true,
        }
      };
    },
    childrenArray(createElement) {
      const children = [];
      // <img>
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
      // <span>
      children.push(createElement('span', {}, this.$slots.default));
      // <close-button>
      if (this.closeable) {
        children.push(createElement(
          CloseButton,
          {
            props: {
              action: 'remove'
            }
          }
        ));
      }
      return children;
    },
    coloring() {
      if (!this.color) return;
      const color = new MooColor(this.color);
      this.$el.style.backgroundColor = color.toHex(true);
      this.$el.style.color = color.isLight ? '#333' : '#fff';
    },
  },
  mounted() {
    this.coloring();
  },
}
</script>

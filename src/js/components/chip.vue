<script>
import CloseButton from './close-button.vue';

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
  }
}
</script>

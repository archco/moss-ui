<script>
import CloseBtn from './close-btn.vue';

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
    },
  },
  render(createElement) {
    // element data object.
    let data = {
      'class': {
        chip: true,
      },
      attrs: {
        title: (this.title) ? this.title : false,
      }
    };
    // children nodes.
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
    window.node = this.$slots.default[0];
    children.push(this.$slots.default[0]);
    if (this.closeable) {
      children.push(createElement(
        CloseBtn,
        {
          props: {
            action: 'remove'
          }
        },
        ['✖']
      ));
    }
    console.log(children);

    return createElement(
      this.tag,
      data,
      children
    );
  }
}
</script>

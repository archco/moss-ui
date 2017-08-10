<script>
import NodeUtil from '../mixins/node-util';

export default {
  name: 'anchored-tag',
  mixins: [NodeUtil],
  props: {
    tag: {
      type: String,
      required: true,
    },
    owned: {
      type: Boolean,
      default: false,
    },
  },
  render(createElement) {
    // create kebabCase id
    let tagId = this.getChildrenTextContent(this.$slots.default)
      .toLowerCase()
      .replace(/\W+/g, '-')
      .replace(/(^\-|\-$)/g, '');
    let data = {
      attrs: {
        id: (this.owned) ? tagId : false,
      }
    };
    let children = [
      createElement('a', {
        attrs: {
          name: tagId,
          href: '#' + tagId
        }
      }, this.$slots.default)
    ];

    return createElement(this.tag, data, children);
  },
}
</script>

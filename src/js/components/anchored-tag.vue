<script>
import { kebab } from 'cake-case';
import NodeUtil from '../mixins/node-util';

export default {
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
    // create kebab-case id
    const text = this.getChildrenTextContent(this.$slots.default);
    const tagId = kebab(text);
    const data = {
      attrs: {
        id: this.owned ? tagId : false,
      }
    };
    const children = [
      createElement('a', {
        attrs: {
          href: '#' + tagId
        }
      }, this.$slots.default)
    ];

    return createElement(this.tag, data, children);
  },
}
</script>

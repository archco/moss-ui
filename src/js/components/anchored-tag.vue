<script>
import NodeUtil from '../mixins/node-util';
import { strToKebab } from '../lib/util';

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
    const tagId = strToKebab(text);
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

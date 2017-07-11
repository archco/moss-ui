<script>
export default {
  name: 'anchored-tag',
  props: {
    tag: {
      type: String,
      required: true,
    },
    owned: {
      type: Boolean,
      default: false,
    }
  },
  render(createElement) {
    // create kebabCase id
    let tagId = this.getChildrenTextContent(this.$slots.default)
      .toLowerCase()
      .replace(/\W+/g, '-')
      .replace(/(^\-|\-$)/g, '');

    return createElement(
      this.tag,
      {
        attrs: {
          id: (this.owned) ? tagId : false,
        }
      },
      [
        createElement('a', {
          attrs: {
            name: tagId,
            href: '#' + tagId
          }
        }, this.$slots.default)
      ]
    );
  },
  methods: {
    /**
     * get text content from children nodes.
     *
     * @param  {Array} children  An array of VNodes.
     * @return {String}
     */
    getChildrenTextContent(children) {
      return children.map(node => {
        return node.children
          ? this.getChildrenTextContent(node.children)
          : node.text;
      }).join('');
    }
  }
}
</script>

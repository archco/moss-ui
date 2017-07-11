<script>
export default {
  name: 'anchored-heading',
  props: {
    level: {
      type: Number,
      required: true,
    }
  },
  render(createElement) {
    // create kebabCase id
    let headingId = this.getChildrenTextContent(this.$slots.default)
      .toLowerCase()
      .replace(/\W+/g, '-')
      .replace(/(^\-|\-$)/g, '');

    return createElement(
      'h' + this.level,
      {
        attrs: {
          id: headingId,
        }
      },
      [
        createElement('a', {
          attrs: {
            name: headingId,
            href: '#' + headingId
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

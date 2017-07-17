export default {
  methods: {

    /**
     * get text content from children nodes.
     *
     * @param  {Array} children  An array of VNodes.
     * @return {String}
     */
    getChildrenTextContent(children) {
      return children.map(node => node.children
        ? this.getChildrenTextContent(node.children)
        : node.text).join('');
    },

    /**
     * Remove children's elements.
     *
     * @param  {Array} children An array of VNodes.
     * @return {void}
     */
    clearChildren(children) {
      children.forEach(node => {
        node.elm.parentNode.removeChild(node.elm);
      });
    },
  },
};

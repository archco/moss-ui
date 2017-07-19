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

    /**
     * wrap elements by wrapper, one by one.
     *
     * @param  {Array} children
     * @param  {String} className
     * @param  {String} [tagName='DIV']
     * @return {void}
     */
    wrapNodes(children, className, tagName = 'DIV') {
      children.forEach(node => {
        let parent = node.elm.parentNode;
        let sibling = node.elm.nextSibling;
        let wrapper = document.createElement(tagName);
        wrapper.classList.add(className);
        wrapper.appendChild(node.elm);

        if (sibling) {
          parent.insertBefore(wrapper, sibling);
        } else {
          parent.appendChild(wrapper);
        }
      });
    },

    /**
     * wrap all elements inside to wrapper.
     *
     * @param  {Array} children
     * @param  {String} className
     * @param  {String} [tagName='DIV']
     * @return {void}
     */
    wrapNodesAll(children, className, tagName = 'DIV') {
      if (!children.length) return;
      let parent = children[0].elm.parentNode;
      let sibling = children[0].elm.nextSibling;
      let wrapper = document.createElement(tagName);
      wrapper.classList.add(className);
      children.forEach(node => wrapper.appendChild(node.elm));

      if (sibling) {
        parent.insertBefore(wrapper, sibling);
      } else {
        parent.appendChild(wrapper);
      }
    },
  },
};

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  methods: {

    /**
     * get text content from children nodes.
     *
     * @param  {Array} children  An array of VNodes.
     * @return {String}
     */
    getChildrenTextContent: function getChildrenTextContent(children) {
      var _this = this;

      return children.map(function (node) {
        return node.children ? _this.getChildrenTextContent(node.children) : node.text;
      }).join('');
    },


    /**
     * Remove children's elements.
     *
     * @param  {Array} children An array of VNodes.
     * @return {void}
     */
    clearChildren: function clearChildren(children) {
      children.forEach(function (node) {
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
    wrapNodes: function wrapNodes(children, className) {
      var tagName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'DIV';

      children.forEach(function (node) {
        var parent = node.elm.parentNode;
        var sibling = node.elm.nextSibling;
        var wrapper = document.createElement(tagName);
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
    wrapNodesAll: function wrapNodesAll(children, className) {
      var tagName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'DIV';

      if (!children.length) return;
      var parent = children[0].elm.parentNode;
      var sibling = children[0].elm.nextSibling;
      var wrapper = document.createElement(tagName);
      wrapper.classList.add(className);
      children.forEach(function (node) {
        return wrapper.appendChild(node.elm);
      });

      if (sibling) {
        parent.insertBefore(wrapper, sibling);
      } else {
        parent.appendChild(wrapper);
      }
    }
  }
};
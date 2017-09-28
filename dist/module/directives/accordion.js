'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
  v-collapse:{arg}.{modifiers}="'{value}'"

  modifiers: [none = toggle] | 'show' | 'hide'
  arg: collapse id.
  value: {String} accordion group name.
 */
exports.default = {
  name: 'accordion',

  bind: function bind(el, binding, vnode) {
    var action = binding.modifiers.show ? 'show' : binding.modifiers.hide ? 'hide' : 'toggle';

    registerToggles(el, binding, vnode); // register to toggle list.

    el.addEventListener('click', function () {
      var moss = vnode.context.$root.$moss;
      moss.accordion.toggle(binding.value, binding.arg, action);

      moss.accordionToggles[binding.value].forEach(function (toggle) {
        vnode.context.$root.$emit('collapse-item', toggle.collapseId, function (item) {
          toggle.el.dataset.collapsed = !item.show;
        });
      });
    });
  },
  inserted: function inserted(el, binding, vnode) {
    vnode.context.$root.$emit('collapse-item', binding.arg, function (item) {
      el.dataset.collapsed = !item.show;
    });
  }
};


function registerToggles(el, binding, vnode) {
  var moss = vnode.context.$root.$moss;

  if (typeof moss.accordionToggles === 'undefined') {
    moss.accordionToggles = {};
  }

  if (typeof moss.accordionToggles[binding.value] === 'undefined') {
    moss.accordionToggles[binding.value] = [];
  }

  moss.accordionToggles[binding.value].push({
    el: el,
    accordionId: binding.value,
    collapseId: binding.arg
  });
}
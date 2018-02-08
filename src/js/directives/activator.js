import { locationSearchToObject, searchToObject, isContains } from '../lib/util';

/*
  v-activator.{modifiers}="'{value}'"

  modifiers:
    self: If this given, active class into self element, not parentNode.
    this: If this given, activator on own element, not childNodes.
  value: {String} selector. default value is 'a'.
 */
export default {
  inserted(el, binding) {
    let isSelf = binding.modifiers.self;
    let isThis = binding.modifiers.this;
    let selector = binding.value || 'a';
    let links = isThis ? [el] : el.querySelectorAll(selector);
    if (!links.length) return;

    for (let a of links) {
      if (compareWithLocation(a)) {
        if (isSelf) {
          a.classList.add('active');
        } else {
          a.parentNode.classList.add('active');
        }
      }
    }
  },
};

function compareWithLocation(anchor) {
  let l = {
    path: lastTerm(document.location.pathname),
    query: locationSearchToObject(),
  };
  let a = {
    path: lastTerm(anchor.pathname),
    query: searchToObject(anchor.search),
  };

  if (anchor.getAttribute('href') == '#') {
    // sample link (e.g. <a href="#">)
    return false;
  }

  if (l.path == a.path) {
    if (!a.query || isContains(l.query, a.query)) return true;
  }

  return false;
}

function lastTerm(string) {
  return string.substr(string.lastIndexOf('/'));
}

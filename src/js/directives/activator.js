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
    const isSelf = binding.modifiers.self;
    const isThis = binding.modifiers.this;
    const selector = binding.value || 'a';
    const links = isThis ? [el] : el.querySelectorAll(selector);
    if (!links.length) return;

    for (const a of links) {
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
  const l = {
    path: lastTerm(document.location.pathname),
    query: locationSearchToObject(),
  };
  const a = {
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

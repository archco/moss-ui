<template lang="html">
  <transition name="collapsing"
    @enter="expanding"
    @afterEnter="clearHeight"
    @leave="collapsing"
    @afterLeave="clearHeight">
    <div v-show="show">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    expanded: {
      type: Boolean,
      default: false,
    },
    accordion: {
      type: String,
      default: '',
    }
  },
  data() {
    return {
      show: this.expanded
    };
  },
  computed: {
    state() {
      return {
        id: this.id,
        expanded: this.show,
        accordion: this.accordion,
      };
    },
  },
  watch: {
    expanded(val) {
      this.show = val;
    }
  },
  methods: {
    expanding(el) {
      el.style.maxHeight = 'none';
      const realHeight = window.getComputedStyle(el).height;
      el.style.maxHeight = '0px';
      el.offsetHeight; // Force repaint
      el.style.maxHeight = realHeight;
    },
    collapsing(el) {
      el.style.maxHeight = 'none';
      const realHeight = window.getComputedStyle(el).height;
      el.style.maxHeight = realHeight;
      el.offsetHeight; // Force repaint
      el.style.maxHeight = '0px';
    },
    clearHeight(el) {
      el.style.maxHeight = '';
    },

    /**
     * toggle collapse item.
     *
     * @param {string} id collapse-id.
     * @param {string} action toggle|show|hide
     * @param {function|null} cb (state) => void
     */
    toggleCollapse(id, action = 'toggle', cb = null) {
      if (id !== this.id) return;
      switch (action.toLowerCase()) {
        case 'show': this.show = true; break;
        case 'hide': this.show = false; break;
        case 'toggle':
        default: this.show = !this.show;
      }
      if (typeof cb === 'function') cb(this.state); // return to callback.
      this.emitCurrentState();
    },

    /**
     * toggle accordion
     * @param {string} accordion accordion group name.
     * @param {string} id collapse id.
     * @param {string} action toggle|show|hide
     */
    toggleAccordion(accordion, id, action = 'toggle') {
      if (accordion !== this.accordion) return;
      const isSelf = this.id === id;
      switch (action.toLowerCase()) {
        case 'show': this.show = isSelf ? true : false; break;
        case 'hide': if (isSelf) this.show = false; break;
        case 'toggle':
        default: this.show = isSelf ? !this.show : false;
      }
      this.emitCurrentState();
    },
    // emit collapse or accordion's state to $root.
    emitCurrentState() {
      this.$root.$emit('collapse-state', this.state);
    },
  },
  beforeMount() {
    this.$root.$on('collapse-toggle', this.toggleCollapse.bind(this));
    if (this.accordion) {
      this.$root.$on('accordion-toggle', this.toggleAccordion.bind(this));
    };
    this.emitCurrentState();
  }
}
</script>

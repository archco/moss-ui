<template lang="html">
  <transition name="collapsing"
    @enter="enter"
    @afterEnter="clearHeight"
    @leave="leave"
    @afterLeave="clearHeight">
    <div v-show="show">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
import { EventBus } from '../lib/event-bus';

export default {
  name: 'collapse',
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
      show: this.expanded,
    };
  },
  methods: {
    enter(el) {
      el.style.maxHeight = 'none';
      const realHeight = window.getComputedStyle(el).height;
      el.style.maxHeight = '0px';
      el.offsetHeight; // Force repaint
      el.style.maxHeight = realHeight;
    },
    leave(el) {
      el.style.maxHeight = 'none';
      const realHeight = window.getComputedStyle(el).height;
      el.style.maxHeight = realHeight;
      el.offsetHeight; // Force repaint
      el.style.maxHeight = '0px';
    },
    clearHeight(el) {
      el.style.maxHeight = null;
    },
    toggleCollapse(id, action = 'toggle', cb = null) {
      if (id !== this.id) return;
      action = action.toLowerCase();
      if (action === 'show') {
        this.show = true;
      } else if (action === 'hide') {
        this.show = false;
      } else {
        this.show = !this.show;
      }

      if (typeof cb === 'function') cb(this.show); // return to callback.
    },
    registerAccordion() {
      // initialize accordion object.
      if (typeof this.$root.$cosmos.accordion === 'undefined') {
        this.$root.$cosmos.accordion = {};
      }

      // initialize accordion toggle method.
      if (typeof this.$root.$cosmos.accordion.toggle === 'undefined') {
        this.$root.$cosmos.accordion.toggle = this.toggleAccordion;
      }

      // Initialize accordion list.
      if (typeof this.$root.$cosmos.accordion[this.accordion] === 'undefined') {
        this.$root.$cosmos.accordion[this.accordion] = [];
      }

      // register.
      this.$root.$cosmos.accordion[this.accordion].push(this);
    },
    toggleAccordion(accordionId, id, action = 'toggle') {
      const list = this.$root.$cosmos.accordion[accordionId];
      if (!list) return;
      action = action.toLowerCase();

      list.forEach(item => {
        if (action == 'show') {
          item.show = (item.id === id) ? true : false;
        } else if (action == 'hide') {
          if (item.id === id) item.show = false;
        } else {
          item.show = (item.id === id) ? !item.show : false;
        }
      });
    }
  },
  beforeMount() {
    EventBus.$on('collapse-toggle', this.toggleCollapse.bind(this));
    EventBus.$on('collapse-item', (id, cb = null) => {
      if (this.id !== id) return;
      if (typeof cb === 'function') cb(this);
    });

    if (this.accordion) this.registerAccordion();
  }
}
</script>

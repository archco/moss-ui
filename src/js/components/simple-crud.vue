<template lang="html">
  <li class="simple-crud-item">
    <div v-show="state == 'read'">
      <slot name="read"></slot>
    </div>
    <div v-show="state == 'update'">
      <slot name="update"></slot>
    </div>
    <div v-show="state == 'delete'">
      <slot name="delete"></slot>
    </div>
  </li>
</template>

<script>
import ElementUtil from 'element-util';

export default {
  name: 'simple-crud',
  props: {
    view: {
      type: String,
      default: 'read',
    }
  },
  data() {
    return {
      state: this.view,
    };
  },
  methods: {
    changeView(state = 'read') {
      this.state = state;
    },
    addListener(selector, listener) {
      const elms = ElementUtil.getElements(selector, this.$el);
      ElementUtil.addListener(elms, 'click', listener);
    },
  },
  mounted() {
    // Add class to slots.
    this.$slots.read[0].elm.classList.add('read');
    this.$slots.update[0].elm.classList.add('update');
    this.$slots.delete[0].elm.classList.add('delete');

    // Add toggle listener.
    this.addListener('[data-toggle="read"]', () => this.changeView('read'));
    this.addListener('[data-toggle="cancel"]', () => this.changeView('read'));
    this.addListener('[data-toggle="update"]', () => this.changeView('update'));
    this.addListener('[data-toggle="delete"]', () => this.changeView('delete'));
  }
}
</script>

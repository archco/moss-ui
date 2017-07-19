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
import ElementUtil from '../lib/element-util';

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
    }
  },
  mounted() {
    // Add class to slots.
    this.$slots.read[0].elm.classList.add('read');
    this.$slots.update[0].elm.classList.add('update');
    this.$slots.delete[0].elm.classList.add('delete');

    // Add toggle listener.
    ElementUtil.addListener(
      ElementUtil.getElements('[data-toggle="read"]', this.$el),
      'click',
      () => this.changeView('read')
    );
    ElementUtil.addListener(
      ElementUtil.getElements('[data-toggle="cancel"]', this.$el),
      'click',
      () => this.changeView('read')
    );
    ElementUtil.addListener(
      ElementUtil.getElements('[data-toggle="update"]', this.$el),
      'click',
      () => this.changeView('update')
    );
    ElementUtil.addListener(
      ElementUtil.getElements('[data-toggle="delete"]', this.$el),
      'click',
      () => this.changeView('delete')
    );
  }
}
</script>

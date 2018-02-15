<template lang="html">
  <transition :name="effectName">
    <div :class="classObject" v-if="show">
      <span>
        <slot></slot>
      </span>
      <close-button action=''
        @close="onClose"
        v-html="closeIconHtml"/>
    </div>
  </transition>
</template>

<script>
import CloseButton from './close-button.vue';
import IconMixin from "../mixins/icon";

export default {
  components: { CloseButton },
  mixins: [IconMixin],
  props: {
    status: {
      type: String,
      default: '',
    },
    effect: {
      type: String,
      default: 'fade',
    },
    closeEmit: {
      type: String,
      default: '',
    },
    closeHtml: {
      type: String,
      default: '',
    }
  },
  computed: {
    effectName() {
      return `message-${this.effect}`;
    },
    closeIconHtml() {
      return this.closeHtml
        ? this.closeHtml
        : this.makeIconHtml('close');
    },
    classObject() {
      const obj = { message: true };
      const status = this.status.toLowerCase();
      if (this.status) obj[status] = true;
      return obj;
    }
  },
  data() {
    return {
      show: true
    };
  },
  methods: {
    onClose() {
      this.closeEmit ? this.$emit(this.closeEmit, this) : this.show = false;
    }
  }
}
</script>

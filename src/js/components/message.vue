<template lang="html">
  <transition :name="effectName">
    <div :class="classObject" v-if="show">
      <span>
        <slot></slot>
      </span>
      <close-button action=""
        @close="onClose"
        v-html="closeHtml"/>
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
    closeHtml: {
      type: String,
      default: '',
    }
  },
  computed: {
    effectName() {
      return `message-${this.effect}`;
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
      this.$emit('close', this);
      this.show = false;
    }
  }
}
</script>

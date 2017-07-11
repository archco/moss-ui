<template lang="html">
  <div class="toast-container">
    <transition-group name="toast-fade" tag="div">
      <div class="toast" v-for="toast in toasts" :key="toast.id" v-text="toast.text"></div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'toast',
  props: {
    position: {
      type: String,
      default: 'bottom-center',
    },
    duration: {
      type: Number,
      default: 3000,
    },
    transitionDuration: {
      type: Number,
      default: 600,
    }
  },
  data() {
    return {
      toasts: [],
      increasement: 0,
    };
  },
  methods: {
    show(text) {
      let toast = this.add(text);

      this.$emit('show', toast); // emit 'show' event.

      setTimeout(() => {
        this.remove(toast.id);
      }, this.duration);
    },
    add(text) {
      let toast = {
        id: this.increasement,
        text: text
      };
      this.toasts.push(toast);
      this.increasement++;
      return toast;
    },
    remove(id) {
      let index = this.toasts.findIndex(item => {
        return item.id === id;
      });
      this.toasts.splice(index, 1);
    }
  },
  mounted() {
    // Register helper function to global object.
    if (!window.Cosmos) window.Cosmos = {};
    window.Cosmos.toast = {
      show: this.show.bind(this),
    }
  }
}
</script>

<style lang="css">
</style>

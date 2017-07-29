<template lang="html">
  <transition :name="effectName">
    <div class="modal-mask" v-if="show">
        <div class="modal-content">
          <div class="modal-header">
            <h3>{{ title }}</h3>
            <button class="close-button" @click="$emit('close')" v-html="closeButtonHtml"></button>
          </div>
          <div class="modal-body">
            <slot></slot>
          </div>
          <div class="modal-footer">
            <slot name="actions"></slot>
          </div>
        </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'modal',
  props: {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: '',
    },
    effect: {
      type: String,
      default: 'from-top',
    },
    closeButtonHtml: {
      type: String,
      default: '✖',
    },
    closeOn: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    effectName() {
      return `modal-${this.effect}`;
    }
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    toggleModal(name, action = 'toggle') {
      if (name !== this.name) return;
      action = action.toLowerCase();
      if (action === 'show') {
        this.show = true;
      } else if (action === 'close') {
        this.show = false;
      } else {
        this.show = !this.show;
      }
    },
  },
  beforeMount() {
    this.$root.$on('modal-toggle', this.toggleModal.bind(this));
    this.$on('close', () => {
      this.$root.$emit('modal-toggle', this.name, 'close');
    });

    if (typeof window.Moss.modal === 'undefined') {
      window.Moss.modal = {
        show: (name) => {
          this.$root.$emit('modal-toggle', name, 'show');
        },
        close: (name) => {
          this.$root.$emit('modal-toggle', name, 'close');
        },
        toggle: (name, action = 'toggle') => {
          this.$root.$emit('modal-toggle', name, action);
        }
      };
    }

    if (this.closeOn) {
      window.addEventListener('click', event => {
        if (event.target.classList.contains('modal-mask')) {
          this.$root.$emit('modal-toggle', this.name, 'close');
        }
      });
    }
  }
}
</script>

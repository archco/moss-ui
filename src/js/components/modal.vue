<template lang="html">
  <transition :name="effectName">
    <div class="modal-mask" v-if="show">
        <div class="modal-content">
          <div class="modal-header">
            <h3>{{ title }}</h3>
            <button class="close-btn" @click="$emit('close')" v-html="closeButtonHtml"></button>
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
import { EventBus } from '../lib/event-bus';

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
    EventBus.$on('modal-toggle', this.toggleModal.bind(this));
    this.$on('close', () => {
      EventBus.$emit('modal-toggle', this.name, 'close');
    });

    if (typeof window.Cosmos.modal === 'undefined') {
      window.Cosmos.modal = {
        show(name) {
          EventBus.$emit('modal-toggle', name, 'show');
        },
        close(name) {
          EventBus.$emit('modal-toggle', name, 'close');
        },
        toggle(name, action = 'toggle') {
          EventBus.$emit('modal-toggle', name, action);
        }
      };
    }

    if (this.closeOn) {
      window.addEventListener('click', event => {
        if (event.target.classList.contains('modal-mask')) {
          EventBus.$emit('modal-toggle', this.name, 'close');
        }
      });
    }
  }
}
</script>

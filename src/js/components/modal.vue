<template lang="html">
  <transition :name="effectName">
    <div class="modal-mask" v-show="show">
      <div class="modal-content">
        <div class="modal-header">
          <h3>{{ title }}</h3>
          <close-button action=""
            @close="$emit('close')"
            v-html="closeButtonHtml"/>
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
import { getElements, addListener } from 'element-util';
import CloseButton from './close-button.vue';

export default {
  components: { CloseButton },
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
      default: '',
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
  watch: {
    show(shown) {
      const c = 'modal-shown';
      if (shown) {
        document.body.classList.add(c);
      } else {
        document.body.classList.remove(c);
      }
    },
  },
  methods: {
    toggleModal(name, action = 'toggle') {
      if (name !== this.name) return;
      switch (action.toLowerCase()) {
        case 'show': this.show = true; break;
        case 'close': this.show = false; break;
        case 'toggle':
        default: this.show = !this.show; break;
      }
    },
    onKeydown(event) {
      if (this.show && event.key.match(/Escape|Esc/)) {
        event.preventDefault();
        this.show = false;
      }
    },
  },
  beforeMount() {
    // add key listener. close modal if 'esc' key downed.
    window.addEventListener('keydown', this.onKeydown.bind(this));
    // register events to $root and self.
    this.$root.$on('modal-toggle', this.toggleModal.bind(this));
    this.$on('close', () => {
      this.toggleModal(this.name, 'close');
    });

    // Attaches helper methods to Moss object.
    if (typeof window.Moss !== 'undefined' && typeof window.Moss.modal === 'undefined') {
      window.Moss.modal = {
        show: name => this.$root.$emit('modal-toggle', name, 'show'),
        close: name => this.$root.$emit('modal-toggle', name, 'close'),
        toggle: (name, action = 'toggle') => this.$root.$emit('modal-toggle', name, action),
      };
    }

    if (this.closeOn) {
      document.documentElement.addEventListener('click', event => {
        if (event.target.classList.contains('modal-mask')) {
          this.toggleModal(this.name, 'close');
        }
      });
    }
  },
  mounted() {
    // Add data-toggle listeners. 'cancel'|'close'
    const elms = getElements('[data-toggle="cancel"],[data-toggle="close"]', this.$el);
    addListener(elms, 'click', () => this.toggleModal(this.name, 'close'));
  }
}
</script>

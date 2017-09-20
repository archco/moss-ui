<template lang="html">
  <label class="input-radio" :for="id">
    <input type="radio"
      :id="id"
      :name="name"
      :value="value"
      :class="className"
      :required="required"
      :checked="state"
      @change="onChange">
    <slot name="input-box">
      <span class="input-box">
        <span class="input-box-circle"></span>
      </span>
    </slot>
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: 'input-radio',
  model: {
    prop: 'modelValue',
    event: 'change'
  },
  props: {
    id: {
      type: String,
      default: function () {
        return 'input-radio-id-' + this._uid;
      },
    },
    name: {
      type: String,
      default: null,
    },
    value: {
      type: String,
      default: '',
    },
    modelValue: {
      type: String,
      default: undefined,
    },
    className: {
      type: String,
      default: null,
    },
    checked: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    state () {
      if (this.modelValue === undefined) {
        return this.checked;
      }
      return this.modelValue === this.value;
    }
  },
  methods: {
    onChange() {
      this.toggle();
    },
    toggle() {
      this.$emit('change', this.state ? '' : this.value);
    }
  },
  watch: {
    checked(newValue) {
      if (newValue !== this.state) {
        this.toggle();
      }
    }
  },
  mounted() {
    if (this.checked && !this.state) {
      this.toggle();
    }
  },
}
</script>

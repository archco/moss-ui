<template lang="html">
  <label :for="id" class="input-radio">
    <input type="radio"
      :id="id"
      :name="name"
      :value="value"
      :class="className"
      :required="required"
      :checked="state"
      @change="toggle">
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
  model: {
    prop: 'modelValue',
    event: 'change'
  },
  props: {
    id: {
      type: String,
      default: function () { // use function syntax because access 'this._uid'.
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
      return this.modelValue === undefined
        ? this.checked
        : this.modelValue === this.value;
    }
  },
  methods: {
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
    console.warn('"input-radio" component deprecated in v0.6.x. Recommend you use default tags or other external plugins.');
    if (this.checked && !this.state) {
      this.toggle();
    }
  },
}
</script>

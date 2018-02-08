<template lang="html">
  <label :for="id" class="input-check">
    <input type="checkbox"
      :id="id"
      :name="name"
      :value="value"
      :class="className"
      :required="required"
      :checked="state"
      @change="toggle">
    <slot name="input-box">
      <span class="input-box">
        <svg class="input-box-tick" viewBox="0 0 16 16">
          <path fill="none" d="M1.7,7.8l3.8,3.4l9-7.8"></path>
        </svg>
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
      default: function () {
        return 'input-check-id-' + this._uid;
      },
    },
    name: {
      type: String,
      default: null,
    },
    value: {
      type: String,
      default: null,
    },
    modelValue: {
      type: String | Array,
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
      if (Array.isArray(this.modelValue)) {
        return this.modelValue.indexOf(this.value) > -1;
      }
      return this.modelValue;
    }
  },
  methods: {
    toggle() {
      let value;

      if (Array.isArray(this.modelValue)) {
        value = this.modelValue.slice(0);

        if (this.state) {
          value.splice(value.indexOf(this.value), 1);
        } else {
          value.push(this.value);
        }
      } else {
        value = !this.state;
      }

      this.$emit('change', value);
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

<template>
  <div></div>
</template>

<script>
export default {
  props: {
    type: String,
  },
  data() {
    return {
      entries: {
        spin: {
          className: 'loader-spin',
        },
        grow: {
          className: 'loader-grow',
        },
        dots: {
          className: 'loader-dots',
          divCount: 4,
        },
        roller: {
          className: 'loader-roller',
          divCount: 8,
        }
      }
    };
  },
  mounted() {
    const item = this.$data.entries[this.type];
    this.$el.classList.add(item.className);
    if (item.divCount) this.addDiv(item.divCount);
  },
  methods: {
    addDiv(count) {
      for (let i = 0; i < count; i++) {
        this.$el.appendChild(document.createElement('div'));
      }
    },
  },
}
</script>

<script>
import Icon from './icon.vue';

export default {
  props: {
    target: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
      default: 'div',
    },
    accordion: {
      // accordion group name.
      type: String,
      default: '',
    },
  },
  render(createElement) {
    const icon = createElement(Icon, {
      props: { name: 'arrow-down' }
    });
    const span = createElement('span', {}, this.$slots.default);
    const directive = this.accordion
      ? this.getAccordionDirective()
      : this.getCollapseDirective();
    return createElement(
      this.tag,
      {
        class: { 'collapse-toggle': true },
        directives: [directive],
      },
      [icon, span]
    );
  },
  methods: {
    getCollapseDirective() {
      return {
        name: 'collapse',
        arg: this.target,
      };
    },
    getAccordionDirective() {
      return {
        name: 'accordion',
        arg: this.target,
        value: this.accordion,
      };
    }
  }
}
</script>

<template>
  <div>
    <ul :class="tabsClass" v-wrap:responsive>
      <li v-for="tab in tabs"
        :key="tab.name"
        :style="{ flexGrow: growEnabled ? '1' : '' }">
        <a
          href="#"
          :class="tabClass(tab)"
          @click.prevent="selectTab(tab)">
          {{ tab.name }}
        </a>
      </li>
    </ul>

    <div class="tabs-container" :style="containerStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Tab from './tab.vue';
import Wrap from '../directives/wrap';

export default {
  components: { Tab },
  directives: { Wrap },
  props: {
    effect: {
      type: String,
      default: '',
    },
    align: {
      type: String,
      default: 'start',
    },
    growEnabled: {
      type: Boolean,
      default: false,
    },
    containerStyle: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  computed: {
    effectName() {
      return (this.effect) ? `tab-${this.effect}` : '';
    },
    tabsClass() {
      let classObject = { tabs: true };
      classObject[`justify-content-${this.align}`] = true;
      return classObject;
    },
  },
  data() {
    return {
      tabs: [],
    };
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach(tab => tab.isActive = (tab.name === selectedTab.name));
      this.$emit('tab-selected', selectedTab);
    },
    tabClass(tab) {
      let obj = {
        'tab-link': true,
        active: tab.isActive,
      };
      if (tab.activeColor) obj[tab.activeColor] = true;
      return obj;
    }
  },
  created() {
    this.tabs = this.$children;
  },
  mounted() {
    this.tabs.forEach(tab => tab.effectName = this.effectName);
  },
};
</script>

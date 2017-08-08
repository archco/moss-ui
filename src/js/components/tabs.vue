<template>
  <div>
    <ul :class="tabsClass" v-wrap:responsive>
      <li v-for="tab in tabs" :style="{ flexGrow: growEnabled ? 1 : null }">
        <a
          href="#"
          :class="tabClass(tab)"
          @click.prevent="selectTab(tab)">
          {{ tab.name }}
        </a>
      </li>
    </ul>

    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:'tabs',
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
  },
  computed: {
    effectName() {
      return (this.effect) ? `tab-${this.effect}` : 'none';
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
      this.tabs.forEach(tab => {
        tab.isActive = (tab.name === selectedTab.name);
      });
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
    this.tabs.forEach(tab => {
      tab.effectName = this.effectName;
    });
  },
};
</script>

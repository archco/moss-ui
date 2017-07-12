<template>
  <div>
    <ul class="tabs">
      <li v-for="tab in tabs">
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
      default: ''
    }
  },
  computed: {
    effectName() {
      return (this.effect) ? `tab-${this.effect}` : 'none';
    }
  },
  data() {
    return {
      tabs: [],
    };
  },
  created() {
    this.tabs = this.$children;
  },
  mounted() {
    this.tabs.forEach(tab => {
      tab.effectName = this.effectName;
    });
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
      if (tab.tipColor) obj[tab.tipColor] = true;
      return obj;
    }
  }
};
</script>

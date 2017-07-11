<template>
  <div>
    <ul class="tabs">
      <li v-for="tab in tabs">
        <a
          href="#"
          :class="{
            'tab-link': true,
            active: tab.isActive,
          }"
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
  data() {
    return {
      tabs: [],
    };
  },
  created() {
    this.tabs = this.$children;
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = (tab.name === selectedTab.name);
      });
      this.$emit('tab-selected', selectedTab);
    },
  }
};
</script>

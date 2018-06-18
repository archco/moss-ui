<template>
  <div class="icon-list">
    <div class="mb-3">
      <input class="inline" type="text" placeholder="search.." v-model="input">
    </div>
    <div v-for="item of icons"
      :key="item.name"
      class="icon-item">
      <div class="icon-box">
        <icon :name="item.name"></icon>
      </div>
      <div>
        <h4 class="mt-2 mb-1">{{ item.name }}</h4>
        <span class="help">{{ item.keywords.join(', ') }}</span>
      </div>
    </div>
  </div>

</template>

<script>
import Icons from '../data/icons.json';

export default {
  data() {
    return {
      icons: Icons,
      input: '',
    };
  },
  watch: {
    input(val) {
      const filter = window.Moss.lib.ElementUtil.filter;

      filter('.icon-list > .icon-item', val, { action: 'hideOthers' });
    },
  },
}
</script>

<style lang="scss" scoped>
.icon-item {
  margin-right: 1rem;
  margin-bottom: 1rem;
  padding: .25rem;
  width: 130px;
  display: inline-flex;
  flex-direction: column;
  text-align: center;
  border-radius: 4px;
  transition: all .4s ease-in-out;

  &:hover {
    background-color: #333;
    color: #fff;
  }
}

.icon-box {
  font-size: 3em;
}
</style>

<template>
  <div>
    <div class="input-group search-input">
      <input type="search" name="" v-model="input"/>
      <div class="input-group-append">
        <button class="btn link">
          <icon name="search"/>
        </button>
      </div>
    </div>

    <ul class="list search-result-list" v-show="hasResult">
      <slot name="result-item"
        v-for="item in result">
        <li :key="item._id" @click="onClickItem(item)">{{ item.name }}</li>
      </slot>
    </ul>
  </div>
</template>

<script>
import Icon from './icon.vue';
import Fuse from 'fuse.js';
import Popper from 'popper.js';

export default {
  components: { Icon },
  props: {
    collection: {
      type: Array,
      default: () => {
        return [];
      },
    },
    searchOptions: {
      type: Object,
      default: () => {
        return {};
      },
    },
    resultLimit: {
      type: Number,
      default: 0, // no limit.
    },
    popperOptions: {
      type: Object,
      default: () => {
        return {};
      },
    },
    autoWidth: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      input: '',
      fuse: new Fuse(this.collection, this.searchOptions),
      result: [],
      popper: null,
      elm: {},
    };
  },
  computed: {
    hasResult() {
      return this.result.length > 0;
    },
  },
  watch: {
    input(val) {
      this.search(val);
    },
    hasResult(val) {
      if (!this.popper) this.createPopper();
      if (val) this.popper.scheduleUpdate();
    }
  },
  mounted() {
    this.initElements();
    // auto width to result-list.
    if (this.autoWidth) this.setAutoWidth();
  },
  methods: {
    search(str) {
      let res = this.fuse.search(str);
      if (this.resultLimit > 0) {
        res = res.slice(0, this.resultLimit);
      }
      return this.result = res;
    },
    onClickItem(item) {
      console.log(item);
    },
    initElements() {
      this.elm.resultList = this.$el.querySelector('.search-result-list');
      this.elm.input = this.$el.querySelector('.search-input');
    },
    createPopper() {
      const options = Object.assign({
        // default options.
        placement: 'bottom',
        modifiers: {
          flip: {
            enabled: false,
          },
        },
      }, this.popperOptions);
      this.popper = new Popper(this.elm.input, this.elm.resultList, options);
    },
    setAutoWidth() {
      let inputWidth = window.getComputedStyle(this.elm.input).width;
      inputWidth = Math.floor(parseFloat(inputWidth));
      this.elm.resultList.style.width = `${inputWidth}px`;
    }
  }
}
</script>

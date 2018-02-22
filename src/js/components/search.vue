<template>
  <div class="search-component">
    <form action="#" method="get" @submit.prevent="onSubmit" class="search-form">
      <div class="input-group">
        <input type="search" name="input" class="search-input" v-model="input" autocomplete="off"/>
        <div class="input-group-append">
          <button type="submit" class="btn"><icon name="search"/></button>
        </div>
      </div>
    </form>

    <ul class="list search-result-list" v-show="showResult">
      <slot name="result-item"
        v-for="item in result"
        :item="item"
        :on-click-item="onClickItem">
        <li :key="item._id" @click.prevent="onClickItem(item)" tabindex="0">
          {{ item.name }}
        </li>
      </slot>
    </ul>
  </div>
</template>

<script>
import ElementUtil from 'element-util';
import Fuse from 'fuse.js';
import Popper from 'popper.js';
import Icon from './icon.vue';

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
    popperOptions: {
      type: Object,
      default: () => {
        return {};
      },
    },
    resultLimit: {
      type: Number,
      default: 0, // no limit.
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
      popper: null,
      result: [],
      elm: {},
      showResult: false,
      itemKeydownListenerAttached: false,
    };
  },
  watch: {
    input(val) {
      this.search(val);
    },
    result(val) {
      if (val.length > 0) {
        this.itemKeydownListenerAttached = false;
      } else {
        this.showResult = false;
      }
    },
    showResult(val) {
      if (!this.popper) this.createPopper();
      if (val) this.popper.scheduleUpdate();
    }
  },
  mounted() {
    this.initElements();
    this.addListeners();
    if (this.autoWidth) this.setAutoWidth(); // auto width to result-list.
  },
  methods: {
    search(str) {
      let res = this.fuse.search(str);
      if (this.resultLimit > 0) {
        res = res.slice(0, this.resultLimit);
      }
      if (res.length > 0) this.showResult = true;
      return this.result = res;
    },

    onClickItem(item) {
      this.$emit('item-clicked', item);
    },

    onSubmit() {
      if (!this.input) return;
      const data = {
        input: this.input,
        result: this.result,
      };
      this.$emit('submit', data);
    },

    onKeydownItem(event) {
      // result-item - ArrowUp|ArrowDown|Enter|Escape
      if (event.key.match(/Escape|Esc/)) {
        this.elm.input.focus();
      }
      if (event.key.match(/Enter/)) {
        event.currentTarget.click();
      }
      if (event.key.match(/ArrowUp|ArrowDown|Up|Down/)) {
        event.preventDefault();
        const items = this.getCurrentItems();
        let index = items.findIndex(item => item === event.currentTarget);
        if (index === -1) return;
        if (event.key.match(/ArrowUp|Up/)) {
          index = index === 0 ? items.length - 1 : index - 1;
          items[index].focus();
        }
        if (event.key.match(/ArrowDown|Down/)) {
          index = index === items.length - 1 ? 0 : index + 1;
          items[index].focus();
        }
      }
    },

    initElements() {
      this.elm.form = this.$el.querySelector('.search-form');
      this.elm.input = this.$el.querySelector('.search-input');
      this.elm.resultList = this.$el.querySelector('.search-result-list');
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
      this.popper = new Popper(this.elm.form, this.elm.resultList, options);
    },

    addListeners() {
      // input - ArrowUp|ArrowDown
      this.elm.input.addEventListener('keydown', event => {
        if (event.key.match(/ArrowUp|ArrowDown|Up|Down/)) {
          event.preventDefault();
          const items = this.getCurrentItems();
          if (event.key.match(/ArrowUp|Up/)) {
            items[items.length - 1].focus();
          }
          if (event.key.match(/ArrowDown|Down/)) {
            items[0].focus();
          }
          // attach keydown listener to items.
          if (!this.itemKeydownListenerAttached) {
            this.itemKeydownListenerAttached = true;
            items.forEach(item => {
              item.addEventListener('keydown', this.onKeydownItem.bind(this));
            });
          }
        }
      });
      // other click.
      document.documentElement.addEventListener('click', event => {
        const isOwn = ElementUtil.findAncestor(event.target, this.$el) !== null;
        if (!isOwn && this.showResult) this.showResult = false;
      });
    },

    setAutoWidth() {
      let formWidth = window.getComputedStyle(this.elm.form).width;
      formWidth = Math.floor(parseFloat(formWidth));
      this.elm.resultList.style.width = `${formWidth}px`;
    },

    getCurrentItems() {
      const nodes = ElementUtil.getElements('li', this.elm.resultList);
      return ElementUtil.nodeListToArray(nodes);
    },
  }
}
</script>

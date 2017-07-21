<template lang="html">
  <div>
    <message
      v-for="message of messages"
      :key="message.id"
      :status="message.status"
      :effect="effect"
      :close-html="closeHtml"
      close-emit="remove"
      @remove="onRemove(message.id)">
      {{ message.text }}
    </message>
  </div>
</template>

<script>
import { EventBus } from '../lib/event-bus';

export default {
  name: 'message-box',
  props: {
    effect: {
      type: String,
      default: 'fade',
    },
    closeHtml: {
      type: String,
      default: '✖',
    }
  },
  data() {
    return {
      incresement: 0,
      messages: [],
    };
  },
  methods: {
    add(text, status = 'default') {
      this.messages.push({
        id: this.incresement,
        status,
        text,
      });
      this.incresement++;
    },
    clear() {
      this.messages = [];
    },
    onRemove(id) {
      let index = this.messages.findIndex(item => {
        return item.id === id;
      });
      this.messages.splice(index, 1);
    }
  },
  beforeMount() {
    // message-box is unique component.
    if (typeof window.Moss.messageBox === 'undefined') {
      EventBus.$on('message-box-add', (text, status) => {
        this.add(text, status);
      });
      EventBus.$on('message-box-clear', () => {
        this.clear();
      });

      window.Moss.messageBox = {
        add(text, status = 'default') {
          EventBus.$emit('message-box-add', text, status);
        },
        clear() {
          EventBus.$emit('message-box-clear');
        }
      };
    }
  }
}
</script>

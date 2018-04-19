<template>
  <collapse class="nav-drawer" :id="id" direction="horizontal">
    <slot></slot>
  </collapse>
</template>

<script>
export default {
  props: ['id'],
}
</script>

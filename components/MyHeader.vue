<template>
  <header class="my-header">
    <top-bar></top-bar>
    <my-menu></my-menu>
  </header>
</template>

<script>
import MyMenu from '~/components/MyMenu.vue'
import TopBar from '~/components/TopBar.vue'

export default {
  name: 'MyHeader',
  components: {
    MyMenu,
    TopBar
  }
}
</script>

<style scoped></style>

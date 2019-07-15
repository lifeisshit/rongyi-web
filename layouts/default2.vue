<template>
  <div>
    <my-header></my-header>
    <nuxt class="content no-padding-bottom" />
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from '../components/MyHeader'
import MyFooter from '../components/MyFooter'

export default {
  components: { MyFooter, MyHeader }
}
</script>

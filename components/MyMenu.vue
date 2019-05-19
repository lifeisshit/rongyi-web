<template>
  <div class="my-menu wrap">
    <h1 class="r-pull-left left-logo">
      <nuxt-link to="/">
        <img class="main-logo" src="~/static/img/logo.png" alt="融易网" />
      </nuxt-link>
    </h1>
    <div class="r-pull-left">
      <ul class="main-menu">
        <li class="active">
          <nuxt-link to="/">首页</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">资金方</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">项目方</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">成功案例</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">会员服务</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">联系我们</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyMenu'
}
</script>

<style scoped></style>

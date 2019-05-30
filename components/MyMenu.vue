<template>
  <div class="my-menu wrap">
    <h1 class="r-pull-left left-logo">
      <nuxt-link to="/">
        <img class="main-logo" src="~/assets/img/logo.png" alt="融易网" />
      </nuxt-link>
    </h1>
    <div class="r-pull-left">
      <nav class="main-menu">
        <nuxt-link to="/" exact><span>首页</span></nuxt-link>
        <nuxt-link to="/fund" exact><span>资金方</span></nuxt-link>
        <nuxt-link to="/project" exact><span>项目方</span></nuxt-link>
        <nuxt-link to="/successcase" exact><span>成功案例</span></nuxt-link>
        <nuxt-link to="/member" exact><span>会员服务</span></nuxt-link>
        <nuxt-link to="/contact" exact><span>联系我们</span></nuxt-link>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyMenu'
}
</script>

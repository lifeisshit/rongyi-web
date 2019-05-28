<template>
  <nav class="my-menu wrap">
    <h1 class="r-pull-left left-logo">
      <nuxt-link to="/">
        <img class="main-logo" src="~/assets/img/logo.png" alt="融易网" />
      </nuxt-link>
    </h1>
    <div class="r-pull-left">
      <ul class="main-menu">
        <li>
          <nuxt-link to="/" exact>首页</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/fund">资金方</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/project">项目方</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/successcase">成功案例</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/member">会员服务</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/contact">联系我们</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'MyMenu'
}
</script>

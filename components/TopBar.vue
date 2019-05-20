<template>
  <div class="top-bar">
    <div class="wrap">
      <span class="top-left r-pull-left">
        为了您有更好的咨询体验，请选择在线客服 客服热线：400-123-9876
      </span>
      <div v-if="!isLogin" class="top-right r-pull-right">
        <span class="please-login">
          <nuxt-link to="/">请登录</nuxt-link>
        </span>
        <span class="please-register">
          <nuxt-link to="/">注册有礼</nuxt-link>
        </span>
      </div>
      <div v-if="isLogin" class="top-right">
        <a>张三</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopBar',
  data() {
    return {
      isLogin: false
    }
  }
}
</script>

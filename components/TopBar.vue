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
      <div v-if="isLogin" class="top-right r-pull-right">
        <span class="welcome">您好</span>
        <nuxt-link to="/" class="user-name">{{ userName }}</nuxt-link>
        <span class="ver-line"></span>
        <span class="logout">退出登录</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopBar',
  data() {
    return {
      isLogin: false,
      userName: '15685235621'
    }
  }
}
</script>

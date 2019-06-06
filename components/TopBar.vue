<template>
  <div class="top-bar">
    <div class="wrap">
      <span class="top-left r-pull-left">
        为了您有更好的咨询体验，请选择在线客服 客服热线：{{ companyTel }}
      </span>
      <div v-if="!nuxtToken" class="top-right r-pull-right">
        <span class="please-login">
          <nuxt-link to="/login">请登录</nuxt-link>
        </span>
        <span class="please-register">
          <nuxt-link to="/register">注册有礼</nuxt-link>
        </span>
      </div>
      <div v-if="nuxtToken" class="top-right r-pull-right">
        <span class="welcome">您好</span>
        <nuxt-link :to="userLink" class="user-name">{{ user.login }}</nuxt-link>
        <span class="ver-line"></span>
        <span class="logout" @click="onLogOutClick">退出登录</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'TopBar',
  data() {
    return {}
  },
  computed: {
    ...mapState(['companyTel']),
    ...mapState('user', ['user', 'nuxtToken']),
    userLink() {
      let linkUrl = ''
      if (this.user) {
        // 如果已经完成第二步，则直接进入个人中心
        if (this.user.hasCompleteBusinessInfo) {
          linkUrl = '/usercenter'
        } else if (this.user.hasCompleteMemberInfo) {
          // 如果已经完成第一步，则直接进入第二步页面
          linkUrl = '/usercenter/custom'
        } else {
          // 如果第一步没有完成，则进入第一步页面
          linkUrl = '/usercenter/finish'
        }
      } else {
        linkUrl = '/login'
      }
      return linkUrl
    }
  },
  methods: {
    ...mapActions('user', ['logout']),
    // 登出事件
    async onLogOutClick() {
      await this.logout()
      this.$router.push('/login')
    }
  }
}
</script>

<template>
  <div class="left-menu">
    <dl>
      <dt>账户管理</dt>
      <dd>
        <nuxt-link to="/usercenter" :class="{ active: active == 401 }"
          >我的资料</nuxt-link
        >
      </dd>
    </dl>
    <dl>
      <dt>信息管理</dt>
      <dd>
        <nuxt-link to="/usercenter" :class="{ active: active == 201 }"
          >发布信息</nuxt-link
        >
      </dd>
      <dd>
        <nuxt-link to="/usercenter" :class="{ active: active == 202 }"
          >已发布的信息</nuxt-link
        >
      </dd>
      <dd>
        <nuxt-link to="/usercenter" :class="{ active: active == 206 }"
          >发起的投递</nuxt-link
        >
      </dd>
    </dl>
  </div>
</template>

<script>
import '~/assets/css/ucenter-left-menu.less'

export default {
  name: 'UcenterLeftMenu',
  props: {
    activeMenu: {
      type: Number,
      default: 401
    }
  },
  data() {
    return {
      active: this.activeMenu
    }
  },
  mounted() {},
  methods: {}
}
</script>

<template>
  <div class="member">
    <div class="member-bar"></div>
    <div class="member-combo wrap">
      <h2 class="combo-tip">推荐品质服务</h2>
      <div class="combo-list">
        <div class="combo-item combo-normal">
          <div class="combo-img"></div>
          <p class="combo-title">融易通</p>
          <p class="combo-text">融资特刊</p>
          <p class="combo-text">每周引荐资方</p>
          <p class="combo-text">专业融资顾问跟踪指导</p>
          <nuxt-link to="#" class="link-fee">12800/2个月</nuxt-link>
        </div>
        <div class="combo-item combo-diamond">
          <div class="combo-img"></div>
          <p class="combo-title">融易通钻石版</p>
          <p class="combo-text">融资特刊</p>
          <p class="combo-text">每周引荐资方</p>
          <p class="combo-text">专业商业计划书撰写</p>
          <p class="combo-text">专业融资顾问跟踪指导</p>
          <nuxt-link to="#" class="link-fee">￥29800/2个月</nuxt-link>
        </div>
      </div>
    </div>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import '~/assets/css/member.less'
import BottomBar from '~/components/BottomBar.vue'

export default {
  name: 'Member',
  components: { BottomBar }
}
</script>

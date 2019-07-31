<template>
  <footer class="my-footer">
    <div class="wrap">
      <div class="footer-part1">
        <div class="r-pull-left">
          <nuxt-link to="/" title="融易网">
            <img
              class="bottom-logo"
              src="~/assets/img/bottom-logo.png"
              alt="跳转到融易网首页"
            />
          </nuxt-link>
        </div>
        <div class="r-pull-right">
          <p class="tel-text">全国统一服务电话</p>
          <p class="tel-value">{{ companyTel }}</p>
        </div>
      </div>
      <div class="footer-part2">
        <ul class="r-pull-left bottom-menu">
          <li>
            <nuxt-link to="/">网站地图</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">法律声明</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">版权信息</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">联系我们</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">帮助中心</nuxt-link>
          </li>
        </ul>
        <div class="r-pull-right">
          <p class="copyright">
            版权所有：武汉融易网信息服务有限公司 鄂ICP备19013312号-1
          </p>
          <p>公司地址：武汉市洪山区东湖国贸中心B座1301室</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'MyFooter',
  computed: {
    ...mapState(['companyTel'])
  }
}
</script>

<style scoped></style>

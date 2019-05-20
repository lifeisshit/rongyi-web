<template>
  <footer class="my-footer">
    <div class="wrap">
      <div class="footer-part1">
        <div class="r-pull-left">
          <nuxt-link to="/" title="融易网">
            <img
              class="bottom-logo"
              src="~/static/img/bottom-logo.png"
              alt="跳转到融易网首页"
            />
          </nuxt-link>
        </div>
        <div class="r-pull-right">
          <p class="tel-text">全国统一服务电话</p>
          <p class="tel-value">400-809-100</p>
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
          <p>版权所有：融易网 鄂ICPXXXXXX号</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'MyFooter'
}
</script>

<style scoped></style>

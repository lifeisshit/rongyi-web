<template>
  <div>
    <div class="error-page">
      <div class="error-img"></div>
      <div class="error-info">
        <p class="error-title">sorry 您访问的页面弄丢了</p>
        <p class="error-sub-title">您可以通过以下方式继续访问……</p>
        <nuxt-link to="/" class="index-link">返回首页</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error',
  layout: 'base'
}
</script>

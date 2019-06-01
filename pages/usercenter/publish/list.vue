<template>
  <div class="content">
    <div class="ucenter-warp wrap">
      <div class="uc-left-menu">
        <UcenterLeftMenu :active-menu="204"></UcenterLeftMenu>
      </div>
      <div class="uc-right-main">
        <div class="main-page-out">
          <div class="page-cate-name">已发布信息</div>
          <MyCollect></MyCollect>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import '~/assets/css/ucenter-collect.less'
import UcenterLeftMenu from '~/components/UcenterLeftMenu'
import MyCollect from '~/components/MyCollect'

export default {
  name: 'PublishList',
  middleware: 'authenticated',
  components: {
    UcenterLeftMenu,
    MyCollect
  },
  data() {
    return {
      activeName: 'first'
    }
  },
  mounted() {},
  methods: {}
}
</script>

<template>
  <div>
    <div class="ucenter-warp wrap">
      <div class="uc-left-menu">
        <UcenterLeftMenu :active-menu="301"></UcenterLeftMenu>
      </div>
      <div class="uc-right-main">
        <div class="main-page-out">
          <div class="page-cate-name">已投递的项目</div>
          <el-table
            ref="multipleTable"
            :data="deliverList"
            tooltip-effect="dark"
            style="width: 100%"
            class="collect-table"
            empty-text="暂无数据"
          >
            <el-table-column type="selection" width="50"></el-table-column>
            <el-table-column label="项目标题" width="200">
              <template slot-scope="scope">
                <!--<i class="el-icon-dot"></i>-->
                <nuxt-link :to="`/fund/${scope.row.id}`" class="title-txt">{{
                  scope.row.title
                }}</nuxt-link>
              </template>
            </el-table-column>
            <el-table-column
              prop="description"
              label="项目描述"
            ></el-table-column>
            <el-table-column label="发布日期" width="150">
              <template slot-scope="scope">{{
                scope.row.gmtCreate | formatDate('yyyy-MM-dd')
              }}</template>
            </el-table-column>
          </el-table>
          <div v-if="deliverList.length > 0" class="collect-pagination">
            <el-pagination
              background
              layout="prev, pager, next"
              prev-text="上一页"
              next-text="下一页"
              :total="totalRow"
              :page-size="pageSize"
              :current-page="currentPage"
              @current-change="handleCurrentChange"
            ></el-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import '~/assets/css/ucenter-collect.less'
import UcenterLeftMenu from '~/components/UcenterLeftMenu'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'PublishList',
  middleware: 'authenticated',
  components: {
    UcenterLeftMenu
  },
  data() {
    return {
      currentPage: 1
    }
  },
  computed: {
    ...mapState('fund', ['deliverList', 'pageSize', 'totalRow'])
  },
  async fetch({ store }) {
    await Promise.all([
      store.dispatch('fund/getAppointPageList', {
        pageNum: 1,
        userId: store.state.user.user.id
      })
    ]).catch(() => {})
  },
  methods: {
    ...mapActions('fund', ['getAppointPageList']),
    handleCurrentChange(page) {
      this.getAppointPageList({
        pageNum: page || 1
      })
      this.currentPage = page || 1
    }
  }
}
</script>

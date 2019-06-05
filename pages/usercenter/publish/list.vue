<template>
  <div>
    <div class="ucenter-warp wrap">
      <div class="uc-left-menu">
        <UcenterLeftMenu :active-menu="204"></UcenterLeftMenu>
      </div>
      <div class="uc-right-main">
        <div class="main-page-out">
          <div class="page-cate-name">已发布信息</div>
          <el-table
            ref="multipleTable"
            :data="projectList"
            tooltip-effect="dark"
            style="width: 100%"
            class="collect-table"
            empty-text="暂无数据"
          >
            <el-table-column type="selection" width="40"></el-table-column>
            <el-table-column label="标题内容">
              <template slot-scope="scope">
                <!--<i class="el-icon-dot"></i>-->
                <nuxt-link :to="`/project/${scope.row.id}`" class="title-txt">{{
                  scope.row.title
                }}</nuxt-link>
              </template>
            </el-table-column>
            <el-table-column
              prop="type"
              label="信息类型"
              width="150"
            ></el-table-column>
            <el-table-column
              prop="financeAmount"
              label="融资金额"
              width="180"
            ></el-table-column>
            <el-table-column label="发布日期" width="150">
              <template slot-scope="scope">{{
                scope.row.gmtCreate | formatDate('yyyy-MM-dd')
              }}</template>
            </el-table-column>
          </el-table>
          <div v-if="projectList.length > 0" class="collect-pagination">
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
    ...mapState('project', ['pageSize', 'totalRow', 'projectList']),
    ...mapState('user', ['user'])
  },
  async fetch({ store }) {
    await Promise.all([
      store.dispatch('project/getPageList', {
        pageNum: 1,
        hasUser: true
      })
    ]).catch(() => {})
  },
  methods: {
    ...mapActions('project', ['getPageList']),
    handleCurrentChange(page) {
      this.getPageList({
        pageNum: page || 1,
        hasUser: true
      })
      this.currentPage = page || 1
    }
  }
}
</script>

<template>
  <div class="fund-detail-page">
    <div class="wrap">
      <div class="detail-title">
        <h1>{{ newsInfo.title || '' }}</h1>
        <div class="infos">
          <span class="el-icon-time"
            ><span>{{ newsInfo.gmtCreate || '' }}</span></span
          >
          <span class="el-icon-view"
            ><span>{{ viewTime }}</span></span
          >
          <span class="el-icon-edit-outline"><span>评论区</span></span>
          <span class="el-icon-share"><span>分享</span></span>
        </div>
      </div>
      <div class="detail-content">
        <div class="detail-left-box">
          <div class="news-content" v-html="newsInfo.content"></div>
        </div>
        <div class="detail-right-box">
          <div class="horizontal-line"></div>
          <div class="detail-right-ctn">
            <div class="tips">最近浏览的项目</div>
            <el-steps
              v-if="projectRecentList.length > 0"
              direction="vertical"
              :active="1"
            >
              <el-step
                v-for="project in projectRecentList"
                :key="project.id"
                :title="project.title"
                @click.native="linkToContent(project.id)"
              ></el-step>
            </el-steps>
            <div v-if="projectRecentList.length === 0" class="no-data">
              暂无数据
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '~/assets/css/business-detail.less'
import { mapState } from 'vuex'
import { random3Num } from '~/common/util'

export default {
  name: 'NewsId',
  data() {
    return {
      viewTime: random3Num()
    }
  },
  computed: {
    ...mapState('project', ['projectRecentList']),
    ...mapState('news', ['newsInfo'])
  },
  async fetch({ store, params }) {
    await Promise.all([
      store.dispatch('news/getById', { id: params.id }),
      store.dispatch('project/getRecentList')
    ]).catch(() => {})
  },
  methods: {
    linkToContent(id) {
      this.$router.push({
        path: '/project/' + id
      })
    }
  }
}
</script>

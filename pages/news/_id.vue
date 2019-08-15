<template>
  <div class="fund-detail-page">
    <div class="wrap">
      <div class="detail-title">
        <h1>{{ newsInfo.title || '' }}</h1>
        <ul class="infos">
          <li>
            <i class="el-icon-time"></i><span>{{ newsInfo.gmtCreate }}</span>
          </li>
          <li>
            <i class="el-icon-view"></i><span>{{ viewTime }}</span>
          </li>
          <li><i class="el-icon-edit-outline"></i><span>评论区</span></li>
          <li class="share">
            <i class="el-icon-share"></i><span>分享</span>
            <div id="qrcode"></div>
          </li>
        </ul>
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
/* eslint-disable no-undef */

import '~/assets/css/business-detail.less'
import { mapState } from 'vuex'
import { random3Num } from '~/common/util'

export default {
  name: 'NewsId',
  head() {
    return {
      script: [
        {
          src: '/js/qrcode.min.js',
          body: true
        }
      ]
    }
  },
  data() {
    return {
      viewTime: random3Num()
    }
  },
  mounted() {
    this.$nextTick(() => {
      const qrcode = new QRCode('qrcode', {
        width: 150, // 二维码宽度，单位像素
        height: 150, // 二维码高度，单位像素
        text: `https://www.rongyi8.com/news/${this.$route.params.id}`, // 二维码中的内容
        colorDark: '#000000', // 前景色
        colorLight: '#ffffff', // 背景色
        correctLevel: QRCode.CorrectLevel.H // 容错级别，
      })
    })
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

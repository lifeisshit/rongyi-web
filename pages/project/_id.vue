<template>
  <div class="fund-detail-page">
    <div class="wrap">
      <div class="detail-title">
        <h1>{{ projectInfo.title }}</h1>
        <ul class="infos">
          <li>
            <i class="el-icon-time"></i><span>{{ projectInfo.gmtCreate }}</span>
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
          <div class="detail-labes">
            <ul class="clearfix">
              <li><label>项目类型：</label>{{ projectInfo.type }}</li>
              <li><label>所在地区：</label>{{ projectInfo.region }}</li>
              <li><label>所属行业：</label>{{ projectInfo.industry }}</li>
              <li><label>投资金额：</label>{{ projectInfo.investAmount }}</li>
              <li><label>融资用途：</label>{{ projectInfo.financeUse }}</li>
              <li><label>融资金额：</label>{{ projectInfo.financeAmount }}</li>
              <li><label>总投金额：</label>{{ projectInfo.investAmount }}</li>
              <li><label>投资估算：</label>{{ projectInfo.investEstimate }}</li>
              <li><label>融资方式：</label>{{ projectInfo.financeWay }}</li>
              <li>
                <label>项目所处阶段：</label>{{ projectInfo.projectPeriod }}
              </li>
              <li><label>资产估价：</label>{{ projectInfo.assetValue }}</li>
              <li><label>招商方式：</label>{{ projectInfo.attractWay }}</li>
              <li><label>投资期限：</label>{{ projectInfo.investTime }}</li>
            </ul>
            <div class="item-action">
              <div class="item-text">
                <div class="text1">项目投递</div>
                <div class="text2">
                  对该资金感兴趣？快来投递项目方吧，让资金方主动联系您！
                </div>
              </div>
              <!--<a class="talks-btn" href="">投递项目</a>-->
            </div>
          </div>
          <div class="detail-item-desc">
            <el-tabs v-model="activeName" type="card" class="detail-tab-divide">
              <el-tab-pane label="项目简介" name="first">
                <div class="dec">
                  {{ projectInfo.projectDesc || '无' }}
                </div>
              </el-tab-pane>
              <el-tab-pane label="其他备注" name="second">
                <div class="dec">
                  {{ projectInfo.otherComment || '无' }}
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
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
  name: 'ProjectId',
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
      viewTime: random3Num(),
      activeName: 'first'
    }
  },
  mounted() {
    this.$nextTick(() => {
      // 保证qrcode.js完全下载完再初始化
      setTimeout(() => {
        const qrcode = new QRCode('qrcode', {
          width: 150, // 二维码宽度，单位像素
          height: 150, // 二维码高度，单位像素
          text: `https://www.rongyi8.com/project/${this.$route.params.id}`, // 二维码中的内容
          colorDark: '#000000', // 前景色
          colorLight: '#ffffff', // 背景色
          correctLevel: QRCode.CorrectLevel.H // 容错级别，
        })
      }, 1000)
    })
  },
  computed: {
    ...mapState('project', ['projectInfo', 'projectRecentList'])
  },
  async fetch({ store, params }) {
    await Promise.all([
      store.dispatch('project/getById', { id: params.id }),
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

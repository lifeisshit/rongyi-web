<template>
  <div class="fund-detail-page">
    <div class="wrap">
      <div class="detail-title">
        <h1>{{ fundInfo.title }}</h1>
        <ul class="infos">
          <li>
            <i class="el-icon-time"></i><span>{{ fundInfo.gmtCreate }}</span>
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
              <li><label>资金类型：</label>{{ fundInfo.type }}</li>
              <li><label>投资地区：</label>{{ fundInfo.inventRegion }}</li>
              <li><label>投资行业：</label>{{ fundInfo.investIndustry }}</li>
              <li><label>投资金额：</label>{{ fundInfo.investAmount }}</li>
              <li><label>投资类型：</label>{{ fundInfo.investType }}</li>
              <li><label>投资阶段：</label>{{ fundInfo.investPeriod }}</li>
              <li><label>投资方式：</label>{{ fundInfo.investWay }}</li>
              <li><label>风控要求：</label>{{ fundInfo.riskRequire }}</li>
              <li>
                <label>最低回报要求：</label>{{ fundInfo.minReturnRequire }}
              </li>
              <li><label>资金主体：</label>{{ fundInfo.moneySubject }}</li>
              <li>
                <label>所在地区：</label>{{ fundInfo.moneySubjectRegion }}
              </li>
              <li><label>投资期限：</label>{{ fundInfo.investDeadline }}</li>
              <li><label>需提供资料：</label>{{ fundInfo.provideData }}</li>
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
              <el-tab-pane label="投资要求概述" name="first">
                <div class="dec">
                  {{ fundInfo.investRequireDesc || '无' }}
                </div>
              </el-tab-pane>
              <el-tab-pane label="其他备注" name="second">
                <div class="dec">
                  {{ fundInfo.otherComment || '无' }}
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
        <div class="detail-right-box">
          <div class="horizontal-line"></div>
          <div class="detail-right-ctn">
            <div class="tips">最近浏览的资金</div>
            <el-steps
              v-if="fundRecentList.length > 0"
              direction="vertical"
              :active="1"
            >
              <el-step
                v-for="fund in fundRecentList"
                :key="fund.id"
                :title="fund.title"
                @click.native="linkToContent(fund.id)"
              ></el-step>
            </el-steps>
            <div v-if="fundRecentList.length === 0" class="no-data">
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
  name: 'FundsId',
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
          text: `https://www.rongyi8.com/fund/${this.$route.params.id}`, // 二维码中的内容
          colorDark: '#000000', // 前景色
          colorLight: '#ffffff', // 背景色
          correctLevel: QRCode.CorrectLevel.H // 容错级别，
        })
      }, 1000)
    })
  },
  computed: {
    ...mapState('fund', ['fundInfo', 'fundRecentList'])
  },
  async fetch({ store, params }) {
    await Promise.all([
      store.dispatch('fund/getById', { id: params.id }),
      store.dispatch('fund/getRecentList')
    ]).catch(() => {})
  },
  methods: {
    linkToContent(id) {
      this.$router.push({
        path: '/fund/' + id
      })
    }
  }
}
</script>

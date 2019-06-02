<template>
  <div class="case-detail-page">
    <div class="wrap">
      <div class="detail-content">
        <div class="detail-left-box">
          <div class="detail-infos clearfix">
            <div class="case-img">
              <img
                alt="融资成功案例"
                :src="successCaseInfo.img || require('~/assets/img/no-img.png')"
              />
            </div>
            <div class="case-infos">
              <div class="case-title ellipsis">
                {{ successCaseInfo.title }}
              </div>
              <div class="case-labels">
                <span class="el-icon-time"
                  ><span>{{ successCaseInfo.gmtCreate }}</span></span
                >
                <span class="el-icon-view"
                  ><span>{{ viewTime }}</span></span
                >
                <span class="el-icon-edit-outline"><span>评论区</span></span>
                <span class="el-icon-share"><span>分享</span></span>
              </div>
              <div class="case-rows">
                <el-row>
                  <el-col :span="6">
                    <div class="pram-value">
                      {{ successCaseInfo.fundRequire }}
                    </div>
                    <div class="pram-tips">资金要求</div>
                  </el-col>
                  <el-col :span="6">
                    <div class="pram-value">
                      {{ successCaseInfo.successAmount }}
                    </div>
                    <div class="pram-tips">成功融资金额</div>
                  </el-col>
                  <el-col :span="6">
                    <div class="pram-value">
                      {{ successCaseInfo.enterTime | formatDate('yyyy-MM-dd') }}
                    </div>
                    <div class="pram-tips">项目入驻时间</div>
                  </el-col>
                  <el-col :span="6">
                    <div class="pram-value">
                      {{
                        successCaseInfo.successTime | formatDate('yyyy-MM-dd')
                      }}
                    </div>
                    <div class="pram-tips">成功融资时间</div>
                  </el-col>
                </el-row>
              </div>
            </div>
          </div>
          <div class="detail-item-desc">
            <el-tabs v-model="activeName" type="card" class="detail-tab-divide">
              <el-tab-pane label="项目信息" name="first">
                <div class="dec">
                  {{ successCaseInfo.info }}
                </div>
              </el-tab-pane>
              <el-tab-pane label="其他备注" name="second">
                <div class="dec">
                  无
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
          <!--<div class="detail-tags">-->
          <!--标签：<a href="">农业</a><a href="">投资借贷</a-->
          <!--&gt;<a href="">基础建设</a><a href="">能源</a><a href="">信用贷款</a>-->
          <!--</div>-->
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
import '~/assets/css/case-detail.less'
import { mapState } from 'vuex'
import { random3Num } from '~/common/util'

export default {
  name: 'CaseId',
  data() {
    return {
      viewTime: random3Num(),
      activeName: 'first'
    }
  },
  computed: {
    ...mapState('successcase', ['successCaseInfo']),
    ...mapState('fund', ['fundRecentList'])
  },
  async fetch({ store, params }) {
    await Promise.all([
      store.dispatch('successcase/getById', { id: params.id }),
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

<template>
  <div class="fund-detail-page">
    <div class="wrap">
      <div class="detail-title">
        <h1>{{ projectInfo.title }}</h1>
        <div class="infos">
          <span class="el-icon-time"
            ><span>{{ projectInfo.gmtCreate }}</span></span
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
              <a class="talks-btn" href="">投递项目</a>
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
            <div class="tips">最近浏览的资金</div>
            <el-steps direction="vertical" :active="1">
              <el-step
                title="陕西某个人资金方寻找优质项目500万-9000万元"
                description="1小时前"
              ></el-step>
              <el-step
                title="陕西某个人资金方寻找优质项目500万-9000万元"
                description="1小时前"
              ></el-step>
              <el-step
                title="陕西某个人资金方寻找优质项目500万-9000万元"
                description="1小时前"
              ></el-step>
            </el-steps>
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
  name: 'ProjectId',
  data() {
    return {
      viewTime: random3Num(),
      activeName: 'first'
    }
  },
  computed: {
    ...mapState('project', ['projectInfo'])
  },
  async fetch({ store, params }) {
    await store.dispatch('project/getById', { id: params.id })
  }
}
</script>

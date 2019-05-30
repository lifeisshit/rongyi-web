<template>
  <div class="fund-detail-page">
    <div class="wrap">
      <div class="detail-title">
        <h1>{{ fundInfo.title }}</h1>
        <div class="infos">
          <span class="el-icon-time"
            ><span>{{ fundInfo.gmtCreate }}</span></span
          >
          <span class="el-icon-view"><span>421</span></span>
          <span class="el-icon-edit-outline"><span>评论区</span></span>
          <span class="el-icon-share"><span>分享</span></span>
        </div>
      </div>
      <div class="detail-content">
        <div class="detail-left-box">
          <div class="detail-labes">
            <ul class="clearfix">
              <li><label>资金主体：</label>企业资金</li>
              <li><label>所在地区：</label>陕西省西安市雁塔区</li>
              <li>
                <label>投资行业：</label
                >矿产冶金,金融投资,农林牧渔,能源,建筑建材
              </li>
              <li>
                <label>投资地区：</label>甘肃省 广西省 贵州省 河北省 河南省
              </li>
              <li><label>投资金额：</label>2000万元-1.5亿元</li>
              <li><label>最低回报要求：</label>20万元-100万元</li>
              <li><label>投资期限：</label>股权融资</li>
              <li><label>风控要求：</label>抵押,担保,信用,其它</li>
              <li><label>前期费用：</label>无任何前期费用</li>
              <li><label>需提供资料：</label>公司证件,相关财务资料,其它资料</li>
              <li><label>抵押物类型：</label>固定资产,其他资产</li>
              <li><label>抵押物折扣率：</label>5 - 7 折</li>
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
              <el-tab-pane label="投资要求概述" name="first">
                <div class="dec">
                  主要针对农业、能源、旅游酒店、生产加工、基础建设等农业深加工、种植养殖类及旅游餐饮等综合类企业，要求资质手续齐全、合乎法律法规及政策、具有偿债能力的企业或团体均可申请借贷。
                  以债权、股权质押合作为主，额度500万-9000万，年化利息15-20%，根据项目风控方式及合作期限可适当微调。
                </div>
              </el-tab-pane>
              <el-tab-pane label="其他备注" name="second">
                <div class="dec">
                  无
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

export default {
  name: 'FundsId',
  data() {
    return {
      activeName: 'first'
    }
  },
  computed: {
    ...mapState('fund', ['fundInfo'])
  },
  async fetch({ store, params }) {
    await store.dispatch('fund/getById', { id: params.id })
  }
}
</script>

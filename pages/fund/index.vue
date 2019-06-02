<template>
  <div class="fund-list-page">
    <div class="wrap">
      <div class="filter-state">
        <label v-if="solabel.has" class="all">筛选条件：</label>
        <label v-if="solabel.tzType" class="cur" @click="clearFilter('tzType')"
          >投资方式：<span class="ellipsis">{{ solabel.tzType }}</span
          ><i class="el-icon-close"></i
        ></label>
        <label v-if="solabel.zjType" class="cur" @click="clearFilter('zjType')"
          >资金类型：<span class="ellipsis">{{ solabel.zjType }}</span
          ><i class="el-icon-close"></i
        ></label>
        <label v-if="solabel.szCity" class="cur" @click="clearFilter('szCity')"
          >投资地区：<span class="ellipsis">{{ solabel.szCity }}</span
          ><i class="el-icon-close"></i
        ></label>
        <label
          v-if="solabel.tzHangye"
          class="cur"
          @click="clearFilter('tzHangye')"
          >投资行业：<span class="ellipsis">{{ solabel.tzHangye }}</span
          ><i class="el-icon-close"></i
        ></label>
        <label v-if="solabel.tzCity" class="cur" @click="clearFilter('tzCity')"
          >投资地区：<span class="ellipsis">{{ solabel.tzCity }}</span
          ><i class="el-icon-close"></i
        ></label>
        <label
          v-if="solabel.tzMoney"
          class="cur"
          @click="clearFilter('tzMoney')"
          >投资金额：<span class="ellipsis">{{ solabel.tzMoney }}</span
          ><i class="el-icon-close"></i
        ></label>
        <label v-if="solabel.key" class="cur" @click="clearFilter('keyword')"
          >关键词：<span class="ellipsis">{{ solabel.key }}</span
          ><i class="el-icon-close"></i
        ></label>
      </div>
      <div class="filter-box">
        <div class="filter-box-item">
          <span class="label">投资方式：</span>
          <div class="items">
            <el-radio-group v-model="tzType" class="form-check-data">
              <el-radio
                v-for="(value, index) in tzTypeList"
                :key="index"
                :label="value"
                @change="sumbitSearch()"
                >{{ value }}</el-radio
              >
            </el-radio-group>
          </div>
        </div>
        <!--<div class="filter-box-item">-->
        <!--<span class="label">资金类型：</span>-->
        <!--<div-->
        <!--v-if="zjTypeMore"-->
        <!--:class="['items', isMorezjType ? 'showall' : '']"-->
        <!--&gt;-->
        <!--<el-checkbox-group v-model="zjType" class="form-check-data">-->
        <!--<el-checkbox-->
        <!--v-for="(value, index) in arrZjList"-->
        <!--:key="index"-->
        <!--:label="value"-->
        <!--@change="sumbitSearch()"-->
        <!--&gt;{{ value }}</el-checkbox-->
        <!--&gt;-->
        <!--</el-checkbox-group>-->
        <!--</div>-->
        <!--<div v-else :class="['items', isMorezjType ? 'showall' : '']">-->
        <!--<el-radio-group v-model="zjType" class="form-check-data">-->
        <!--<el-radio-->
        <!--v-for="(value, index) in arrZjList"-->
        <!--:key="index"-->
        <!--:label="value"-->
        <!--@change="sumbitSearch()"-->
        <!--&gt;{{ value }}</el-radio-->
        <!--&gt;-->
        <!--</el-radio-group>-->
        <!--</div>-->
        <!--<div class="options">-->
        <!--<span @click="setZjTypeMore"-->
        <!--&gt;<i :class="[zjTypeMore ? 'el-icon-minus' : 'el-icon-plus']"></i-->
        <!--&gt;多选</span-->
        <!--&gt;-->
        <!--<span @click="showAllzjType"-->
        <!--&gt;更多<i-->
        <!--:class="[-->
        <!--isMorezjType ? 'el-icon-arrow-down' : 'el-icon-arrow-up'-->
        <!--]"-->
        <!--&gt;</i-->
        <!--&gt;</span>-->
        <!--</div>-->
        <!--</div>-->
        <div class="filter-box-item">
          <span class="label">投资地区：</span>
          <div :class="['items', isMoreszCity ? 'showall' : '']">
            <el-radio-group v-model="szCity" class="form-check-data">
              <el-radio
                v-for="(value, index) in cityList"
                :key="index"
                :label="value"
                @change="sumbitSearch()"
                >{{ value }}</el-radio
              >
            </el-radio-group>
          </div>
          <div class="options">
            <span @click="showAllszCity"
              >更多<i
                :class="[
                  isMoreszCity ? 'el-icon-arrow-down' : 'el-icon-arrow-up'
                ]"
              ></i
            ></span>
          </div>
        </div>
        <div class="filter-box-item">
          <span class="label">投资行业：</span>
          <div
            v-if="tzHangyeMore"
            :class="['items', isMoretzHangye ? 'showall' : '']"
          >
            <el-checkbox-group v-model="tzHangye" class="form-check-data">
              <el-checkbox
                v-for="(value, index) in tzHangyeList"
                :key="index"
                :label="value"
                @change="sumbitSearch()"
                >{{ value }}</el-checkbox
              >
            </el-checkbox-group>
          </div>
          <div v-else :class="['items', isMoretzHangye ? 'showall' : '']">
            <el-radio-group v-model="tzHangye" class="form-check-data">
              <el-radio
                v-for="(value, index) in tzHangyeList"
                :key="index"
                :label="value"
                @change="sumbitSearch()"
                >{{ value }}</el-radio
              >
            </el-radio-group>
          </div>
          <div class="options">
            <span @click="setTzHangyeMore"
              ><i :class="[tzHangyeMore ? 'el-icon-minus' : 'el-icon-plus']"></i
              >多选</span
            >
            <span @click="showAlltzHangye"
              >更多<i
                :class="[
                  isMoretzHangye ? 'el-icon-arrow-down' : 'el-icon-arrow-up'
                ]"
              ></i
            ></span>
          </div>
        </div>
        <!--<div class="filter-box-item">-->
        <!--<span class="label">投资地区：</span>-->
        <!--<div :class="['items', isMoretzCity ? 'showall' : '']">-->
        <!--<el-radio-group v-model="tzCity" class="form-check-data">-->
        <!--<el-radio-->
        <!--v-for="(value, index) in cityList"-->
        <!--:key="index"-->
        <!--:label="value"-->
        <!--@change="sumbitSearch()"-->
        <!--&gt;{{ value }}</el-radio-->
        <!--&gt;-->
        <!--</el-radio-group>-->
        <!--</div>-->
        <!--<div class="options">-->
        <!--<span @click="showAlltzCity"-->
        <!--&gt;更多<i-->
        <!--:class="[-->
        <!--isMoretzCity ? 'el-icon-arrow-down' : 'el-icon-arrow-up'-->
        <!--]"-->
        <!--&gt;</i-->
        <!--&gt;</span>-->
        <!--</div>-->
        <!--</div>-->
        <div class="filter-box-item">
          <span class="label">投资金额：</span>
          <div :class="['items', isMoreAmount ? 'showall' : '']">
            <el-radio-group v-model="tzMoney" class="form-check-data">
              <el-radio
                v-for="(value, index) in tzMoneyList"
                :key="index"
                :label="value"
                @change="sumbitSearch()"
                >{{ value }}</el-radio
              >
            </el-radio-group>
          </div>
          <div class="options">
            <span @click="showAllAmounts"
              >更多<i
                :class="[
                  isMoreAmount ? 'el-icon-arrow-down' : 'el-icon-arrow-up'
                ]"
              ></i
            ></span>
          </div>
        </div>
      </div>
      <div class="business-list clearfix">
        <div class="items-list">
          <div class="filter-condition clearfix">
            <div
              v-for="item in sortList"
              :key="item.key"
              class="order-type"
              :class="{ active: item.key === sort }"
              @click="onSortChange(item.key)"
            >
              {{ item.value }}
            </div>
            <div class="soform">
              <el-input
                v-model="keyword"
                placeholder="输入搜索关键词"
                class="soKey"
                @keyup.enter.native="onSearch"
              ></el-input>
              <span class="el-icon-search soBtn" @click="onSearch"></span>
            </div>
            <div class="so-count">
              查询结果共<span>{{ totalRow }}</span
              >个项目
            </div>
          </div>
          <div v-if="totalRow > 0" class="items-out-box">
            <div class="item-data-list">
              <div
                v-for="fund in fundList"
                :key="fund.id"
                class="items-infos clearfix"
              >
                <div class="items-infos-row">
                  <div class="i-title">
                    <nuxt-link :to="`/fund/${fund.id}`">{{
                      fund.title || ''
                    }}</nuxt-link>
                  </div>
                  <div class="i-time">{{ fund.gmtCreate || '' }}发布</div>
                  <ul class="attribute">
                    <li>投资地区：{{ fund.inventRegion || '' }}</li>
                    <li>投资行业：{{ fund.investIndustry || '' }}</li>
                    <li>投资资金：{{ fund.investAmount || '' }}</li>
                    <li>风控要求：{{ fund.riskRequire || '' }}</li>
                    <li>最低回报要求：{{ fund.minReturnRequire || '' }}</li>
                    <li>投资方式：{{ fund.investWay || '' }}</li>
                    <li>资金类型：{{ fund.type || '' }}</li>
                  </ul>
                </div>
                <div class="item-price">
                  <p>{{ fund.investAmount || 0 }}</p>
                  <nuxt-link to="/">约谈项目</nuxt-link>
                </div>
              </div>
            </div>
            <div class="item-pager">
              <el-pagination
                background
                layout="prev, pager, next"
                prev-text="上一页"
                next-text="下一页"
                :total="totalRow"
                :page-size="pageSize"
                :current-page="currentPage"
                @current-change="handleCurrentChange"
              >
              </el-pagination>
            </div>
          </div>
          <p v-if="totalRow <= 0" class="no-data">暂无数据</p>
        </div>
        <div class="hot-items">
          <div class="tips">优质信息推荐</div>
          <div v-if="topFundList.length > 0" class="hot-items-row">
            <nuxt-link
              v-for="fund in topFundList"
              :key="fund.id"
              :to="`/fund/${fund.id}`"
              class="rows"
            >
              <div class="item-img">
                <img
                  alt="资金方"
                  :src="fund.img || require('~/assets/img/no-img.png')"
                />
              </div>
              <div class="item-title">
                {{ fund.title }}
              </div>
            </nuxt-link>
          </div>
          <div v-if="topFundList.length <= 0" class="hot-items-row">
            <p class="no-data">暂无数据</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import '~/assets/css/fund-list.less'
import { mapState, mapActions } from 'vuex'
import { InvestMethods, Amounts, Industries, Regions } from '~/common/constant'

export default {
  name: 'Fund',
  data() {
    return {
      currentPage: 1,
      tzTypeList: InvestMethods,
      cityList: Regions,
      tzMoneyList: Amounts,
      tzHangyeList: Industries,
      keyword: '',
      tzType: '',
      zjType: [],
      szCity: '',
      tzHangye: [],
      tzCity: '',
      tzMoney: '',
      zjTypeMore: false,
      isMorezjType: false,
      isMoreszCity: false,
      tzHangyeMore: false,
      isMoretzHangye: false,
      isMoretzCity: false,
      isMoreAmount: false,
      solabel: {
        has: false,
        key: '',
        tzType: '',
        zjType: '',
        szCity: '',
        tzHangye: '',
        tzCity: '',
        tzMoney: ''
      },
      sort: 0,
      sortList: [
        {
          key: 0,
          value: '综合排序'
        },
        {
          key: 1,
          value: '更新时间'
        }
      ]
    }
  },
  computed: {
    ...mapState('fund', ['pageSize', 'totalRow', 'topFundList', 'fundList'])
  },
  async fetch({ store }) {
    await Promise.all([
      store.dispatch('fund/getPageList', { pageSize: 1 }),
      store.dispatch('fund/getPageList', { recommend: 1, pageSize: 6 })
    ]).catch(() => {})
  },
  methods: {
    ...mapActions('fund', ['getPageList']),
    handleCurrentChange(page) {
      this.sumbitSearch(page)
    },
    onSearch() {
      this.solabel.key = this.keyword
      this.sumbitSearch()
    },
    onSortChange: function(sort) {
      this.sort = sort
      this.sumbitSearch()
    },
    showAllzjType: function() {
      this.isMorezjType = !this.isMorezjType
    },
    showAllszCity: function() {
      this.isMoreszCity = !this.isMoreszCity
    },
    showAlltzHangye: function() {
      this.isMoretzHangye = !this.isMoretzHangye
    },
    showAlltzCity: function() {
      this.isMoretzCity = !this.isMoretzCity
    },
    showAllAmounts() {
      this.isMoreAmount = !this.isMoreAmount
    },
    setZjTypeMore: function() {
      this.zjTypeMore = !this.zjTypeMore
      this.zjType = []
      this.sumbitSearch()
    },
    setTzHangyeMore: function() {
      this.tzHangyeMore = !this.tzHangyeMore
      this.tzHangye = []
      this.sumbitSearch()
    },
    // 开始搜索
    sumbitSearch: function(page) {
      // 检测是否有筛选条件
      this.checkHasSolabel()
      // 构造当前筛选label
      this.buildSolabelText()

      const condition = {
        keyword: this.keyword,
        investWay: this.tzType,
        region: this.szCity,
        industry: this.solabel.tzHangye,
        investAmount: this.tzMoney,
        sort: this.sort,
        pageNum: page || 1
      }
      // 加载内容
      // console.log(JSON.stringify(condition))
      // 开始查询
      this.getPageList(condition)
      this.currentPage = page || 1
    },
    checkHasSolabel: function() {
      const solabel = this.solabel
      const has =
        solabel.key ||
        solabel.tzType ||
        solabel.zjType ||
        solabel.szCity ||
        solabel.tzHangye ||
        solabel.tzCity ||
        solabel.tzMoney
      this.solabel.has = has
    },
    buildSolabelText: function() {
      let hasLabel = false
      if (this.solabel.key) {
        hasLabel = true
      }
      if (this.tzType) {
        this.solabel.tzType = this.tzType
        hasLabel = true
      }
      if (this.szCity) {
        this.solabel.szCity = this.szCity
        hasLabel = true
      }
      if (this.tzCity) {
        this.solabel.tzCity = this.tzCity
        hasLabel = true
      }
      if (this.tzMoney) {
        this.solabel.tzMoney = this.tzMoney
        hasLabel = true
      }
      if (this.tzHangye) {
        let tzHangyeText = ''

        // 如果是字符串，则直接是选中的值，如果是数组，则需要遍历
        if (typeof this.tzHangye === 'string') {
          tzHangyeText = this.tzHangye
        } else {
          tzHangyeText = this.tzHangye.join(',')
        }
        if (tzHangyeText) {
          hasLabel = true
        }

        this.solabel.tzHangye = tzHangyeText
      }
      if (this.zjType) {
        let zjTypeText = ''
        // 如果是字符串，则直接是选中的值，如果是数组，则需要遍历
        if (typeof this.zjType === 'string') {
          zjTypeText = this.zjType
        } else {
          zjTypeText = this.zjType.join(',')
        }
        if (zjTypeText) {
          hasLabel = true
        }
        this.solabel.zjType = zjTypeText
      }
      this.solabel.has = hasLabel
    },
    clearFilter: function(clearfilter) {
      switch (clearfilter) {
        case 'tzType':
          this.tzType = ''
          this.solabel.tzType = ''
          break
        case 'zjType':
          this.zjType = []
          this.solabel.zjType = ''
          break
        case 'szCity':
          this.szCity = ''
          this.solabel.szCity = ''
          break
        case 'tzHangye':
          this.tzHangye = []
          this.solabel.tzHangye = ''
          break
        case 'tzCity':
          this.tzCity = ''
          this.solabel.tzCity = ''
          break
        case 'tzMoney':
          this.tzMoney = ''
          this.solabel.tzMoney = ''
          break
        case 'keyword':
          this.keyword = ''
          this.solabel.key = ''
          break
        default:
          break
      }
      this.sumbitSearch()
    }
  }
}
</script>

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
            <el-radio-group v-model="tzCity" class="form-check-data">
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
                  <div class="deliver-btn" @click="deliverProject(fund.id)">
                    投递项目
                  </div>
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
    <bottom-bar></bottom-bar>
    <el-dialog title="投递项目" :visible.sync="dialogVisible" width="530px">
      <el-form
        ref="deliverForm"
        class="content-register"
        :model="deliverForm"
        :rules="rules"
        label-width="80px"
      >
        <el-form-item class="content-row" prop="contact" label="姓名">
          <el-input
            v-model="deliverForm.contact"
            placeholder="请输入联系人姓名"
          >
          </el-input>
        </el-form-item>
        <el-form-item class="content-row" prop="phone" label="手机号">
          <el-input
            v-model="deliverForm.phone"
            placeholder="请输入手机号"
            type="tel"
          >
          </el-input>
        </el-form-item>
        <el-form-item
          label="验证码"
          class="content-row"
          prop="verificationCode"
        >
          <el-input
            v-model="deliverForm.verificationCode"
            placeholder="请输入验证码"
            class="reg-ver-code-input"
          ></el-input>
          <el-button
            class="reg-ver-code-get"
            :disabled="deliverCodeInfo.isSendDiabled"
            @click="onSendSmsCodeClick"
          >
            {{
              deliverCodeInfo.isSendDiabled
                ? smsCodeBtnText + '(' + deliverCodeInfo.countdown + ')'
                : smsCodeBtnText
            }}
          </el-button>
        </el-form-item>
        <el-form-item class="content-row" prop="title" label="项目标题">
          <el-input v-model="deliverForm.title" placeholder="请输入项目标题">
          </el-input>
        </el-form-item>
        <el-form-item class="content-row" prop="description" label="项目描述">
          <el-input
            v-model="deliverForm.description"
            placeholder="请输入项目描述"
            type="textarea"
            :rows="4"
          >
          </el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button class="btn-cancel" @click="dialogVisible = false"
          >取 消</el-button
        >
        <el-button class="btn-submit" @click="onFormSubmit('deliverForm')"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>
<script>
import '~/assets/css/fund-list.less'
import { mapState, mapActions } from 'vuex'
import {
  InvestMethods,
  Amounts,
  Industries,
  Regions,
  SmsCodeType
} from '~/common/constant'
import BottomBar from '~/components/BottomBar.vue'
import { verifyMobilePhone } from '~/common/validate'
import isArray from 'lodash/isArray'

export default {
  name: 'Fund',
  components: { BottomBar },
  data() {
    // 读取url中携带的查询条件
    const query = this.$route.query
    const keyword = query.keyword || ''
    const investWay = query.investWay || ''
    const region = query.region || ''
    let tzHangye = query.industry || ''
    let tzHangyeMore = false
    if (query.industry && query.industry.indexOf(',') >= 0) {
      // 证明行业是多选
      tzHangye = query.industry.split(',')
      tzHangyeMore = true
    }
    const investAmount = query.investAmount || ''
    const sort = query.sort || 0
    const has = keyword || investWay || region || tzHangye || investAmount

    return {
      dialogVisible: false,
      currentPage: 1,
      tzTypeList: InvestMethods,
      cityList: Regions,
      tzMoneyList: Amounts,
      tzHangyeList: Industries,
      keyword: keyword,
      tzType: investWay,
      zjType: [],
      tzHangye: tzHangye,
      tzCity: region,
      tzMoney: investAmount,
      zjTypeMore: false,
      isMorezjType: false,
      isMoreszCity: false,
      tzHangyeMore: tzHangyeMore,
      isMoretzHangye: false,
      isMoretzCity: false,
      isMoreAmount: false,
      solabel: {
        has: has,
        key: keyword,
        tzType: investWay,
        zjType: '',
        tzHangye: query.industry,
        tzCity: region,
        tzMoney: investAmount
      },
      sort: sort * 1,
      sortList: [
        {
          key: 0,
          value: '综合排序'
        },
        {
          key: 1,
          value: '更新时间'
        }
      ],
      smsCodeBtnText: '获取验证码',
      deliverForm: {
        contact: '',
        phone: '',
        title: '',
        verificationCode: '',
        description: '',
        userId: '',
        fundId: '',
        filePath: ''
      },
      rules: {
        contact: {
          required: true,
          trigger: 'blur',
          message: '请输入联系人姓名'
        },
        phone: verifyMobilePhone(),
        verificationCode: {
          required: true,
          min: 4,
          trigger: 'blur',
          message: '请输入有效的验证码'
        },
        title: {
          required: true,
          trigger: 'blur',
          message: '请输入项目标题'
        },
        description: {
          required: true,
          trigger: 'blur',
          message: '请输入项目描述'
        }
      }
    }
  },
  computed: {
    ...mapState('user', ['nuxtToken']),
    ...mapState('sessionStorage', ['deliverCodeInfo']),
    ...mapState('fund', ['pageSize', 'totalRow', 'topFundList', 'fundList'])
  },
  async fetch({ store, query }) {
    // console.log('query: ', query)
    // query.pageNum = 1
    await Promise.all([
      store.dispatch('fund/getPageList', query),
      store.dispatch('fund/getPageList', { recommend: 1, pageSize: 6 })
    ]).catch(() => {})
  },
  created() {
    const isSendDiabled = this.deliverCodeInfo.isSendDiabled
    // 如果验证码不可用，则继续倒计时
    if (isSendDiabled) {
      this.startCountDown({
        isInit: true,
        smsCodeType: SmsCodeType.DeliverProject
      })
    }
  },
  methods: {
    ...mapActions('fund', ['getPageList', 'appoint']),
    ...mapActions('user', ['sendSmsCode', 'verifySmsCode']),
    ...mapActions('sessionStorage', ['startCountDown']),
    handleCurrentChange(page) {
      this.sumbitSearch(page)
    },
    onSearch() {
      this.solabel.key = this.keyword
      this.sumbitSearch()
    },
    onSortChange(sort) {
      this.sort = sort
      this.sumbitSearch()
    },
    showAllzjType() {
      this.isMorezjType = !this.isMorezjType
    },
    showAllszCity() {
      this.isMoreszCity = !this.isMoreszCity
    },
    showAlltzHangye() {
      this.isMoretzHangye = !this.isMoretzHangye
    },
    showAlltzCity() {
      this.isMoretzCity = !this.isMoretzCity
    },
    showAllAmounts() {
      this.isMoreAmount = !this.isMoreAmount
    },
    setZjTypeMore() {
      this.zjTypeMore = !this.zjTypeMore
      this.zjType = []
      this.sumbitSearch()
    },
    setTzHangyeMore() {
      this.tzHangyeMore = !this.tzHangyeMore
      if (this.tzHangyeMore) {
        this.tzHangye = this.tzHangye.split(',')
      } else {
        this.tzHangye = ''
        this.sumbitSearch()
      }
      // this.tzHangye = []
      // this.sumbitSearch()
    },
    // 开始搜索
    sumbitSearch(page) {
      // 构造当前筛选label
      this.buildSolabelText()

      const condition = {
        keyword: this.keyword,
        investWay: this.tzType,
        region: this.tzCity,
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
      // 修改路由
      this.$router.push({
        path: '/fund',
        query: condition
      })
    },
    checkHasSolabel() {
      const solabel = this.solabel
      const has =
        solabel.key ||
        solabel.tzType ||
        solabel.zjType ||
        solabel.tzHangye ||
        solabel.tzCity ||
        solabel.tzMoney
      this.solabel.has = has
    },
    buildSolabelText() {
      this.solabel.key = this.keyword || ''
      this.solabel.tzType = this.tzType || ''
      this.solabel.tzCity = this.tzCity || ''
      this.solabel.tzMoney = this.tzMoney || ''
      this.solabel.tzHangye = isArray(this.tzHangye)
        ? this.tzHangye.join(',')
        : this.tzHangye
      this.solabel.zjType = isArray(this.zjType)
        ? this.zjType.join(',')
        : this.zjType
      // 检测是否有筛选条件
      this.checkHasSolabel()
    },
    clearFilter(clearfilter) {
      switch (clearfilter) {
        case 'tzType':
          this.tzType = ''
          this.solabel.tzType = ''
          break
        case 'zjType':
          this.zjType = []
          this.solabel.zjType = ''
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
    },
    // 投递项目
    deliverProject(fundId) {
      if (!this.nuxtToken) {
        // 未登录，跳转到登录
        this.$router.push({
          path: '/login'
        })
        return
      }
      this.deliverForm.fundId = fundId
      this.dialogVisible = true
    },
    // 发送验证码
    onSendSmsCodeClick() {
      this.$refs.deliverForm.validateField('phone', async error => {
        if (!error) {
          await this.sendSmsCode({
            phone: this.deliverForm.phone,
            type: SmsCodeType.DeliverProject
          })
          this.startCountDown({
            isInit: false,
            smsCodeType: SmsCodeType.DeliverProject
          })
          this.$message.success({
            showClose: true,
            message: '验证码已发送成功，请注意查收',
            type: 'success'
          })
        }
      })
    },
    // 点击投递项目确定按钮
    onFormSubmit(formName) {
      this.$refs[formName].validate(async valid => {
        if (!valid) {
          return
        }
        if (formName === 'deliverForm') {
          // 注册
          await this.verifySmsCode({
            phone: this.deliverForm.phone,
            type: SmsCodeType.DeliverProject,
            smsCode: this.deliverForm.verificationCode
          })
          await this.appoint(this.deliverForm)
          this.$message.success({
            showClose: true,
            message: '项目投递成功，请保持手机畅通等待联系',
            type: 'success'
          })
        }
        this.dialogVisible = false
      })
    }
  }
}
</script>

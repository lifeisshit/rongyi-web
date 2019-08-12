<template>
  <section class="index">
    <div class="banner">
      <img
        v-lazy="require('~/assets/img/money-arrow.png')"
        alt="武汉低风险靠谱的投资平台"
        title="武汉低风险靠谱的投资平台"
      />
      <div class="wrap banner-wrap">
        <div v-if="!nuxtToken" class="login-tab">
          <ul class="login-tab-menu">
            <li :class="{ active: isLoginTabActive }" @click="showLoginTab">
              手机号登录
            </li>
            <li :class="{ active: !isLoginTabActive }" @click="showRegTab">
              免费注册
            </li>
          </ul>
          <div class="login-tab-content">
            <!--登录-->
            <el-form
              v-show="isLoginTabActive"
              ref="loginForm"
              class="content-login"
              :model="loginForm"
              :rules="rules"
            >
              <el-form-item class="content-row" prop="phone">
                <el-input
                  v-model="loginForm.phone"
                  placeholder="请输入手机号"
                  type="text"
                >
                </el-input>
              </el-form-item>
              <el-form-item class="content-row" prop="password">
                <el-input
                  v-model="loginForm.password"
                  placeholder="请输入密码"
                  type="password"
                >
                </el-input>
              </el-form-item>
              <!--<div class="content-row">-->
              <!--<el-input-->
              <!--v-model="loginForm.verificationCode"-->
              <!--placeholder="请输入内容"-->
              <!--class="ver-code-input"-->
              <!--&gt;</el-input>-->
              <!--<span class="ver-code-text">1235</span-->
              <!--&gt;<span class="ver-code-refresh">刷新</span>-->
              <!--</div>-->
              <el-form-item class="submit-row">
                <el-button class="login-btn" @click="onFormSubmit('loginForm')"
                  >登录</el-button
                >
              </el-form-item>
              <el-form-item class="other-row">
                <el-checkbox v-model="loginForm.isAutoLogin">
                  下次自动登录
                </el-checkbox>
                <nuxt-link to="/forget" class="forget-pwd">忘记密码</nuxt-link>
              </el-form-item>
            </el-form>
            <!--注册-->
            <el-form
              v-show="!isLoginTabActive"
              ref="regForm"
              class="content-register"
              :model="regForm"
              :rules="rules"
            >
              <el-form-item class="content-row" prop="phone">
                <el-input
                  v-model="regForm.phone"
                  placeholder="请输入手机号"
                  type="tel"
                >
                </el-input>
              </el-form-item>
              <el-form-item class="content-row" prop="password">
                <el-input
                  v-model="regForm.password"
                  placeholder="请输入密码"
                  type="password"
                >
                </el-input>
              </el-form-item>
              <el-form-item class="content-row" prop="verificationCode">
                <el-input
                  v-model="regForm.verificationCode"
                  placeholder="请输入验证码"
                  class="reg-ver-code-input"
                ></el-input>
                <el-button
                  class="reg-ver-code-get"
                  :disabled="regCodeInfo.isSendDiabled"
                  @click="onSendSmsCodeClick"
                >
                  {{
                    regCodeInfo.isSendDiabled
                      ? smsCodeBtnText + '(' + regCodeInfo.countdown + ')'
                      : smsCodeBtnText
                  }}
                </el-button>
              </el-form-item>
              <el-form-item class="other-row" prop="isAgree">
                <el-checkbox v-model="regForm.isAgree">
                  我已阅读并同意
                  <nuxt-link to="/agreements" class="reg-agree"
                    >《服务协议》
                  </nuxt-link>
                </el-checkbox>
              </el-form-item>
              <el-form-item class="reg-submit-row">
                <el-button class="login-btn" @click="onFormSubmit('regForm')"
                  >注册</el-button
                >
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
      <div class="rules">
        <div class="wrap rules-wrap">
          <div class="rule">
            <div class="rule-icon rule-run"></div>
            <div class="rule-content">
              <p class="rc1">合规运营</p>
              <p class="rc2">合理透明稳健规范</p>
            </div>
          </div>
          <div class="rule">
            <div class="rule-icon rule-info"></div>
            <div class="rule-content">
              <p class="rc1">信息安全</p>
              <p class="rc2">等保三级权威认证</p>
            </div>
          </div>
          <div class="rule">
            <div class="rule-icon rule-money"></div>
            <div class="rule-content">
              <p class="rc1">资金安全</p>
              <p class="rc2">银行直连资金存管</p>
            </div>
          </div>
          <div class="rule">
            <div class="rule-icon rule-risk"></div>
            <div class="rule-content">
              <p class="rc1">风险控制</p>
              <p class="rc2">多重风控品质服务</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--找资金-->
    <div class="index-sec wrap">
      <div class="index-sec-hd">
        <h3 class="index-sec-hd-left">找资金</h3>
        <div class="index-sec-hd-right">
          <nuxt-link to="/fund" class="link-more">查看更多</nuxt-link>
        </div>
      </div>
      <div class="index-sec-bd">
        <nuxt-link
          :to="{ path: '/fund', query: { investway: '股权投资' } }"
          title="项目缺乏资金-股权投资"
          class="money-item"
        >
          <img v-lazy="require('~/assets/img/money-img2.jpg')" alt="找资金" />
          <div class="money-info">
            <span class="money-title1">股权投资</span>
            <span class="money-title2">引入实力投资，助推企业发展</span>
            <span class="money-arrow"></span>
          </div>
        </nuxt-link>
        <nuxt-link
          :to="{ path: '/fund', query: { investway: '债权投资' } }"
          title="项目缺乏资金-债权投资"
          class="money-item money-item-center"
        >
          <img v-lazy="require('~/assets/img/money-img3.png')" alt="找资金" />
          <div class="money-info">
            <span class="money-title1">债权投资</span>
            <span class="money-title2">借款方式多样，融资就这么简单</span>
            <span class="money-arrow"></span>
          </div>
        </nuxt-link>
        <nuxt-link
          :to="{ path: '/fund', query: { investway: '其他投资' } }"
          title="项目缺乏资金-其他投资"
          class="money-item"
        >
          <img v-lazy="require('~/assets/img/money-img1.png')" alt="找资金" />
          <div class="money-info">
            <span class="money-title1">其他投资</span>
            <span class="money-title2">项目的福利从这里开始</span>
            <span class="money-arrow"></span>
          </div>
        </nuxt-link>
      </div>
    </div>
    <!--成功案例-->
    <div class="index-sec wrap">
      <div class="index-sec-hd">
        <h3 class="index-sec-hd-left">成功案例</h3>
        <div class="index-sec-hd-right">
          <span class="idx-btn-prev" @click="successCasePrevClick"
            ><i class="el-icon-arrow-left"></i
          ></span>
          <span class="idx-btn-next" @click="successCaseNextClick"
            ><i class="el-icon-arrow-right"></i
          ></span>
        </div>
      </div>
      <div class="index-sec-bd">
        <div v-swiper:successCaseSwiper="successCaseSwiperOption">
          <div class="swiper-wrapper">
            <div
              v-for="slide in successCaseList"
              :key="slide.id"
              class="swiper-slide sc-swiper-slide"
            >
              <nuxt-link :to="`/successcase/${slide.id}`" class="link-img">
                <img
                  :data-src="slide.img || require('~/assets/img/no-img.png')"
                  alt="成功案例"
                  class="swiper-lazy"
                />
              </nuxt-link>
              <div class="slide-info">
                <p>{{ slide.title }}</p>
                <nuxt-link :to="`/successcase/${slide.id}`">查看详情</nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--投资人-->
    <div class="index-sec wrap">
      <div class="index-sec-hd">
        <h3 class="index-sec-hd-left">投资人</h3>
        <!--<div class="index-sec-hd-right">-->
        <!--<nuxt-link to="/" class="link-more">查看更多</nuxt-link>-->
        <!--</div>-->
      </div>
      <div class="index-sec-bd">
        <div
          v-for="investor in investors"
          :key="investor.id"
          class="investor-item"
        >
          <img v-lazy="investor.avatar" alt="投资人" class="investor-img" />
          <div class="investor-info">
            <p class="investor-name">{{ investor.name }}</p>
            <p class="investor-company">
              <span>{{ investor.company }}</span>
              <span>/</span>
              <span>{{ investor.post }}</span>
            </p>
            <p class="investor-introduce">{{ investor.description }}</p>
            <!--<nuxt-link to="/" class="meet-btn">马上约见</nuxt-link>-->
          </div>
        </div>
      </div>
    </div>
    <!--投资机构-->
    <div class="index-sec wrap">
      <div class="index-sec-hd">
        <h3 class="index-sec-hd-left">投资机构</h3>
        <!--<div class="index-sec-hd-right">-->
        <!--<nuxt-link to="/" class="link-more">查看更多</nuxt-link>-->
        <!--</div>-->
      </div>
      <div class="index-sec-bd">
        <div
          v-for="org in investOrgs"
          :key="org.id"
          to="/"
          class="invest-agency-item"
        >
          <div class="top-info">
            <div class="left-info">
              <p class="full-name">{{ org.name }}</p>
              <div class="short-line"></div>
              <p class="short-name">{{ org.shortName }}</p>
              <p class="site">{{ org.headquarters }}</p>
            </div>
            <div class="right-info">
              <img v-lazy="org.logo" alt="投资机构" class="org-img" />
            </div>
          </div>
          <div class="bottom-info">
            <p class="intro-tip">介绍</p>
            <p class="introduce">{{ org.description }}</p>
            <!--<nuxt-link to="/" class="meet-btn">马上约见</nuxt-link>-->
          </div>
        </div>
      </div>
    </div>
    <!--找项目-->
    <div class="index-sec wrap">
      <div class="index-sec-hd">
        <h3 class="index-sec-hd-left">找项目</h3>
        <div class="index-sec-hd-right">
          <nuxt-link to="/project" class="link-more">查看更多</nuxt-link>
        </div>
      </div>
      <div class="index-sec-bd">
        <div class="fm-item find-money1">
          <img v-lazy="require('~/assets/img/find-money1.png')" alt="找项目" />
          <div class="fm-info">
            <div class="fm-left">
              <p class="fm-title">IT互联网</p>
              <p class="fm-line"></p>
            </div>
            <div class="fm-right">
              <nuxt-link
                :to="{ path: '/project', query: { financeway: 'IT互联网' } }"
                class="link-more"
                >查看更多</nuxt-link
              >
            </div>
          </div>
        </div>
        <div class="find-money2">
          <div class="fm-item find-money2-1">
            <img
              v-lazy="require('~/assets/img/find-money2.jpg')"
              alt="找项目"
            />
            <div class="fm-info">
              <div class="fm-left">
                <p class="fm-title">农林牧渔</p>
                <p class="fm-line"></p>
              </div>
              <div class="fm-right">
                <nuxt-link
                  :to="{ path: '/project', query: { financeway: '农林牧渔' } }"
                  class="link-more"
                  >查看更多</nuxt-link
                >
              </div>
            </div>
          </div>
          <div class="fm-item find-money2-2">
            <img
              v-lazy="require('~/assets/img/find-money3.png')"
              alt="找项目"
            />
            <div class="fm-info">
              <div class="fm-left">
                <p class="fm-title">房地产</p>
                <p class="fm-line"></p>
              </div>
              <div class="fm-right">
                <nuxt-link
                  :to="{ path: '/project', query: { financeway: '房地产' } }"
                  class="link-more"
                  >查看更多</nuxt-link
                >
              </div>
            </div>
          </div>
        </div>
        <div class="find-money3">
          <div class="fm-item find-money3-1">
            <img
              v-lazy="require('~/assets/img/find-money4.jpg')"
              alt="找项目"
            />
            <div class="fm-info">
              <div class="fm-left">
                <p class="fm-title">餐饮休闲娱乐</p>
                <p class="fm-line"></p>
              </div>
              <div class="fm-right">
                <nuxt-link
                  :to="{
                    path: '/project',
                    query: { financeway: '餐饮休闲娱乐' }
                  }"
                  class="link-more"
                  >查看更多</nuxt-link
                >
              </div>
            </div>
          </div>
          <div class="find-money3-2">
            <div class="fm-item find-money3-2-1">
              <img
                v-lazy="require('~/assets/img/find-money5.png')"
                alt="找项目"
              />
              <div class="fm-info">
                <div class="fm-left">
                  <p class="fm-title">节能环保</p>
                  <p class="fm-line"></p>
                </div>
                <div class="fm-right">
                  <nuxt-link
                    :to="{
                      path: '/project',
                      query: { financeway: '节能环保' }
                    }"
                    class="link-more"
                    >查看更多</nuxt-link
                  >
                </div>
              </div>
            </div>
            <div class="fm-item find-money3-2-2">
              <img
                v-lazy="require('~/assets/img/find-money6.png')"
                alt="找项目"
              />
              <div class="fm-info">
                <div class="fm-left">
                  <p class="fm-title">其他行业</p>
                  <p class="fm-line"></p>
                </div>
                <div class="fm-right">
                  <nuxt-link
                    :to="{
                      path: '/project',
                      query: { financeway: '其他行业' }
                    }"
                    class="link-more"
                    >查看更多</nuxt-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--优质项目-->
    <div class="index-sec wrap">
      <div class="index-sec-hd">
        <h3 class="index-sec-hd-left">优质项目</h3>
        <div class="index-sec-hd-right">
          <span class="idx-btn-prev" @click="betterCasePrevClick"
            ><i class="el-icon-arrow-left"></i
          ></span>
          <span class="idx-btn-next" @click="betterCaseNextClick"
            ><i class="el-icon-arrow-right"></i
          ></span>
        </div>
      </div>
      <div class="index-sec-bd bc-sec-bd">
        <div v-swiper:betterCaseSwiper="betterCaseSwiperOption">
          <div class="swiper-wrapper">
            <div
              v-for="slide in topProjectList"
              :key="slide.id"
              class="swiper-slide bc-swiper-slide"
            >
              <nuxt-link :to="`/project/${slide.id}`" class="link-img">
                <img
                  :data-src="slide.img || require('~/assets/img/no-img.png')"
                  alt="优质项目"
                  class="swiper-lazy"
                />
              </nuxt-link>
              <div class="slide-info">
                <p class="title">{{ slide.title }}</p>
                <p class="introduce">{{ slide.projectDesc }}</p>
                <nuxt-link :to="`/project/${slide.id}`">查看详情</nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--资讯-->
    <div class="index-sec wrap">
      <div class="index-sec-hd">
        <h3 class="index-sec-hd-left">资讯</h3>
        <div class="index-sec-hd-right">
          <nuxt-link to="/news" class="link-more">查看更多</nuxt-link>
        </div>
      </div>
      <div class="index-sec-bd news-sec-bd">
        <div class="news-left">
          <div
            v-for="news in newsList"
            :key="news.id"
            class="case-item clearfix"
          >
            <div class="case-infos">
              <div class="case-title ellipsis">
                <nuxt-link :to="`/news/${news.id}`">{{ news.title }}</nuxt-link>
              </div>
              <!--<div class="case-desc" v-html="news.content"></div>-->
              <div class="case-pram">
                <span>{{ news.gmtCreate }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="news-right">
          <div v-swiper:newsSwiper="newsSwiperOption">
            <div class="swiper-wrapper">
              <div
                v-for="slide in slideNewsList"
                :key="slide.id"
                class="swiper-slide news-swiper-slide"
              >
                <nuxt-link :to="`/news/${slide.id}`" class="link-img">
                  <img
                    :src="slide.img || require('~/assets/img/no-img.png')"
                    :alt="slide.title"
                  />
                </nuxt-link>
                <p class="slide-title">{{ slide.title }}</p>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </div>
    <bottom-bar></bottom-bar>
  </section>
</template>

<script>
import '~/assets/css/index.less'
import { mapActions, mapState } from 'vuex'
import { SmsCodeType } from '~/common/constant'
import BottomBar from '~/components/BottomBar.vue'
import {
  verifyPassword,
  verifyMobilePhone,
  verifyChecked
} from '~/common/validate'

export default {
  components: { BottomBar },
  data() {
    return {
      isLoginTabActive: true,
      smsCodeBtnText: '获取验证码',
      loginForm: {
        phone: '',
        password: '',
        isAutoLogin: false
      },
      regForm: {
        phone: '',
        password: '',
        verificationCode: '',
        isAgree: false
      },
      rules: {
        password: verifyPassword(),
        phone: verifyMobilePhone(),
        verificationCode: {
          required: true,
          min: 4,
          trigger: 'blur',
          message: '请输入有效的验证码'
        },
        isAgree: verifyChecked('请同意服务协议')
      },
      successCaseSwiperOption: {
        slidesPerView: 4,
        spaceBetween: 0,
        slidesPerGroup: 4,
        loop: false,
        loopFillGroupWithBlank: true,
        lazy: true
      },
      betterCaseSwiperOption: {
        slidesPerView: 4,
        spaceBetween: 10,
        slidesPerGroup: 4,
        lazy: true
      },
      newsSwiperOption: {
        autoplay: {
          disableOnInteraction: false
        },
        loop: true,
        lazy: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  computed: {
    ...mapState(['investors', 'investOrgs']),
    ...mapState('sessionStorage', ['regCodeInfo']),
    ...mapState('user', ['nuxtToken']),
    ...mapState('project', ['topProjectList']),
    ...mapState('successcase', ['successCaseList']),
    ...mapState('news', ['newsList', 'slideNewsList'])
  },
  async fetch({ store }) {
    await Promise.all([
      store.dispatch('getInvestorPageList', { pageNum: 1, pageSize: 3 }),
      store.dispatch('getInvestOrgPageList', { pageNum: 1, pageSize: 3 }),
      store.dispatch('project/getPageList', { pageNum: 1 }),
      store.dispatch('project/getPageList', { recommend: 1, pageSize: 8 }),
      store.dispatch('successcase/getPageList', { pageNum: 1 }),
      store.dispatch('news/getPageList', { pageNum: 1, type: 0, pageSize: 5 }),
      store.dispatch('news/getPageList', { pageNum: 1, type: 1 })
    ]).catch(() => {})
  },
  created() {
    const isSendDiabled = this.regCodeInfo.isSendDiabled
    // 如果验证码不可用，则继续倒计时
    if (isSendDiabled) {
      this.startCountDown({
        isInit: true,
        smsCodeType: SmsCodeType.Register
      })
    }
  },
  methods: {
    ...mapActions('user', [
      'sendSmsCode',
      'verifySmsCode',
      'register',
      'login',
      'logout'
    ]),
    ...mapActions('sessionStorage', ['startCountDown']),
    showLoginTab() {
      this.$refs.loginForm.clearValidate()
      this.$refs.regForm.clearValidate()
      this.isLoginTabActive = true
    },
    showRegTab() {
      this.$refs.regForm.clearValidate()
      this.$refs.loginForm.clearValidate()
      this.isLoginTabActive = false
    },
    // 发送验证码
    onSendSmsCodeClick() {
      this.$refs.regForm.validateField('phone', async error => {
        if (!error) {
          await this.sendSmsCode({
            phone: this.regForm.phone,
            type: SmsCodeType.Register
          })
          this.startCountDown({
            isInit: false,
            smsCodeType: SmsCodeType.Register
          })
          this.$message.success({
            showClose: true,
            message: '验证码已发送成功，请注意查收',
            type: 'success'
          })
        }
      })
    },
    // 点击注册按钮
    onFormSubmit(formName) {
      this.$refs[formName].validate(async valid => {
        if (!valid) {
          return
        }
        let msg = ''
        if (formName === 'regForm') {
          // 注册
          await this.verifySmsCode({
            phone: this.regForm.phone,
            type: SmsCodeType.Register,
            smsCode: this.regForm.verificationCode
          })
          await this.register({
            login: this.regForm.phone,
            password: this.regForm.password
          })
          msg = '注册成功'
          // 注册成功跳转到登录
          this.$router.push({
            path: '/login'
          })
        } else {
          // 登录
          await this.login({
            login: this.loginForm.phone,
            password: this.loginForm.password
          })
          msg = '登录成功'
        }

        this.$message.success({
          showClose: true,
          message: msg,
          type: 'success'
        })
      })
    },
    successCasePrevClick() {
      this.successCaseSwiper.slidePrev()
    },
    successCaseNextClick() {
      this.successCaseSwiper.slideNext()
    },
    betterCasePrevClick() {
      this.betterCaseSwiper.slidePrev()
    },
    betterCaseNextClick() {
      this.betterCaseSwiper.slideNext()
    }
  }
}
</script>

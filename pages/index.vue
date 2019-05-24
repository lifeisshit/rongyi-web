<template>
  <section class="index">
    <div class="banner">
      <div class="wrap banner-wrap">
        <div class="login-tab">
          <ul class="login-tab-menu">
            <li :class="{ active: isLoginTabActive }" @click="showLoginTab">
              手机号登陆
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
                  >登陆</el-button
                >
              </el-form-item>
              <el-form-item class="other-row">
                <el-checkbox v-model="loginForm.isAutoLogin">
                  下次自动登陆
                </el-checkbox>
                <nuxt-link to="/" class="forget-pwd">忘记密码</nuxt-link>
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
                <span class="reg-ver-code-get" @click="onSendSmsCodeClick"
                  >获取验证码</span
                >
              </el-form-item>
              <el-form-item class="other-row" prop="isAgree">
                <el-checkbox v-model="regForm.isAgree">
                  我已阅读并同意
                  <nuxt-link to="/" class="reg-agree">《服务协议》 </nuxt-link>
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
          <nuxt-link to="/" class="link-more">查看更多</nuxt-link>
        </div>
      </div>
      <div class="index-sec-bd">
        <nuxt-link to="/" class="money-item">
          <img src="~/static/img/money-img1.png" alt="找资金" />
          <div class="money-info">
            <span class="money-title1">天使投资</span>
            <span class="money-title2">早期项目的福利从这里开始</span>
            <span class="money-arrow"></span>
          </div>
        </nuxt-link>
        <nuxt-link to="/" class="money-item money-item-center">
          <img src="~/static/img/money-img2.jpg" alt="找资金" />
          <div class="money-info">
            <span class="money-title1">股权投资</span>
            <span class="money-title2">引入实力投资，助推企业发展</span>
            <span class="money-arrow"></span>
          </div>
        </nuxt-link>
        <nuxt-link to="/" class="money-item">
          <img src="~/static/img/money-img3.png" alt="找资金" />
          <div class="money-info">
            <span class="money-title1">债权投资</span>
            <span class="money-title2">借款方式多样，融资就这么简单</span>
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
              v-for="slide in successCaseSwiperSlides"
              :key="slide.id"
              class="swiper-slide sc-swiper-slide"
            >
              <nuxt-link to="/" class="link-img">
                <img :src="slide.img" alt="成功案例" />
              </nuxt-link>
              <div class="slide-info">
                <p>{{ slide.title }}</p>
                <nuxt-link to="/">查看详情</nuxt-link>
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
        <div class="index-sec-hd-right">
          <nuxt-link to="/" class="link-more">查看更多</nuxt-link>
        </div>
      </div>
      <div class="index-sec-bd">
        <div
          v-for="investor in investors"
          :key="investor.id"
          to="/"
          class="investor-item"
        >
          <img :src="investor.img" alt="投资人" class="investor-img" />
          <div class="investor-info">
            <p class="investor-name">{{ investor.name }}</p>
            <p class="investor-company">
              <span>{{ investor.company }}</span>
              <span>/</span>
              <span>{{ investor.title }}</span>
            </p>
            <p class="investor-introduce">{{ investor.introduce }}</p>
            <nuxt-link to="/" class="meet-btn">马上约见</nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <!--投资机构-->
    <div class="index-sec wrap">
      <div class="index-sec-hd">
        <h3 class="index-sec-hd-left">投资机构</h3>
        <div class="index-sec-hd-right">
          <nuxt-link to="/" class="link-more">查看更多</nuxt-link>
        </div>
      </div>
      <div class="index-sec-bd">
        <div
          v-for="agency in investAgencies"
          :key="agency.id"
          to="/"
          class="invest-agency-item"
        >
          <div class="top-info">
            <div class="left-info">
              <p class="full-name">{{ agency.fullName }}</p>
              <div class="short-line"></div>
              <p class="short-name">{{ agency.shortName }}</p>
              <p class="site">{{ agency.site }}</p>
            </div>
            <div class="right-info">
              <img :src="agency.img" alt="投资机构" class="agency-img" />
            </div>
          </div>
          <div class="bottom-info">
            <p class="intro-tip">介绍</p>
            <p class="introduce">{{ agency.introduce }}</p>
            <nuxt-link to="/" class="meet-btn">马上约见</nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <!--找项目-->
    <div class="index-sec wrap">
      <div class="index-sec-hd">
        <h3 class="index-sec-hd-left">找项目</h3>
        <div class="index-sec-hd-right">
          <nuxt-link to="/" class="link-more">查看更多</nuxt-link>
        </div>
      </div>
      <div class="index-sec-bd">
        <div class="fm-item find-money1">
          <img src="~/static/img/find-money1.png" alt="找项目" />
          <div class="fm-info">
            <div class="fm-left">
              <p class="fm-title">IT互联网</p>
              <p class="fm-line"></p>
            </div>
            <div class="fm-right">
              <nuxt-link to="/" class="link-more">查看更多</nuxt-link>
            </div>
          </div>
        </div>
        <div class="find-money2">
          <div class="fm-item find-money2-1">
            <img src="~/static/img/find-money2.jpg" alt="找项目" />
            <div class="fm-info">
              <div class="fm-left">
                <p class="fm-title">农林牧渔</p>
                <p class="fm-line"></p>
              </div>
              <div class="fm-right">
                <nuxt-link to="/" class="link-more">查看更多</nuxt-link>
              </div>
            </div>
          </div>
          <div class="fm-item find-money2-2">
            <img src="~/static/img/find-money3.png" alt="找项目" />
            <div class="fm-info">
              <div class="fm-left">
                <p class="fm-title">房地产</p>
                <p class="fm-line"></p>
              </div>
              <div class="fm-right">
                <nuxt-link to="/" class="link-more">查看更多</nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <div class="find-money3">
          <div class="fm-item find-money3-1">
            <img src="~/static/img/find-money4.jpg" alt="找项目" />
            <div class="fm-info">
              <div class="fm-left">
                <p class="fm-title">餐饮休闲娱乐</p>
                <p class="fm-line"></p>
              </div>
              <div class="fm-right">
                <nuxt-link to="/" class="link-more">查看更多</nuxt-link>
              </div>
            </div>
          </div>
          <div class="find-money3-2">
            <div class="fm-item find-money3-2-1">
              <img src="~/static/img/find-money5.png" alt="找项目" />
              <div class="fm-info">
                <div class="fm-left">
                  <p class="fm-title">节能环保</p>
                  <p class="fm-line"></p>
                </div>
                <div class="fm-right">
                  <nuxt-link to="/" class="link-more">查看更多</nuxt-link>
                </div>
              </div>
            </div>
            <div class="fm-item find-money3-2-2">
              <img src="~/static/img/find-money6.png" alt="找项目" />
              <div class="fm-info">
                <div class="fm-left">
                  <p class="fm-title">其他行业</p>
                  <p class="fm-line"></p>
                </div>
                <div class="fm-right">
                  <nuxt-link to="/" class="link-more">查看更多</nuxt-link>
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
              v-for="slide in betterCaseSwiperSlides"
              :key="slide.id"
              class="swiper-slide bc-swiper-slide"
            >
              <nuxt-link to="/" class="link-img">
                <img :src="slide.img" alt="优质项目" />
              </nuxt-link>
              <div class="slide-info">
                <p class="title">{{ slide.title }}</p>
                <p class="introduce">{{ slide.introduce }}</p>
                <nuxt-link to="/">查看详情</nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import '~/assets/css/index.less'
import { mapActions } from 'vuex'
import { SmsCodeType } from '../common/constant'
import {
  verifyPassword,
  verifyEmail,
  verifyUsername,
  verifyChecked
} from '~/common/validate'

export default {
  data() {
    return {
      isLoginTabActive: true,
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
        phone: verifyUsername(),
        verificationCode: {
          required: true,
          min: 4,
          trigger: 'blur',
          message: '请输入验证码'
        },
        isAgree: verifyChecked('请同意服务协议')
      },
      successCaseSwiperOption: {
        slidesPerView: 4,
        spaceBetween: 0,
        slidesPerGroup: 4,
        loop: false,
        loopFillGroupWithBlank: true,
        allowTouchMove: false
      },
      successCaseSwiperSlides: [
        {
          id: '1',
          title: '四川某项目融资成功1',
          img: 'https://inews.gtimg.com/newsapp_bt/0/9040318929/1000'
        },
        {
          id: '2',
          title: '四川某项目融资成功2',
          img: 'https://inews.gtimg.com/newsapp_bt/0/9040318929/1000'
        },
        {
          id: '3',
          title: '四川某项目融资成功3',
          img: 'https://inews.gtimg.com/newsapp_bt/0/9040318929/1000'
        },
        {
          id: '4',
          title: '四川某项目融资成功4',
          img: 'https://inews.gtimg.com/newsapp_bt/0/9040318929/1000'
        },
        {
          id: '5',
          title: '四川某项目融资成功5',
          img: 'https://inews.gtimg.com/newsapp_bt/0/9040318929/1000'
        },
        {
          id: '6',
          title: '四川某项目融资成功6',
          img: 'https://inews.gtimg.com/newsapp_bt/0/9040318929/1000'
        }
      ],
      investors: [
        {
          id: '1',
          name: '张三',
          company: 'IDB资本',
          title: '董事长',
          img:
            'http://a4.att.hudong.com/07/88/01300542570390140775880068513_s.jpg',
          introduce:
            '浙江大学医学硕士，现任浙江九仁资本管理有限公司副总裁，进入投行多年，曾在贝达药业、浙大创投任职多年'
        },
        {
          id: '2',
          name: '李四',
          company: 'IDB资本',
          title: '董事长',
          img:
            'http://a4.att.hudong.com/07/88/01300542570390140775880068513_s.jpg',
          introduce:
            '浙江大学医学硕士，现任浙江九仁资本管理有限公司副总裁，进入投行多年，曾在贝达药业、浙大创投任职多年'
        },
        {
          id: '3',
          name: '王五',
          company: 'IDB资本',
          title: '董事长',
          img:
            'http://a4.att.hudong.com/07/88/01300542570390140775880068513_s.jpg',
          introduce:
            '浙江大学医学硕士，现任浙江九仁资本管理有限公司副总裁，进入投行多年，曾在贝达药业、浙大创投任职多年'
        }
      ],
      investAgencies: [
        {
          id: '1',
          fullName: '金沙江创业投资基金',
          shortName: '金沙江创业投资基金',
          site: '董事长',
          img:
            'https://www.temasek.com.sg/content/dam/temasek-corporate/our-community/temasek-foundations/TemasekTrust%20Logo_30Aug17_small.jpg',
          introduce:
            '金沙江创业投资基金专注于投资立足中国，面向全球市场的高新技术初创企业。'
        },
        {
          id: '2',
          fullName: '金沙江创业投资基金',
          shortName: '金沙江创业投资基金',
          site: '董事长',
          img:
            'https://www.temasek.com.sg/content/dam/temasek-corporate/our-community/temasek-foundations/TemasekTrust%20Logo_30Aug17_small.jpg',
          introduce:
            '金沙江创业投资基金专注于投资立足中国，面向全球市场的高新技术初创企业。'
        },
        {
          id: '3',
          fullName: '金沙江创业投资基金',
          shortName: '金沙江创业投资基金',
          site: '董事长',
          img:
            'https://www.temasek.com.sg/content/dam/temasek-corporate/our-community/temasek-foundations/TemasekTrust%20Logo_30Aug17_small.jpg',
          introduce:
            '金沙江创业投资基金专注于投资立足中国，面向全球市场的高新技术初创企业。'
        }
      ],
      betterCaseSwiperOption: {
        slidesPerView: 4,
        spaceBetween: 10,
        slidesPerGroup: 4,
        allowTouchMove: false
      },
      betterCaseSwiperSlides: [
        {
          id: '1',
          title: '四川某项目融资成功1',
          img: 'https://inews.gtimg.com/newsapp_bt/0/9051078583/1000',
          introduce:
            '安徽东临溪新农农业开发有限公司（拟），拟建立一家按现代企业模式运作的民营有'
        },
        {
          id: '2',
          title: '四川某项目融资成功2',
          img: 'https://inews.gtimg.com/newsapp_bt/0/9051078583/1000',
          introduce:
            '安徽东临溪新农农业开发有限公司（拟），拟建立一家按现代企业模式运作的民营有'
        },
        {
          id: '3',
          title: '四川某项目融资成功3',
          img: 'https://inews.gtimg.com/newsapp_bt/0/9051078583/1000',
          introduce:
            '安徽东临溪新农农业开发有限公司（拟），拟建立一家按现代企业模式运作的民营有'
        },
        {
          id: '4',
          title: '四川某项目融资成功4',
          img: 'https://inews.gtimg.com/newsapp_bt/0/9051078583/1000',
          introduce:
            '安徽东临溪新农农业开发有限公司（拟），拟建立一家按现代企业模式运作的民营有'
        },
        {
          id: '5',
          title: '四川某项目融资成功5',
          img: 'https://inews.gtimg.com/newsapp_bt/0/9051078583/1000',
          introduce:
            '安徽东临溪新农农业开发有限公司（拟），拟建立一家按现代企业模式运作的民营有'
        },
        {
          id: '6',
          title: '四川某项目融资成功6',
          img: 'https://inews.gtimg.com/newsapp_bt/0/9051078583/1000',
          introduce:
            '安徽东临溪新农农业开发有限公司（拟），拟建立一家按现代企业模式运作的民营有作的民营有作的民营有'
        }
      ]
    }
  },
  methods: {
    ...mapActions('user', ['sendSmsCode']),
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
        }
      })
    },
    // 点击注册按钮
    onFormSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log('valid')
        }
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

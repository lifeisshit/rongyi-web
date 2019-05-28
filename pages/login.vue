<template>
  <div>
    <section class="login-top">
      <div class="wrap">
        <h1 class="r-pull-left left-logo">
          <nuxt-link to="/">
            <img class="main-logo" src="~/assets/img/logo.png" alt="融易网" />
          </nuxt-link>
          <p class="sub-title">欢迎登录</p>
        </h1>
        <nuxt-link class="r-pull-right" to="/">联系客服</nuxt-link>
      </div>
    </section>
    <section class="login-body">
      <div class="wrap">
        <div class="login-tab">
          <ul class="login-tab-menu">
            <li :class="{ active: isLoginTabActive }" @click="showLoginTab">
              账号登录
            </li>
            <li :class="{ active: !isLoginTabActive }" @click="showRegTab">
              手机快捷登录
            </li>
          </ul>
          <div class="login-tab-content">
            <!--账号登录-->
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
              <el-form-item class="submit-row">
                <el-button class="login-btn" @click="onFormSubmit('loginForm')"
                  >登录</el-button
                >
              </el-form-item>
              <el-form-item class="other-row">
                <nuxt-link to="/register" class="free-register"
                  >没有账号?免费注册</nuxt-link
                >
                <nuxt-link to="/" class="forget-pwd">忘记密码</nuxt-link>
              </el-form-item>
            </el-form>
            <!--手机快捷登录-->
            <el-form
              v-show="!isLoginTabActive"
              ref="telCodeForm"
              class="content-register"
              :model="telCodeForm"
              :rules="rules"
            >
              <el-form-item class="content-row" prop="phone">
                <el-input
                  v-model="telCodeForm.phone"
                  placeholder="请输入手机号"
                  type="tel"
                >
                </el-input>
              </el-form-item>
              <el-form-item class="content-row" prop="verificationCode">
                <el-input
                  v-model="telCodeForm.verificationCode"
                  placeholder="请输入验证码"
                  class="reg-ver-code-input"
                ></el-input>
                <el-button
                  class="reg-ver-code-get"
                  :disabled="loginCodeInfo.isSendDiabled"
                  @click="onSendSmsCodeClick"
                >
                  {{
                    loginCodeInfo.isSendDiabled
                      ? smsCodeBtnText + '(' + loginCodeInfo.countdown + ')'
                      : smsCodeBtnText
                  }}
                </el-button>
              </el-form-item>
              <el-form-item class="reg-submit-row reg-submit-row2">
                <el-button
                  class="login-btn"
                  @click="onFormSubmit('telCodeForm')"
                  >登录</el-button
                >
              </el-form-item>
              <el-form-item class="other-row">
                <nuxt-link to="/register" class="free-register"
                  >没有账号?免费注册</nuxt-link
                >
                <nuxt-link to="/" class="forget-pwd">忘记密码</nuxt-link>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </section>
    <section class="login-bottom">
      <div class="wrap">版权所有：融易网 www.rongyi.com 鄂ICP123554554号</div>
    </section>
  </div>
</template>

<script>
import '~/assets/css/login.less'
import { mapActions, mapState } from 'vuex'
import { SmsCodeType } from '~/common/constant'
import {
  verifyPassword,
  verifyUsername,
  verifyChecked
} from '~/common/validate'

export default {
  name: 'Login',
  layout: 'base',
  data() {
    return {
      isLoginTabActive: true,
      smsCodeBtnText: '获取验证码',
      loginForm: {
        phone: '',
        password: '',
        isAutoLogin: false
      },
      telCodeForm: {
        phone: '',
        password: '',
        verificationCode: ''
      },
      rules: {
        password: verifyPassword(),
        phone: verifyUsername(),
        verificationCode: {
          required: true,
          min: 4,
          trigger: 'blur',
          message: '请输入验证码'
        }
      }
    }
  },
  computed: {
    ...mapState('sessionStorage', ['loginCodeInfo']),
    ...mapState('user', ['user'])
  },
  created() {
    const isSendDiabled = this.loginCodeInfo.isSendDiabled
    // 如果验证码不可用，则继续倒计时
    if (isSendDiabled) {
      this.startCountDown({
        isInit: true,
        smsCodeType: SmsCodeType.Login
      })
    }
  },
  methods: {
    ...mapActions('user', ['sendSmsCode', 'login', 'loginBySmsCode']),
    ...mapActions('sessionStorage', ['startCountDown']),
    showLoginTab() {
      this.$refs.loginForm.clearValidate()
      this.$refs.telCodeForm.clearValidate()
      this.isLoginTabActive = true
    },
    showRegTab() {
      this.$refs.telCodeForm.clearValidate()
      this.$refs.loginForm.clearValidate()
      this.isLoginTabActive = false
    },
    // 发送验证码
    onSendSmsCodeClick() {
      this.$refs.telCodeForm.validateField('phone', async error => {
        if (!error) {
          this.startCountDown({
            isInit: false,
            smsCodeType: SmsCodeType.Login
          })
          await this.sendSmsCode({
            phone: this.telCodeForm.phone,
            type: SmsCodeType.Login
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
        if (formName === 'telCodeForm') {
          // 手机快捷登录
          await this.loginBySmsCode({
            login: this.telCodeForm.phone,
            smsCode: this.telCodeForm.verificationCode
          })
        } else {
          // 账号登录
          await this.login({
            login: this.loginForm.phone,
            password: this.loginForm.password
          })
        }

        this.$router.push({
          path: '/'
        })
      })
    }
  }
}
</script>

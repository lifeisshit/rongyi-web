<template>
  <div>
    <section class="login-top">
      <div class="wrap">
        <h1 class="r-pull-left left-logo">
          <nuxt-link to="/">
            <img class="main-logo" src="~/assets/img/logo.png" alt="融易网" />
          </nuxt-link>
          <p class="sub-title">欢迎注册</p>
        </h1>
        <nuxt-link class="r-pull-right" to="/">联系客服</nuxt-link>
      </div>
    </section>
    <section class="login-body">
      <div class="wrap">
        <div class="login-tab">
          <ul class="login-tab-menu">
            <li class="active">
              注册账号
            </li>
            <li></li>
          </ul>
          <div class="login-tab-content">
            <!--注册-->
            <el-form
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
    </section>
    <section class="login-bottom">
      <div class="wrap">版权所有：融易网 www.rongyi8.com 鄂ICP123554554号</div>
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
  name: 'Register',
  layout: 'base',
  data() {
    return {
      smsCodeBtnText: '获取验证码',
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
      }
    }
  },
  computed: {
    ...mapState('sessionStorage', ['regCodeInfo']),
    ...mapState('user', ['user'])
  },
  created() {
    const isSendDiabled = this.regCodeInfo.isSendDiabled
    // 如果验证码不可用，则继续倒计时
    if (isSendDiabled) {
      this.startCountDown({
        isInit: true
      })
    }
  },
  methods: {
    ...mapActions('user', ['sendSmsCode', 'verifySmsCode', 'register']),
    ...mapActions('sessionStorage', ['startCountDown']),
    // 发送验证码
    onSendSmsCodeClick() {
      this.$refs.regForm.validateField('phone', async error => {
        if (!error) {
          this.startCountDown({
            isInit: false
          })
          await this.sendSmsCode({
            phone: this.regForm.phone,
            type: SmsCodeType.Register
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
        }
        // 注册成功跳转到首页
        this.$router.push({
          path: '/'
        })
      })
    }
  }
}
</script>

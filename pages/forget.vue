<template>
  <div>
    <div class="wrap account-getpwd">
      <div class="getpwd-step">
        <div class="step-line">
          <el-row class="step-rows">
            <el-col :span="8">
              <div
                class="step-line-tips"
                :class="{ active: currentStep === 1 }"
              >
                <span>1</span>填写账号信息
              </div>
            </el-col>
            <el-col :span="8">
              <div
                class="step-line-tips"
                :class="{ active: currentStep === 2 }"
              >
                <span>2</span>设置新密码
              </div>
            </el-col>
            <el-col :span="8">
              <div
                class="step-line-tips"
                :class="{ active: currentStep === 3 }"
              >
                <span>3</span>设置成功
              </div>
            </el-col>
          </el-row>
        </div>
        <div v-if="currentStep === 1" class="chk-mobile">
          <el-form
            ref="step1Form"
            :model="step1Form"
            status-icon
            :rules="rules"
            class="ruleForm"
          >
            <el-form-item label="手机号：" prop="mobile">
              <el-input
                v-model="step1Form.mobile"
                type="text"
                class="mobile-input"
                autocomplete="off"
                placeholder="请输入手机号"
              ></el-input>
              <div class="chk-mobile-tips">
                <i class="el-icon-warning"></i>请输入已绑定的手机号
              </div>
            </el-form-item>
            <el-form-item label="验证码：" prop="code">
              <el-input
                v-model="step1Form.code"
                type="text"
                class="mobilecode-input"
                placeholder="请输入验证码"
                autocomplete="off"
              ></el-input>
              <el-button
                class="get-mobile-code"
                :disabled="forgetPasswordCodeInfo.isSendDiabled"
                @click="onSendSmsCodeClick()"
                >{{
                  forgetPasswordCodeInfo.isSendDiabled
                    ? smsCodeBtnText +
                      '(' +
                      forgetPasswordCodeInfo.countdown +
                      ')'
                    : smsCodeBtnText
                }}</el-button
              >
            </el-form-item>
            <el-form-item>
              <el-button
                class="item-btn submit-btn"
                @click="onSubmit('step1Form')"
                >下一步</el-button
              >
            </el-form-item>
          </el-form>
        </div>
        <div v-if="currentStep === 2" class="resetpwd">
          <el-form
            ref="step2Form"
            :model="step2Form"
            status-icon
            :rules="rules"
            class="resetForm"
          >
            <el-form-item label="新 密 码：" prop="password">
              <el-input
                v-model="step2Form.password"
                type="password"
                class="pwd-input"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="确认密码：" prop="verifyPassword">
              <el-input
                v-model="step2Form.verifyPassword"
                type="password"
                class="pwd-input"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button
                class="item-btn submit-btn"
                @click="onSubmit('step2Form')"
                >提交</el-button
              >
            </el-form-item>
          </el-form>
        </div>
        <div v-if="currentStep === 3" class="getpwd-success">
          <div class="success-state"><i class="el-icon-success"></i></div>
          <div class="success-msg">密码修改成功</div>
          <div class="success-action">请重新登录</div>
          <el-button class="item-btn submit-btn" @click="goToLogin"
            >确定</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import '~/assets/css/account-getpwd.less'
import { SmsCodeType } from '~/common/constant'
import { mapActions, mapState } from 'vuex'
import {
  verifyMobilePhone,
  checkPhoneCode,
  verifyPassword
} from '~/common/validate'

export default {
  name: 'Forget',
  components: {},
  data() {
    return {
      currentStep: 1,
      smsCodeBtnText: '获取验证码',
      step1Form: {
        mobile: '',
        code: ''
      },
      step2Form: {
        password: '',
        verifyPassword: ''
      },
      rules: {
        mobile: verifyMobilePhone(),
        code: [{ validator: checkPhoneCode, trigger: 'blur' }],
        password: verifyPassword(),
        verifyPassword: [
          { validator: this.checkAgainPassword, trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    ...mapState('sessionStorage', ['forgetPasswordCodeInfo']),
    ...mapState('user', ['user'])
  },
  created() {
    const isSendDiabled = this.forgetPasswordCodeInfo.isSendDiabled
    console.log('isSendDiabled: ', isSendDiabled)
    // 如果验证码不可用，则继续倒计时
    if (isSendDiabled) {
      this.startCountDown({
        isInit: true,
        smsCodeType: SmsCodeType.ModifyPassword
      })
    }
  },
  methods: {
    ...mapActions('user', [
      'verifySmsCode',
      'updatePwd',
      'sendSmsCode',
      'logout',
      'verifySmsCodeAfterForget',
      'updatePwdAfterForget'
    ]),
    ...mapActions('sessionStorage', ['startCountDown']),
    // 验证再次输入密码
    checkAgainPassword(rule, value, callback) {
      if (!value) {
        return callback(new Error('再次输入密码不能为空'))
      } else if (value.length < 6 || value.length > 15) {
        return callback(new Error('请正确输入密码(6-15位)'))
      } else if (value !== this.step2Form.password) {
        return callback(new Error('两次输入的密码不一致'))
      } else {
        callback()
      }
    },
    onSubmit(formName) {
      this.$refs[formName].validate(async valid => {
        if (!valid) {
          return
        }
        if (formName === 'step1Form') {
          // 校验验证码
          await this.verifySmsCodeAfterForget({
            phone: this.step1Form.mobile,
            smsCode: this.step1Form.code
          })
          // 验证码校验成功，进入第二步
          this.currentStep = 2
        } else if (formName === 'step2Form') {
          // 填写新密码
          await this.updatePwdAfterForget({
            phone: this.step1Form.mobile,
            smsCode: this.step1Form.code,
            password: this.step2Form.password
          })
          // 验证码校验成功，进入第二步
          this.currentStep = 3
        }
      })
    },
    // 发送验证码
    onSendSmsCodeClick() {
      this.$refs.step1Form.validateField('mobile', async error => {
        if (!error) {
          await this.sendSmsCode({
            phone: this.step1Form.mobile,
            type: SmsCodeType.ModifyPassword
          })
          this.startCountDown({
            isInit: false,
            smsCodeType: SmsCodeType.ModifyPassword
          })
          this.$message.success({
            showClose: true,
            message: '验证码已发送成功，请注意查收',
            type: 'success'
          })
        }
      })
    },
    goToLogin() {
      this.$router.push({
        path: '/login'
      })
    }
  }
}
</script>

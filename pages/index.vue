<template>
  <section class="index">
    <div class="banner">
      <div class="wrap banner-wrap">
        <div class="login-tab">
          <ul class="login-tab-menu">
            <li :class="{ active: isLoginTabActive }">手机号登陆</li>
            <li :class="{ active: !isLoginTabActive }">免费注册</li>
          </ul>
          <div class="login-tab-content">
            <div v-if="isLoginTabActive" class="content-login">
              <div class="content-row">
                <el-input v-model="input" placeholder="请输入内容"></el-input>
              </div>
              <div class="content-row">
                <el-input v-model="input" placeholder="请输入内容"></el-input>
              </div>
              <div class="content-row">
                <el-input
                  v-model="input"
                  placeholder="请输入内容"
                  class="ver-code-input"
                ></el-input>
                <span class="ver-code-text">1235</span
                ><span class="ver-code-refresh">刷新</span>
              </div>
              <div class="submit-row">
                <el-button class="login-btn">登陆</el-button>
              </div>
              <div class="other-row">
                <el-checkbox v-model="checked">下次自动登陆</el-checkbox>
                <span>忘记密码</span>
              </div>
            </div>
            <div v-if="!isLoginTabActive" class="content-register"></div>
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
  </section>
</template>

<script>
import '~/assets/css/index.less'

export default {
  data() {
    return {
      isLoginTabActive: true,
      loginInfo: {
        userName: '',
        password: '',
        verificationCode: ''
      },
      regInfo: {}
    }
  }
}
</script>

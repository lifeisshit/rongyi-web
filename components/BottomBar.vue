<template>
  <div class="bottom-bar">
    <div class="wrap">
      <ul class="bottom-bar-inner">
        <li class="visit-number-wrap">
          已有<span class="visit-number">{{ visitCount }}</span
          >人，提交约谈项目
        </li>
        <li>
          <el-form
            ref="inlineForm"
            :inline="true"
            :model="inlineForm"
            :rules="rules"
            class="demo-form-inline"
          >
            <el-form-item prop="amount">
              <el-input
                v-model="inlineForm.amount"
                type="number"
                placeholder="请输入融资金额"
              ></el-input>
            </el-form-item>
            <el-form-item prop="phone">
              <el-input
                v-model="inlineForm.phone"
                placeholder="请输入手机号"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button class="submit-btn" @click="onSubmit"
                >提交申请</el-button
              >
            </el-form-item>
          </el-form>
        </li>
        <li class="qrcode-item">
          <div class="qrcode">
            <img src="~/assets/img/qrcode.jpg" alt="融易网公众号二维码" />
          </div>
          <p class="qrcode-text">微信扫一扫</p>
        </li>
      </ul>
    </div>
    <span class="close-btn">
      <i class="el-icon-close"></i>
    </span>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { verifyMobilePhone } from '~/common/validate'

export default {
  name: 'BottomBar',
  data() {
    return {
      inlineForm: {
        amount: '',
        phone: ''
      },
      rules: {
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          verifyMobilePhone()
        ],
        amount: {
          required: true,
          trigger: 'blur',
          message: '请输入融资金额'
        }
      }
    }
  },
  computed: {
    ...mapState(['visitCount'])
  },
  methods: {
    ...mapActions(['applyFinance']),
    onSubmit() {
      this.$refs.inlineForm.validate(async valid => {
        if (!valid) {
          return
        }
        await this.applyFinance(this.inlineForm)
        this.$message.success({
          showClose: true,
          message: '申请提交成功',
          type: 'success'
        })
      })
    }
  }
}
</script>

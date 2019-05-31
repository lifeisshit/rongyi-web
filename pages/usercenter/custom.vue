<template>
  <div class="content">
    <div class="wrap">
      <div class="main-page-out">
        <div class="page-cate-name">完善资料</div>
        <div class="cate-name-state">
          <i class="line"></i>
          <div class="warntext">
            温馨提示：请填写真实完善的个人信息，系统将自动给您生成一张名片，会员可以互换！
          </div>
          <div class="step_img">
            <img src="~/assets/img/infos_state_2.png" />
          </div>
        </div>
        <div class="choose-type">
          <div class="type-tips">请务必选择您的业务信息</div>
          <div class="type-select  yewuxinxi">
            <span :class="{ selected: type == 1 }" @click="chooseType(1)"
              ><i class="rongzi"></i>我要融资</span
            >
            <span :class="{ selected: type == 2 }" @click="chooseType(2)"
              ><i class="touzi"></i>我要投资</span
            >
          </div>
        </div>
        <div class="account-info-form">
          <el-form
            ref="accountForm"
            :rules="rules"
            :model="accountForm"
            label-width="150px"
          >
            <div class="form-table" style="margin-top: 30px;">
              <div class="tips">定制{{ type === 1 ? '融资' : '投资' }}信息</div>
              <div class="form-item" style="width: 100%;">
                <el-form-item
                  :label="
                    type === 1 ? '您期望的资金来源：' : '您所属的资金主体：'
                  "
                  prop="moneyType"
                >
                  <!--融资-->
                  <el-checkbox-group
                    v-if="type === 1"
                    v-model="accountForm.investTypes"
                    class="form-check-box"
                  >
                    <el-checkbox
                      v-for="(value, index) in investTypes"
                      :key="index"
                      :label="value"
                      @change="onCheckChanged()"
                      >{{ value }}</el-checkbox
                    >
                  </el-checkbox-group>
                  <!--投资-->
                  <el-select
                    v-if="type !== 1"
                    v-model="accountForm.fundTypes"
                    placeholder="请选择..."
                    style="width: 180px;"
                  >
                    <el-option
                      v-for="(invest, index) in investTypes"
                      :key="index"
                      :label="invest"
                      :value="invest"
                    ></el-option>
                  </el-select>
                </el-form-item>
                <!--<el-form-item-->
                <!--label="您感兴趣的行业："-->
                <!--style="margin-bottom: 0;"-->
                <!--&gt;-->
                <!--<span style="color:#ff873f;font-size:12px;"-->
                <!--&gt;普通会员只能选择5个行业</span-->
                <!--&gt;-->
                <!--</el-form-item>-->
                <el-form-item v-if="type === 2" label="您感兴趣的行业：">
                  <el-checkbox-group
                    v-model="accountForm.industries"
                    class="form-check-box"
                  >
                    <el-checkbox
                      v-for="(value, index) in industries"
                      :key="index"
                      :label="value"
                      @change="onCheckChanged()"
                      >{{ value }}</el-checkbox
                    >
                  </el-checkbox-group>
                </el-form-item>
                <el-form-item label="您感兴趣的地区：">
                  <el-checkbox-group
                    v-model="accountForm.regions"
                    class="form-check-box"
                  >
                    <el-checkbox
                      v-for="(value, index) in regions"
                      :key="index"
                      :label="value"
                      @change="onCheckChanged()"
                      >{{ value }}</el-checkbox
                    >
                  </el-checkbox-group>
                </el-form-item>
              </div>
            </div>
            <el-form-item style="margin-top: 30px;">
              <el-button
                class="item-btn submit-btn"
                style="margin-left: 20px;"
                type="primary"
                @click="onSubmit('accountForm')"
                >完成</el-button
              >
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import '~/assets/css/finish.less'
import { InvestTypes, Industries, Regions } from '~/common/constant'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'UserCenterCustom',
  middleware: 'authenticated',
  data() {
    return {
      investTypes: InvestTypes,
      industries: Industries,
      regions: Regions,
      type: 1,
      accountForm: {
        investTypes: [],
        fundTypes: '',
        industries: [],
        regions: []
      },
      rules: {}
    }
  },
  computed: {
    ...mapState('user', ['user'])
  },
  methods: {
    ...mapActions('user', ['completeBusinessInfo', 'finishStep2']),
    chooseType(type) {
      if (this.type === type) {
        return
      }
      this.type = type
      this.accountForm.industries = []
      this.$refs.accountForm.clearValidate()
    },
    // 多选框选中事件
    onCheckChanged() {
      // console.log(this.accountForm)
    },
    onSubmit(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          const param = {}
          if (this.type === 1) {
            param.memberObject = '项目方'
            param.moneySrc = this.accountForm.investTypes.join(',')
          } else {
            param.memberObject = '资金方'
            param.moneySrc = this.accountForm.fundTypes
          }
          param.interestIndustry = this.accountForm.industries.join(',')
          param.interestRegion = this.accountForm.regions.join(',')
          param.userId = this.user.id
          // console.log(param)
          await this.completeBusinessInfo(param)
          // 设置完成状态
          this.finishStep2()
          this.$message.success({
            showClose: true,
            message: '设置成功',
            type: 'success'
          })
          this.$router.push({
            path: '/'
          })
        } else {
          return false
        }
      })
    }
  }
}
</script>

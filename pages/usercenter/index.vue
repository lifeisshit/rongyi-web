<template>
  <div>
    <div class="ucenter-warp wrap clearfix">
      <div class="uc-left-menu">
        <UcenterLeftMenu :active-menu="401"></UcenterLeftMenu>
      </div>
      <div class="uc-right-main">
        <div class="main-page-out">
          <div class="page-cate-name">我的资料</div>
          <div class="account-edit-form">
            <el-form
              ref="accountForm"
              :rules="rules"
              :model="accountForm"
              label-width="150px"
            >
              <div class="form-table">
                <div class="tips">个人信息</div>
                <el-row :gutter="20" class="form-item">
                  <el-col :span="18">
                    <el-form-item label="会员对象：">
                      {{ accountForm.memberObject }}
                    </el-form-item>
                    <el-form-item label="会员身份：">
                      {{ accountForm.memberType }}
                    </el-form-item>
                    <el-form-item label="姓名：" prop="name">
                      <el-input v-model="accountForm.name"></el-input>
                      <div class="el-form-item__tips">请输入您的真实姓名</div>
                    </el-form-item>
                    <el-form-item label="性别：" prop="gender">
                      <el-radio-group v-model="accountForm.gender">
                        <el-radio label="男">男</el-radio>
                        <el-radio label="女">女</el-radio>
                      </el-radio-group>
                    </el-form-item>
                    <el-form-item label="职位：" prop="duty">
                      <el-select
                        v-if="type !== 3"
                        v-model="accountForm.duty"
                        placeholder="请选择"
                        style="width: 180px;"
                      >
                        <el-option
                          v-for="(pos, index) in companyPositions"
                          :key="index"
                          :label="pos"
                          :value="pos"
                        ></el-option>
                      </el-select>
                      <el-select
                        v-if="type === 3"
                        v-model="accountForm.duty"
                        placeholder="请选择"
                        style="width: 180px;"
                      >
                        <el-option
                          v-for="(pos, index) in governmentPositions"
                          :key="index"
                          :label="pos"
                          :value="pos"
                        ></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="所在部门：" prop="department">
                      <el-input v-model="accountForm.department"></el-input>
                    </el-form-item>
                    <!--<el-form-item label="手机号码：" class="sns-check">-->
                    <!--{{ accountForm.mobile }}-->
                    <!--<a class="edit">修改</a>-->
                    <!--<span v-if="accountForm.mobile_state">已验证</span>-->
                    <!--<span v-else>未验证</span>-->
                    <!--</el-form-item>-->
                    <el-form-item label="邮箱：" class="sns-check" prop="email">
                      <el-input v-model="accountForm.email"></el-input>
                    </el-form-item>
                    <el-form-item label="电话号码：">
                      <el-input v-model="accountForm.fixLinePhone"></el-input>
                    </el-form-item>
                    <el-form-item label="QQ号码：">
                      <el-input v-model="accountForm.qq"></el-input>
                    </el-form-item>
                  </el-col>
                  <!--<el-col :span="6">-->
                  <!--<div class="upload-photo-one">-->
                  <!--<div class="photo-view">-->
                  <!--<img src="~/assets/img/face.png" />-->
                  <!--</div>-->
                  <!--<el-upload-->
                  <!--class="upload-demo"-->
                  <!--action="https://jsonplaceholder.typicode.com/posts/"-->
                  <!--:show-file-list="false"-->
                  <!--:on-success="handleSuccess"-->
                  <!--list-type="picture"-->
                  <!--&gt;-->
                  <!--<el-button size="small" type="upload"-->
                  <!--&gt;上传真实头像</el-button-->
                  <!--&gt;-->
                  <!--</el-upload>-->
                  <!--</div>-->
                  <!--</el-col>-->
                </el-row>
              </div>
              <div class="form-table mtop20">
                <div class="tips">附属资料</div>
                <el-row class="form-item">
                  <el-col :span="18">
                    <el-form-item
                      :label="type === 3 ? '单位名称：' : '企业名称：'"
                      prop="compName"
                    >
                      <el-input v-model="accountForm.compName"></el-input>
                      <div v-if="type !== 3" class="el-form-item__tips">
                        请填写您营业执照上的企业名称
                      </div>
                      <div v-if="type === 3" class="el-form-item__tips">
                        请填写您的单位名称
                      </div>
                    </el-form-item>
                    <el-form-item label="所属行业：" prop="industry">
                      <el-select
                        v-model="accountForm.industry"
                        placeholder="请选择"
                        style="width: 180px;"
                        :disabled="type === 3"
                      >
                        <el-option
                          v-for="(industry, index) in industries"
                          :key="index"
                          :label="industry"
                          :value="industry"
                        ></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="所在地区：">
                      <FormCitySelect
                        :province="accountForm.province"
                        :city="accountForm.city"
                        :region="accountForm.region"
                        @change="changeAddress"
                      ></FormCitySelect>
                    </el-form-item>
                    <el-form-item label="">
                      <el-input v-model="accountForm.address"></el-input>
                      <div class="el-form-item__tips">
                        请填写{{ type === 3 ? '单位' : '公司' }}所在地的联系地址
                      </div>
                    </el-form-item>
                    <el-form-item
                      :label="type === 3 ? '单位简介：' : '企业简介：'"
                      prop="compDes"
                    >
                      <el-input
                        v-model="accountForm.compDes"
                        type="textarea"
                        :rows="4"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
              </div>
              <el-form-item style="margin-top: 30px;">
                <el-button
                  class="item-btn submit-btn"
                  style="margin-left: 20px;"
                  type="primary"
                  @click="onSubmit('accountForm')"
                  >提交</el-button
                >
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import '~/assets/css/account-infos.less'
import UcenterLeftMenu from '~/components/UcenterLeftMenu'
import FormCitySelect from '~/components/FormCitySelect'
import {
  GovernmentPositions,
  Industries,
  CompanyPositions
} from '~/common/constant'
import { mapState, mapActions } from 'vuex'
import { verifyEmail } from '~/common/validate'

export default {
  name: 'AccountInfos',
  middleware: 'authenticated',
  components: {
    UcenterLeftMenu,
    FormCitySelect
  },
  data() {
    return {
      industries: Industries,
      governmentPositions: GovernmentPositions,
      companyPositions: CompanyPositions,
      memberType: '',
      selectAddr: {
        province: '',
        city: '',
        region: ''
      },
      accountForm: {
        name: '',
        gender: '',
        department: '',
        fixLinePhone: '',
        qq: '',
        duty: '',
        email: '',
        email_state: false,
        compName: '',
        address: '',
        industry: '',
        compDes: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          {
            min: 2,
            max: 20,
            message: '姓名长度在 2 到 20 个字符',
            trigger: 'blur'
          }
        ],
        gender: [{ required: true, message: '请选择性别' }],
        department: [
          { required: true, message: '请输入所在部门', trigger: 'blur' }
        ],
        compName: [{ required: true, message: '请输入名称', trigger: 'blur' }],
        industry: [
          { required: true, message: '请选择所属行业', trigger: 'blur' }
        ],
        email: verifyEmail()
      }
    }
  },
  computed: {
    ...mapState('user', ['user']),
    type: function() {
      const userData = this.user.userData

      if (userData.memberType === '企业') {
        return 1
      } else if (userData.memberType === '个人') {
        return 2
      }
      return 3
    }
  },
  created() {
    const user = this.user
    const userData = user.userData
    userData.name = user.name
    userData.gender = user.gender
    userData.email = user.email

    this.accountForm = JSON.parse(JSON.stringify(userData))

    this.selectAddr.province = this.accountForm.province
    this.selectAddr.city = this.accountForm.city
    this.selectAddr.region = this.accountForm.region
  },
  methods: {
    ...mapActions('user', ['updateMemberInfo']),
    changeAddress(selectAddr) {
      this.selectAddr = selectAddr
    },
    onSubmit(formName) {
      this.$refs[formName].validate(async valid => {
        if (!valid) {
          return false
        }
        const param = this.accountForm
        param.province = this.selectAddr.province
        param.city = this.selectAddr.city
        param.region = this.selectAddr.region
        param.userId = this.user.id

        await this.updateMemberInfo(param)

        this.$message.success({
          showClose: true,
          message: '设置成功',
          type: 'success'
        })
      })
    }
  }
}
</script>

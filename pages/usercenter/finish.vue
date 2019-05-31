<template>
  <div class="finish-info content">
    <div class="wrap">
      <div class="main-page-out">
        <div class="page-cate-name">完善资料</div>
        <div class="cate-name-state">
          <i class="line"></i>
          <div class="warntext">
            温馨提示：请填写真实完善的个人信息，系统将自动给您生成一张名片，会员可以互换！
          </div>
          <div class="step_img">
            <img src="~/assets/img/infos_state_1.png" />
          </div>
        </div>
        <div class="choose-type">
          <div class="type-tips">请务必选择您的身份</div>
          <div class="type-select">
            <span :class="{ selected: type === 1 }" @click="chooseType(1)"
              ><i class="qiye"></i>企业</span
            >
            <span :class="{ selected: type === 2 }" @click="chooseType(2)"
              ><i class="geren"></i>个人</span
            >
            <span :class="{ selected: type === 3 }" @click="chooseType(3)"
              ><i class="zhenfu"></i>政府</span
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
            <div class="form-table no-border-bottom" style="margin-top: 30px;">
              <div class="tips">{{ type === 3 ? '单位' : '企业' }}资料</div>
              <div class="form-item">
                <el-form-item
                  :label="type === 3 ? '单位名称：' : '企业名称：'"
                  prop="enterprise_name"
                >
                  <el-input v-model="accountForm.enterprise_name"></el-input>
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
                <el-form-item label="所在地区：" prop="address">
                  <FormCitySelect></FormCitySelect>
                </el-form-item>
                <el-form-item label="">
                  <el-input v-model="accountForm.address"></el-input>
                  <div class="el-form-item__tips">
                    请选择{{ type === 3 ? '单位' : '公司' }}所在地的联系地址
                  </div>
                </el-form-item>
                <el-form-item
                  :label="type === 3 ? '单位简介：' : '企业简介：'"
                  prop="company_profile"
                >
                  <el-input
                    v-model="accountForm.company_profile"
                    type="textarea"
                    :rows="4"
                  ></el-input>
                </el-form-item>
              </div>
            </div>
            <div class="form-table">
              <div class="tips">个人信息</div>
              <div class="form-item">
                <el-form-item label="姓名：" prop="truename">
                  <el-input v-model="accountForm.truename"></el-input>
                  <div class="el-form-item__tips">请输入您的真实姓名</div>
                </el-form-item>
                <el-form-item label="性别：" prop="sex">
                  <el-radio-group v-model="accountForm.sex">
                    <el-radio label="1">男</el-radio>
                    <el-radio label="2">女</el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="职位：" prop="position">
                  <el-select
                    v-if="type !== 3"
                    v-model="accountForm.position"
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
                    v-model="accountForm.position"
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
                <el-form-item label="手机号码：" class="sns-check">
                  {{ accountForm.mobile }}
                  <a class="edit">修改</a>
                  <span v-if="accountForm.mobile_state">已验证</span>
                  <span v-else>未验证</span>
                </el-form-item>
                <el-form-item label="邮箱：" class="sns-check">
                  {{ accountForm.email }}
                  <a class="edit">修改</a>
                  <span v-if="accountForm.email_state">已验证</span>
                  <span v-else>未验证</span>
                </el-form-item>
                <el-form-item label="电话号码：">
                  <el-input v-model="accountForm.tel"></el-input>
                </el-form-item>
                <el-form-item label="QQ号码：">
                  <el-input v-model="accountForm.qq"></el-input>
                </el-form-item>
              </div>
            </div>
            <el-form-item style="margin-top: 30px;">
              <el-button
                class="item-btn submit-btn"
                style="margin-left: 20px;"
                type="primary"
                @click="onSubmit('accountForm')"
                >填写完成，进入业务定制</el-button
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
import {
  GovernmentPositions,
  Industries,
  CompanyPositions
} from '~/common/constant'
import FormCitySelect from '~/components/FormCitySelect'

export default {
  name: 'UserCenterFinish',
  middleware: 'authenticated',
  components: {
    FormCitySelect
  },
  data() {
    return {
      industries: Industries,
      governmentPositions: GovernmentPositions,
      companyPositions: CompanyPositions,
      type: 1,
      accountForm: {
        truename: 'xiaoying5201',
        sex: '1',
        department: '',
        tel: '',
        qq: '',
        position: '',
        mobile: '18086002222',
        mobile_state: true,
        email: '860002100@qq.com',
        email_state: false,
        enterprise_name: '',
        address: '',
        industry: '',
        company_profile: ''
      },
      rules: {
        truename: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          {
            min: 3,
            max: 5,
            message: '姓名长度在 3 到 20 个字符',
            trigger: 'blur'
          }
        ],
        sex: [{ required: true, message: '请选择性别' }],
        department: [
          { required: true, message: '请输入所在部门', trigger: 'blur' }
        ],
        enterprise_name: [
          { required: true, message: '请输入名称', trigger: 'blur' }
        ],
        industry: [
          { required: true, message: '请选择所属行业', trigger: 'blur' }
        ],
        address: [{ required: true, message: '请输入地址', trigger: 'blur' }]
      }
    }
  },
  methods: {
    chooseType: function(type) {
      // 如果是同一个选项，无需重复设置
      if (this.type === type) {
        return
      }
      this.type = type
      if (type === 3) {
        this.accountForm.industry = '行政事业机构'
      } else {
        this.accountForm.industry = ''
      }
      this.$refs.accountForm.clearValidate()
    },
    onSubmit(formName) {
      // this.$refs[formName].validate(valid => {
      //   if (valid) {
      //     alert('submit!')
      //   } else {
      //     console.log('error submit!!')
      //     return false
      //   }
      // })
      this.$router.push({
        path: '/usercenter/custom'
      })
    }
  }
}
</script>

<template>
  <div class="content">
    <div class="ucenter-warp wrap clearfix">
      <div class="uc-left-menu">
        <UcenterLeftMenu :active-menu="201"></UcenterLeftMenu>
      </div>
      <div class="uc-right-main">
        <div class="main-page-out">
          <div class="page-cate-name">发布项目信息</div>
          <div class="public-msg-tips">
            为了保证信息能顺利通过我们的审核，请将信息的真实情况尽可能全面的发布出来，<br />根据我们的长期跟踪统计，信息完整度越高，越容易获得目标客户的关注，并能大幅提升投融双方达成合作意向的成功率！
          </div>
          <el-form
            ref="publicForm"
            :rules="rules"
            :model="publicForm"
            label-width="130px"
            class="public-form"
          >
            <el-form-item label="标题：" prop="title">
              <el-input v-model="publicForm.title"></el-input>
            </el-form-item>
            <el-form-item label="所属行业：" prop="industry">
              <el-select
                v-model="publicForm.industry"
                placeholder="请选择"
                style="width: 180px;"
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
              <FormCitySelect @change="changeAddress"></FormCitySelect>
            </el-form-item>
            <el-form-item label="去年营业额：" prop="yingye">
              <el-input
                v-model="publicForm.yingye"
                style="width: 160px;"
              ></el-input
              ><el-select
                v-model="publicForm.yingyeUnit"
                placeholder="请选择"
                style="width: 80px;"
                class="danwei"
              >
                <el-option label="万元" value="万元"></el-option>
                <el-option label="十万元" value="十万元"></el-option>
                <el-option label="百万元" value="百万元"></el-option>
                <el-option label="千万元" value="千万元"></el-option>
              </el-select>
              <div class="el-form-item__tips">
                请如实填写，有助于您更快获得融资
              </div>
            </el-form-item>

            <el-form-item label="企业当前资产估价：" prop="assetValue">
              <el-input
                v-model="publicForm.assetValue"
                style="width: 160px;"
              ></el-input
              ><el-select
                v-model="publicForm.assetValueUnit"
                placeholder="请选择"
                style="width: 80px;"
                class="danwei"
              >
                <el-option label="万元" value="万元"></el-option>
                <el-option label="十万元" value="十万元"></el-option>
                <el-option label="百万元" value="百万元"></el-option>
                <el-option label="千万元" value="千万元"></el-option>
              </el-select>
              <div class="el-form-item__tips">
                请如实填写，有助于您更快获得融资
              </div>
            </el-form-item>

            <el-form-item label="融资用途：" prop="financeUse">
              <el-input v-model="publicForm.financeUse"></el-input>
            </el-form-item>

            <el-form-item label="融资金额：" prop="financeAmountMin">
              <el-input
                v-model="publicForm.financeAmountMin"
                style="width: 160px;"
              ></el-input
              ><el-select
                v-model="publicForm.financeAmountMinUnit"
                placeholder="请选择"
                style="width: 80px;"
                class="danwei"
              >
                <el-option label="万元" value="万元"></el-option>
                <el-option label="十万元" value="十万元"></el-option>
                <el-option label="百万元" value="百万元"></el-option>
                <el-option label="千万元" value="千万元"></el-option>
              </el-select>
              <span style="margin:0 15px;color:#666;">-</span>
              <el-input
                v-model="publicForm.financeAmountMax"
                style="width: 160px;"
              ></el-input
              ><el-select
                v-model="publicForm.financeAmountMaxUnit"
                placeholder="请选择"
                style="width: 80px;"
                class="danwei"
              >
                <el-option label="万元" value="万元"></el-option>
                <el-option label="十万元" value="十万元"></el-option>
                <el-option label="百万元" value="百万元"></el-option>
                <el-option label="千万元" value="千万元"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="总投金额：" prop="investAmount">
              <el-input
                v-model="publicForm.investAmount"
                style="width: 160px;"
              ></el-input
              ><el-select
                v-model="publicForm.investAmountUnit"
                placeholder="请选择"
                style="width: 80px;"
                class="danwei"
              >
                <el-option label="万元" value="万元"></el-option>
                <el-option label="十万元" value="十万元"></el-option>
                <el-option label="百万元" value="百万元"></el-option>
                <el-option label="千万元" value="千万元"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="意向资金：" prop="investTypes">
              <el-checkbox-group
                v-model="publicForm.investTypes"
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
            </el-form-item>

            <el-form-item label="融资方式：" prop="financingMethods">
              <el-checkbox-group
                v-model="publicForm.financingMethods"
                class="form-check-box"
              >
                <el-checkbox
                  v-for="(value, index) in financingMethods"
                  :key="index"
                  :label="value"
                  @change="onCheckChanged()"
                  >{{ value }}</el-checkbox
                >
              </el-checkbox-group>
            </el-form-item>

            <el-form-item label="提供资料：" prop="materials">
              <el-checkbox-group
                v-model="publicForm.materials"
                class="form-check-boxb"
              >
                <el-checkbox
                  v-for="(value, index) in materials"
                  :key="index"
                  :label="value"
                  @change="onCheckChanged()"
                  >{{ value }}</el-checkbox
                >
              </el-checkbox-group>
            </el-form-item>

            <el-form-item label="项目概述：" prop="projectDesc">
              <el-input
                v-model="publicForm.projectDesc"
                type="textarea"
                :rows="4"
              ></el-input>
            </el-form-item>

            <el-form-item label="其他备注：">
              <el-input
                v-model="publicForm.otherComment"
                type="textarea"
                :rows="4"
              ></el-input>
            </el-form-item>

            <el-form-item label="标签：">
              <el-input v-model="publicForm.tag"></el-input>
              <div class="el-form-item__tips">多个标签之间，用空格分开</div>
            </el-form-item>

            <el-form-item label="缩略图：">
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                :on-exceed="handleExceed"
                :file-list="fileList"
              >
                <el-button size="small" type="upload">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">
                  只能上传jpg/png文件，且不超过500kb
                </div>
              </el-upload>
            </el-form-item>

            <el-form-item label="附件：">
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview2"
                :on-remove="handleRemove2"
                :before-remove="beforeRemove2"
                :on-exceed="handleExceed2"
                :file-list="fileList2"
              >
                <el-button size="small" type="upload">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">
                  只能上传jpg/png文件，且不超过500kb
                </div>
              </el-upload>
            </el-form-item>

            <el-form-item style="margin-top: 80px;">
              <el-button
                class="item-btn submit-btn"
                type="primary"
                @click="onSubmit('publicForm')"
                >立即发布项目消息</el-button
              >
              <!--<el-button class="item-btn cancel-btn">保存暂时不发布</el-button>-->
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import '~/assets/css/ucenter-public-msg.less'
import UcenterLeftMenu from '~/components/UcenterLeftMenu'
import FormCitySelect from '~/components/FormCitySelect'
import {
  InvestTypes,
  Industries,
  Regions,
  FinancingMethods,
  Materials
} from '~/common/constant'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Publish',
  middleware: 'authenticated',
  components: {
    UcenterLeftMenu,
    FormCitySelect
  },
  data() {
    return {
      investTypes: InvestTypes,
      industries: Industries,
      regions: Regions,
      financingMethods: FinancingMethods,
      materials: Materials,
      publicForm: {
        title: '',
        type: '项目融资',
        yingyeUnit: '万元',
        assetValue: 0,
        assetValueUnit: '万元',
        financeAmountMin: 0,
        financeAmountMinUnit: '万元',
        financeAmountMax: 0,
        financeAmountMaxUnit: '万元',
        investAmount: 0,
        investAmountUnit: '万元',
        investTypes: [],
        financingMethods: [],
        materials: [],
        projectDesc: '',
        otherComment: '',
        tag: '',
        img: '',
        attachment: ''
      },
      rules: {
        title: [
          { required: true, message: '请输入标题', trigger: 'blur' },
          {
            min: 3,
            max: 5,
            message: '标题长度在 3 到 20 个字符',
            trigger: 'blur'
          }
        ],
        type: [{ required: true, message: '请选择分类', trigger: 'blur' }],
        industry: [
          { required: true, message: '请选择所属行业', trigger: 'change' }
        ],
        financeUse: [
          { required: true, message: '请输入资金用途', trigger: 'blur' }
        ],
        yingye: [
          { required: true, message: '请输入当前营业额', trigger: 'blur' }
        ],
        assetValue: [
          { required: true, message: '请输入资产估价', trigger: 'blur' }
        ],
        investAmount: [
          { required: true, message: '请输入总投资', trigger: 'blur' }
        ],
        financeAmountMin: [
          { required: true, message: '请输入融资金额', trigger: 'blur' }
        ],
        investTypes: [{ required: true, message: '请勾选意向资金' }],
        financingMethods: [{ required: true, message: '请勾选融资方式' }],
        materials: [{ required: true, message: '请勾选提交资料类型' }],
        projectDesc: [
          { required: true, message: '请输入项目概述', trigger: 'blur' }
        ]
      },
      fileList: [
        {
          name: 'food.jpeg',
          url:
            'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }
      ],
      fileList2: []
    }
  },
  computed: {
    ...mapState('user', ['user'])
  },
  methods: {
    ...mapActions('user', ['updateMemberInfo']),
    changeAddress(selectAddr) {
      this.selectAddr = selectAddr
    },
    onSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (!valid) {
          return false
        }
      })
      console.log('submit!')
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      )
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    },
    handleRemove2(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview2(file) {
      console.log(file)
    },
    handleExceed2(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      )
    },
    beforeRemove2(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    },
    // 多选框选中事件
    onCheckChanged() {
      // console.log(this.accountForm)
    }
  }
}
</script>

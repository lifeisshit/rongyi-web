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
            <el-form-item label="所在地区：" prop="region">
              <el-select
                v-model="publicForm.region"
                placeholder="请选择"
                style="width: 180px;"
              >
                <el-option
                  v-for="(region, index) in regions"
                  :key="index"
                  :label="region"
                  :value="region"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="去年营业额：" prop="lastYearTurnover">
              <el-input
                v-model="publicForm.lastYearTurnover"
                style="width: 160px;"
                placeholder="0"
                type="number"
              ></el-input
              ><el-select
                v-model="publicForm.lastYearTurnoverUnit"
                placeholder="请选择"
                style="width: 80px;"
                class="danwei"
              >
                <el-option label="万元" value="万元"></el-option>
                <el-option label="亿元" value="亿元"></el-option>
              </el-select>
              <div class="el-form-item__tips">
                请如实填写，有助于您更快获得融资
              </div>
            </el-form-item>

            <el-form-item label="企业当前资产估价：" prop="assetValue">
              <el-input
                v-model="publicForm.assetValue"
                style="width: 160px;"
                placeholder="0"
                type="number"
              ></el-input
              ><el-select
                v-model="publicForm.assetValueUnit"
                placeholder="请选择"
                style="width: 80px;"
                class="danwei"
              >
                <el-option label="万元" value="万元"></el-option>
                <el-option label="亿元" value="亿元"></el-option>
              </el-select>
              <div class="el-form-item__tips">
                请如实填写，有助于您更快获得融资
              </div>
            </el-form-item>

            <el-form-item label="融资用途：" prop="financeUse">
              <el-input v-model="publicForm.financeUse"></el-input>
            </el-form-item>

            <el-form-item label="融资金额：" prop="financeAmount">
              <el-select
                v-model="publicForm.financeAmount"
                placeholder="请选择"
                style="width: 180px;"
              >
                <el-option
                  v-for="(amount, index) in amounts"
                  :key="index"
                  :label="amount"
                  :value="amount"
                ></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="总投金额：" prop="investAmount">
              <el-input
                v-model="publicForm.investAmount"
                style="width: 160px;"
                placeholder="0"
                type="number"
              ></el-input
              ><el-select
                v-model="publicForm.investAmountUnit"
                placeholder="请选择"
                style="width: 80px;"
                class="danwei"
              >
                <el-option label="万元" value="万元"></el-option>
                <el-option label="亿元" value="亿元"></el-option>
              </el-select>
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
                ref="coverImg"
                accept=".jpg, .png"
                class="upload-demo"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                :on-exceed="handleExceed"
                list-type="picture"
                :action="ossHost"
                :data="ossFormData"
                :limit="1"
                :show-file-list="true"
                :before-upload="beforeCoverImgUpload"
              >
                <el-button size="small" type="upload">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">
                  只能上传jpg/png文件，且不超过1M
                </div>
              </el-upload>
            </el-form-item>

            <el-form-item label="附件：">
              <el-upload
                class="upload-demo"
                :on-remove="handleRemove2"
                :before-remove="beforeRemove"
                :on-exceed="handleExceed"
                :action="ossHost"
                :data="ossFormData"
                :limit="1"
                :show-file-list="true"
                :before-upload="beforeAttachmentUpload"
              >
                <el-button size="small" type="upload">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">
                  请尽量压缩文件上传，且不超过5M
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
import API from '~/common/api'
import UcenterLeftMenu from '~/components/UcenterLeftMenu'
import {
  Amounts,
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
    UcenterLeftMenu
  },
  data() {
    return {
      industries: Industries,
      regions: Regions,
      financingMethods: FinancingMethods,
      materials: Materials,
      amounts: Amounts,
      publicForm: {
        title: '',
        region: '',
        type: '项目融资',
        industry: '',
        lastYearTurnover: '',
        lastYearTurnoverUnit: '万元',
        assetValue: '',
        assetValueUnit: '万元',
        financeAmount: '',
        investAmount: '',
        investAmountUnit: '万元',
        financingMethods: [],
        materials: [],
        projectDesc: '',
        otherComment: '',
        tag: '',
        img: '',
        attachment: '',
        financeUse: ''
      },
      rules: {
        title: [
          { required: true, message: '请输入标题', trigger: 'blur' },
          {
            min: 3,
            max: 50,
            message: '标题长度在 3 到 50 个字符',
            trigger: 'blur'
          }
        ],
        industry: [
          { required: true, message: '请选择所属行业', trigger: 'change' }
        ],
        region: [
          { required: true, message: '请选择所在地区', trigger: 'change' }
        ],
        financeUse: [
          { required: true, message: '请输入资金用途', trigger: 'blur' }
        ],
        lastYearTurnover: [
          {
            required: true,
            message: '请输入去年营业额',
            trigger: 'blur'
          }
        ],
        assetValue: [
          { required: true, message: '请输入资产估价', trigger: 'blur' }
        ],
        investAmount: [
          { required: true, message: '请输入总投资', trigger: 'blur' }
        ],
        financeAmount: [
          { required: true, message: '请选择融资金额', trigger: 'change' }
        ],
        financingMethods: [{ required: true, message: '请勾选融资方式' }],
        materials: [{ required: true, message: '请勾选提交资料类型' }],
        projectDesc: [
          { required: true, message: '请输入项目概述', trigger: 'blur' }
        ]
      },
      // oss data
      accessId: '',
      policy: '',
      signature: '',
      ossDir: '',
      ossHost: '',
      ossFormData: {}
    }
  },
  computed: {
    ...mapState('user', ['user'])
  },
  mounted() {
    this.getAliyunOssSign()
  },
  methods: {
    ...mapActions('user', ['updateMemberInfo']),
    onSubmit(formName) {
      this.$refs[formName].validate(async valid => {
        if (!valid) {
          return false
        }
        const params = {}
        params.userId = this.user.id
        params.personName = this.user.name
        params.title = this.publicForm.title
        params.region = this.publicForm.region
        params.tag = this.publicForm.tag
        params.img = this.publicForm.img
        params.attachment = this.publicForm.attachment
        params.otherComment = this.publicForm.otherComment
        params.projectDesc = this.publicForm.projectDesc
        params.type = this.publicForm.type
        params.financeUse = this.publicForm.financeUse
        params.industry = this.publicForm.industry

        // 去年营业额
        params.lastYearTurnover =
          this.publicForm.lastYearTurnover +
          this.publicForm.lastYearTurnoverUnit
        // 当前资产估价
        params.assetValue =
          this.publicForm.assetValue + this.publicForm.assetValueUnit
        // 总投金额
        params.investAmount =
          this.publicForm.investAmount + this.publicForm.investAmountUnit
        // 融资金额
        params.financeAmount = this.publicForm.financeAmount
        // 提供资料
        params.material = this.publicForm.materials.join(',')
        params.financeWay = this.publicForm.financingMethods.join(',')
        // 提交
        await this.$axios.$post(API.projectPublish, params)
        this.$message.success({
          showClose: true,
          message: '发布成功',
          type: 'success'
        })
        this.$router.push({
          path: '/usercenter/publish/list'
        })
      })
    },
    getAliyunOssSign() {
      // 获取oss认证
      this.$axios.get(API.getSign).then(result => {
        if (!result || !result.data) {
          this.$message.error('图片服务器连接异常！')
          return
        }
        this.accessId = result.data.accessid
        this.policy = result.data.policy
        this.signature = result.data.signature
        this.ossDir = result.data.dir
        this.ossHost = result.data.host
      })
    },
    // 上传缩略图
    beforeCoverImgUpload(file) {
      const isJPG = file.type === 'image/jpeg' || file.type === 'image/png'
      const isLt5M = file.size / 1024 / 1024 < 1
      if (!isJPG) {
        this.$message.error('上传图片只能是 JPG 或者 PNG 格式!')
        return false
      }
      if (!isLt5M) {
        this.$message.error('上传图片大小不能超过 1MB!')
        return false
      }

      const newImgName =
        'ci_' + Date.now() + Math.floor(Math.random() * 10000) + '_' + file.name

      this.publicForm.img = this.getPictureFullPath(newImgName, true)

      this.ossFormData.OSSAccessKeyId = this.accessId
      this.ossFormData.policy = this.policy
      this.ossFormData.Signature = this.signature
      this.ossFormData.key = this.getPictureFullPath(newImgName, false)
      // console.log(this.publicForm.img)
    },
    // 上传附加文件
    beforeAttachmentUpload(file) {
      const isLt5M = file.size / 1024 / 1024 < 5
      if (!isLt5M) {
        this.$message.error('上传图片大小不能超过 5MB!')
        return false
      }

      const newFileName =
        'atm_' +
        Date.now() +
        Math.floor(Math.random() * 10000) +
        '_' +
        file.name

      this.publicForm.attachment = this.getPictureFullPath(newFileName, true)

      this.ossFormData.OSSAccessKeyId = this.accessId
      this.ossFormData.policy = this.policy
      this.ossFormData.Signature = this.signature
      this.ossFormData.key = this.getPictureFullPath(newFileName, false)
      console.log(this.publicForm.attachment)
    },
    // 获取图片完整路径
    getPictureFullPath(fileName, isHasHost) {
      if (!fileName) {
        return fileName
      }
      if (
        fileName.toLowerCase().startsWith('http://') ||
        fileName.toLowerCase().startsWith('https://')
      ) {
        return fileName
      }
      const host = isHasHost ? this.ossHost + '/' : ''

      return host + this.ossDir + 'project/' + fileName
    },
    // 删除原始文件
    async removeOriginFile(fileName) {
      await this.$axios
        .get(API.deleteObject, {
          params: {
            bucketName: 'rongy',
            dir: this.ossDir + 'project',
            fileName: this.getFileNameFromFullPath(fileName)
          }
        })
        .then(res => {
          if (res.status !== 0) {
            this.$message.error(res.msg)
          }
        })
        .catch(() => {
          this.$message.error('删除失败')
        })
    },
    // 获取图片名
    getFileNameFromFullPath(fullPath) {
      if (!fullPath) {
        return fullPath
      }
      return fullPath.substring(fullPath.lastIndexOf('/') + 1)
    },
    beforeRemove(file) {
      return this.$confirm(`确定移除 ${file.name}？`)
    },
    async handleRemove(file, fileList) {
      await this.removeOriginFile(this.publicForm.img)
      this.publicForm.img = ''
    },
    async handleRemove2(file, fileList) {
      await this.removeOriginFile(this.publicForm.attachment)
      this.publicForm.attachment = ''
    },
    handleExceed(files, fileList) {
      this.$message.warning('最多只能上传一个文件')
    },
    // 多选框选中事件
    onCheckChanged() {
      // console.log(this.accountForm)
    }
  }
}
</script>

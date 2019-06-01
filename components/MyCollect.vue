<template>
  <div class="my-collect">
    <el-form
      ref="searchForm"
      :model="searchForm"
      label-width="65px"
      class="search-form clearfix"
    >
      <el-form-item label="信息类型：" prop="infotype">
        <el-select v-model="searchForm.infotype" placeholder="请选择">
          <el-option label="信息类型" value=""></el-option>
          <el-option label="信息类型2" value=""></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="收藏日期：" prop="collectdate">
        <el-select v-model="searchForm.collectdate" placeholder="请选择">
          <el-option label="所有周期" value=""></el-option>
          <el-option label="2019-4-18" value=""></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button
          class="item-btn submit-btn"
          type="primary"
          style="margin-left: -65px;"
          >搜索</el-button
        >
      </el-form-item>
    </el-form>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      class="collect-table"
    >
      <el-table-column type="selection" width="35"></el-table-column>
      <el-table-column label="标题内容">
        <template slot-scope="scope">
          <i class="el-icon-dot"></i>
          <span class="title-txt">{{ scope.row.title }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="publisher"
        label="发布者"
        width="105"
      ></el-table-column>
      <el-table-column
        prop="infotype"
        label="信息类型"
        width="130"
      ></el-table-column>
      <el-table-column label="收藏日期" width="135">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column label="操作" width="160">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >投递项目</el-button
          >
          <el-button size="mini" @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <div class="collect-pagination">
      <el-button size="mini">删除</el-button>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyCollect',
  props: {},
  data() {
    return {
      searchForm: {},
      tableData: [
        {
          title: '陕西某个人资金方寻优质项目投资8000万元',
          publisher: '周倩雯',
          infotype: '资金信息',
          date: '2016-05-03'
        },
        {
          title: '浙江省某个人资金寻优质项目100万-1亿元',
          publisher: '王毅',
          infotype: '项目信息',
          date: '2016-05-02'
        },
        {
          title: '上海某投资公司寻找全国优质项目500万-2亿元 ',
          publisher: '噶佳品',
          infotype: '项目信息',
          date: '2016-05-04'
        },
        {
          title: '浙江某投资公司寻全国各地优质项目200万~1000万元',
          publisher: '金巧巧',
          infotype: '项目信息',
          date: '2016-05-01'
        },
        {
          title: '北京市某投资有限公司寻找全国优质项目合作20亿元',
          publisher: '袁泽',
          infotype: '项目信息',
          date: '2016-05-08'
        }
      ]
    }
  },
  mounted() {},
  methods: {
    handleDelete: function(a, b) {
      console.log(a)
      console.log(b)
    }
  }
}
</script>

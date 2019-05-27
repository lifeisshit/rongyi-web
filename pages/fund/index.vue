<template>
  <div class="fund-list-page">
    <div class="wrap">
      <div class="filter-box">
        <div class="filter-box-item">
          <label>投资方式：</label>
          <ul class="items">
            <li>
              <a :class="{ active: tzType == 1 }" @click="change_tzType(1)"
                >股权投资</a
              >
            </li>
            <li>
              <a :class="{ active: tzType == 2 }" @click="change_tzType(2)"
                >债权投资</a
              >
            </li>
            <li>
              <a :class="{ active: tzType == 3 }" @click="change_tzType(3)"
                >其他投资</a
              >
            </li>
          </ul>
        </div>
        <div class="filter-box-item">
          <label>资金类型：</label>
          <ul class="items">
            <li>
              <a :class="{ active: zjType == 1 }" @click="change_zjType(1)"
                >个人资金</a
              >
            </li>
            <li>
              <a :class="{ active: zjType == 2 }" @click="change_zjType(2)"
                >企业资金</a
              >
            </li>
            <li>
              <a :class="{ active: zjType == 3 }" @click="change_zjType(3)"
                >天使资金</a
              >
            </li>
            <li>
              <a :class="{ active: zjType == 4 }" @click="change_zjType(4)"
                >VC投资</a
              >
            </li>
          </ul>
          <div class="options">
            <span><i class="el-icon-plus"></i>多选</span>
            <span>更多<i class="el-icon-arrow-down"></i></span>
          </div>
        </div>
        <div class="filter-box-item">
          <label>所在地区：</label>
          <ul class="items">
            <li>
              <a :class="{ active: szCity == 1 }" @click="change_szCity(1)"
                >浙江省</a
              >
            </li>
            <li>
              <a :class="{ active: szCity == 2 }" @click="change_szCity(2)"
                >北京</a
              >
            </li>
            <li>
              <a :class="{ active: szCity == 3 }" @click="change_szCity(3)"
                >重庆</a
              >
            </li>
            <li>
              <a :class="{ active: szCity == 4 }" @click="change_szCity(4)"
                >福建省</a
              >
            </li>
            <li>
              <a :class="{ active: szCity == 5 }" @click="change_szCity(5)"
                >甘肃省</a
              >
            </li>
            <li>
              <a :class="{ active: szCity == 6 }" @click="change_szCity(6)"
                >广东省</a
              >
            </li>
            <li>
              <a :class="{ active: szCity == 7 }" @click="change_szCity(7)"
                >广西省</a
              >
            </li>
          </ul>
          <div class="options">
            <span>更多<i class="el-icon-arrow-down"></i></span>
          </div>
        </div>
        <div class="filter-box-item">
          <label>投资行业：</label>
          <ul class="items">
            <li>
              <a :class="{ active: tzHangye == 1 }" @click="change_tzHangye(1)"
                >房地产</a
              >
            </li>
            <li>
              <a :class="{ active: tzHangye == 2 }" @click="change_tzHangye(2)"
                >矿产冶金</a
              >
            </li>
            <li>
              <a :class="{ active: tzHangye == 3 }" @click="change_tzHangye(3)"
                >金融投资</a
              >
            </li>
            <li>
              <a :class="{ active: tzHangye == 4 }" @click="change_tzHangye(4)"
                >农林牧渔</a
              >
            </li>
            <li>
              <a :class="{ active: tzHangye == 5 }" @click="change_tzHangye(5)"
                >能源</a
              >
            </li>
            <li>
              <a :class="{ active: tzHangye == 6 }" @click="change_tzHangye(6)"
                >建筑建材</a
              >
            </li>
            <li>
              <a :class="{ active: tzHangye == 7 }" @click="change_tzHangye(7)"
                >旅游酒店</a
              >
            </li>
          </ul>
          <div class="options">
            <span><i class="el-icon-plus"></i>多选</span>
            <span>更多<i class="el-icon-arrow-down"></i></span>
          </div>
        </div>
        <div class="filter-box-item">
          <label>投资地区：</label>
          <ul class="items">
            <li>
              <a :class="{ active: tzCity == 1 }" @click="change_tzCity(1)"
                >浙江省</a
              >
            </li>
            <li>
              <a :class="{ active: tzCity == 2 }" @click="change_tzCity(2)"
                >北京</a
              >
            </li>
            <li>
              <a :class="{ active: tzCity == 3 }" @click="change_tzCity(3)"
                >重庆</a
              >
            </li>
            <li>
              <a :class="{ active: tzCity == 4 }" @click="change_tzCity(4)"
                >福建省</a
              >
            </li>
            <li>
              <a :class="{ active: tzCity == 5 }" @click="change_tzCity(5)"
                >甘肃省</a
              >
            </li>
            <li>
              <a :class="{ active: tzCity == 6 }" @click="change_tzCity(6)"
                >广东省</a
              >
            </li>
            <li>
              <a :class="{ active: tzCity == 7 }" @click="change_tzCity(7)"
                >广西省</a
              >
            </li>
          </ul>
          <div class="options">
            <span>更多<i class="el-icon-arrow-down"></i></span>
          </div>
        </div>
        <div class="filter-box-item">
          <label>投资金额：</label>
          <ul class="items">
            <li>
              <a :class="{ active: tzMoney == 0 }" @click="change_tzMoney(0)"
                >不限</a
              >
            </li>
            <li>
              <a :class="{ active: tzMoney == 1 }" @click="change_tzMoney(1)"
                >1万-50万</a
              >
            </li>
            <li>
              <a :class="{ active: tzMoney == 2 }" @click="change_tzMoney(2)"
                >50万-100万</a
              >
            </li>
            <li>
              <a :class="{ active: tzMoney == 3 }" @click="change_tzMoney(3)"
                >100万-500万</a
              >
            </li>
            <li>
              <a :class="{ active: tzMoney == 4 }" @click="change_tzMoney(4)"
                >500万-1000万</a
              >
            </li>
            <li>
              <a :class="{ active: tzMoney == 5 }" @click="change_tzMoney(5)"
                >1000万-5000万</a
              >
            </li>
            <li>
              <a :class="{ active: tzMoney == 6 }" @click="change_tzMoney(6)"
                >5000万-1亿</a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="business-list clearfix">
        <div class="items-list">
          <div class="filter-condition clearfix">
            <div class="order-cur">
              排序：<span class="order-state-text">{{ orderby_text }}</span>
            </div>
            <div class="order-type" @click="changeorderby('time')">
              更新时间<i
                :class="[
                  orderby == 'time' ? 'el-icon-arrow-up' : 'el-icon-arrow-down'
                ]"
              ></i>
            </div>
            <div class="order-type" @click="changeorderby('money')">
              金额排序<i
                :class="[
                  orderby == 'money' ? 'el-icon-arrow-up' : 'el-icon-arrow-down'
                ]"
              ></i>
            </div>
            <div class="soform">
              <el-form ref="form" :model="soform" label-width="80px">
                <el-input
                  v-model="soform.keyword"
                  placeholder="输入搜索关键词"
                  class="soKey"
                ></el-input>
                <span class="el-icon-search soBtn" @click="onSubmit"></span>
              </el-form>
            </div>
            <div class="so-count">查询结果共<span>19502</span>个项目</div>
          </div>
          <div class="items-out-box">
            <div class="item-data-list">
              <div class="items-infos clearfix">
                <div class="items-infos-row">
                  <div class="i-title">
                    <a href=""
                      >上海某投资公司寻找优质项目300万-2000万元投资公司寻找优质项资公司寻找优目</a
                    >
                  </div>
                  <div class="i-time">2019-05-08发布</div>
                  <ul class="attribute">
                    <li>所在地区：上海</li>
                    <li>所属行业：节能环保</li>
                    <li>融资方式：股权融资</li>
                    <li>融资用途：找厂房、生产及业务等等</li>
                  </ul>
                </div>
                <div class="item-price">
                  <p>100万-1亿</p>
                  <a href="">约谈项目</a>
                </div>
              </div>
              <div class="items-infos clearfix">
                <div class="items-infos-row">
                  <div class="i-title">
                    <a href="">上海某投资公司寻找优质项目300万-2000万元</a>
                  </div>
                  <div class="i-time">2019-05-08发布</div>
                  <ul class="attribute">
                    <li>所在地区：上海</li>
                    <li>所属行业：节能环保</li>
                    <li>融资方式：股权融资</li>
                    <li>融资用途：找厂房、生产及业务等等</li>
                  </ul>
                </div>
                <div class="item-price">
                  <p>100万-1亿</p>
                  <a href="">约谈项目</a>
                </div>
              </div>
              <div class="items-infos clearfix">
                <div class="items-infos-row">
                  <div class="i-title">
                    <a href="">上海某投资公司寻找优质项目300万-2000万元</a>
                  </div>
                  <div class="i-time">2019-05-08发布</div>
                  <ul class="attribute">
                    <li>所在地区：上海</li>
                    <li>所属行业：节能环保</li>
                    <li>融资方式：股权融资</li>
                    <li>融资用途：找厂房、生产及业务等等</li>
                  </ul>
                </div>
                <div class="item-price">
                  <p>100万-1亿</p>
                  <a href="">约谈项目</a>
                </div>
              </div>
              <div class="items-infos clearfix">
                <div class="items-infos-row">
                  <div class="i-title">
                    <a href="">上海某投资公司寻找优质项目300万-2000万元</a>
                  </div>
                  <div class="i-time">2019-05-08发布</div>
                  <ul class="attribute">
                    <li>所在地区：上海</li>
                    <li>所属行业：节能环保</li>
                    <li>融资方式：股权融资</li>
                    <li>融资用途：找厂房、生产及业务等等</li>
                  </ul>
                </div>
                <div class="item-price">
                  <p>100万-1亿</p>
                  <a href="">约谈项目</a>
                </div>
              </div>
              <div class="items-infos clearfix">
                <div class="items-infos-row">
                  <div class="i-title">
                    <a href="">上海某投资公司寻找优质项目300万-2000万元</a>
                  </div>
                  <div class="i-time">2019-05-08发布</div>
                  <ul class="attribute">
                    <li>所在地区：上海</li>
                    <li>所属行业：节能环保</li>
                    <li>融资方式：股权融资</li>
                    <li>融资用途：找厂房、生产及业务等等</li>
                  </ul>
                </div>
                <div class="item-price">
                  <p>100万-1亿</p>
                  <a href="">约谈项目</a>
                </div>
              </div>
              <div class="items-infos clearfix">
                <div class="items-infos-row">
                  <div class="i-title">
                    <a href="">上海某投资公司寻找优质项目300万-2000万元</a>
                  </div>
                  <div class="i-time">2019-05-08发布</div>
                  <ul class="attribute">
                    <li>所在地区：上海</li>
                    <li>所属行业：节能环保</li>
                    <li>融资方式：股权融资</li>
                    <li>融资用途：找厂房、生产及业务等等</li>
                  </ul>
                </div>
                <div class="item-price">
                  <p>100万-1亿</p>
                  <a href="">约谈项目</a>
                </div>
              </div>
              <div class="items-infos clearfix">
                <div class="items-infos-row">
                  <div class="i-title">
                    <a href="">上海某投资公司寻找优质项目300万-2000万元</a>
                  </div>
                  <div class="i-time">2019-05-08发布</div>
                  <ul class="attribute">
                    <li>所在地区：上海</li>
                    <li>所属行业：节能环保</li>
                    <li>融资方式：股权融资</li>
                    <li>融资用途：找厂房、生产及业务等等</li>
                  </ul>
                </div>
                <div class="item-price">
                  <p>100万-1亿</p>
                  <a href="">约谈项目</a>
                </div>
              </div>
              <div class="items-infos clearfix">
                <div class="items-infos-row">
                  <div class="i-title">
                    <a href="">上海某投资公司寻找优质项目300万-2000万元</a>
                  </div>
                  <div class="i-time">2019-05-08发布</div>
                  <ul class="attribute">
                    <li>所在地区：上海</li>
                    <li>所属行业：节能环保</li>
                    <li>融资方式：股权融资</li>
                    <li>融资用途：找厂房、生产及业务等等</li>
                  </ul>
                </div>
                <div class="item-price">
                  <p>100万-1亿</p>
                  <a href="">约谈项目</a>
                </div>
              </div>
              <div class="items-infos clearfix">
                <div class="items-infos-row">
                  <div class="i-title">
                    <a href="">上海某投资公司寻找优质项目300万-2000万元</a>
                  </div>
                  <div class="i-time">2019-05-08发布</div>
                  <ul class="attribute">
                    <li>所在地区：上海</li>
                    <li>所属行业：节能环保</li>
                    <li>融资方式：股权融资</li>
                    <li>融资用途：找厂房、生产及业务等等</li>
                  </ul>
                </div>
                <div class="item-price">
                  <p>100万-1亿</p>
                  <a href="">约谈项目</a>
                </div>
              </div>
              <div class="items-infos clearfix">
                <div class="items-infos-row">
                  <div class="i-title">
                    <a href="">上海某投资公司寻找优质项目300万-2000万元</a>
                  </div>
                  <div class="i-time">2019-05-08发布</div>
                  <ul class="attribute">
                    <li>所在地区：上海</li>
                    <li>所属行业：节能环保</li>
                    <li>融资方式：股权融资</li>
                    <li>融资用途：找厂房、生产及业务等等</li>
                  </ul>
                </div>
                <div class="item-price">
                  <p>100万-1亿</p>
                  <a href="">约谈项目</a>
                </div>
              </div>
            </div>
            <div class="item-pager">
              <el-pagination
                background
                layout="prev, pager, next"
                prev-text="上一页"
                next-text="下一页"
                :total="1000"
              >
              </el-pagination>
            </div>
          </div>
        </div>
        <div class="hot-items">
          <div class="tips">优质信息推荐</div>
          <div class="hot-items-row">
            <a class="rows">
              <div class="item-img">
                <img
                  alt="资金方"
                  src="https://inews.gtimg.com/newsapp_bt/0/9105900977/1000"
                />
              </div>
              <div class="item-title">
                江苏省南京某探索类儿童乐园项目股权融资20万-100万元
              </div>
            </a>
            <a class="rows">
              <div class="item-img">
                <img
                  alt="资金方"
                  src="https://inews.gtimg.com/newsapp_bt/0/9105900977/1000"
                />
              </div>
              <div class="item-title">
                江苏省南京某探索类儿童乐园项目股权融资20万-100万元
              </div>
            </a>
            <a class="rows">
              <div class="item-img">
                <img
                  alt="资金方"
                  src="https://inews.gtimg.com/newsapp_bt/0/9105900977/1000"
                />
              </div>
              <div class="item-title">
                江苏省南京某探索类儿童乐园项目股权融资20万-100万元
              </div>
            </a>
            <a class="rows">
              <div class="item-img">
                <img
                  alt="资金方"
                  src="https://inews.gtimg.com/newsapp_bt/0/9105900977/1000"
                />
              </div>
              <div class="item-title">
                江苏省南京某探索类儿童乐园项目股权融资20万-100万元
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import '~/assets/css/fund-list.less'
export default {
  name: 'Fund',
  components: {},
  data() {
    return {
      orderby: '',
      orderby_text: '默认',
      soform: {
        keyword: ''
      },
      tzType: 2,
      zjType: 3,
      szCity: 5,
      tzHangye: 1,
      tzCity: 1,
      tzMoney: 0
    }
  },
  methods: {
    onSubmit() {
      const keyword = this.soform.keyword
      if (!keyword) {
        this.$message({
          message: '请输入搜索关键词',
          type: 'warning',
          center: true
        })
        return false
      }
      console.log('submit!')
    },
    changeorderby: function(orderby) {
      this.orderby = orderby
      switch (orderby) {
        case 'time':
          this.orderby_text = '更新时间'
          break
        case 'money':
          this.orderby_text = '投资金额'
          break
        default:
          this.orderby_text = '默认'
          break
      }
    },
    change_tzType: function(value) {
      this.tzType = value
    },
    change_zjType: function(value) {
      this.zjType = value
    },
    change_szCity: function(value) {
      this.szCity = value
    },
    change_tzHangye: function(value) {
      this.tzHangye = value
    },
    change_tzCity: function(value) {
      this.tzCity = value
    },
    change_tzMoney: function(value) {
      this.tzMoney = value
    }
  }
}
</script>

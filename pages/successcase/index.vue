<template>
  <div class="case-page">
    <div class="wrap">
      <div v-if="totalRow > 0" class="main-page-out">
        <div class="case-item-list">
          <div
            v-for="successCase in successCaseList"
            :key="successCase.id"
            class="case-item clearfix"
          >
            <div class="case-img">
              <a href="">
                <!--<span class="ellipsis">武汉市</span>-->
                <img
                  alt="融资成功案例"
                  :src="successCase.img || require('~/assets/img/no-img.png')"
              /></a>
            </div>
            <div class="case-infos">
              <div class="case-title ellipsis">
                <nuxt-link :to="`/successcase/${successCase.id}`">{{
                  successCase.title
                }}</nuxt-link>
              </div>
              <div class="case-desc">
                {{ successCase.info }}
              </div>
              <div class="case-pram">
                <ul class="clearfix">
                  <li>
                    <i></i><label>资金需求：</label
                    ><span>{{ successCase.fundRequire }}</span>
                  </li>
                  <li>
                    <i></i><label>成功融资：</label
                    ><span class="money">{{ successCase.successAmount }}</span>
                  </li>
                  <li>
                    <i></i><label>项目入驻时间：</label
                    ><span>{{ successCase.enterTime }}</span>
                  </li>
                  <li>
                    <i></i><label>成功融资时间：</label
                    ><span>{{ successCase.successTime }}</span>
                  </li>
                </ul>
              </div>
              <!--<a href="" class="item-apply">约谈项目</a>-->
            </div>
          </div>
        </div>
        <div class="case-item-pager">
          <el-pagination
            background
            layout="prev, pager, next"
            prev-text="上一页"
            next-text="下一页"
            :total="totalRow"
            :page-size="pageSize"
            :current-page="currentPage"
            @current-change="handleCurrentChange"
          ></el-pagination>
        </div>
      </div>
      <div v-if="totalRow <= 0" class="main-page-out">
        <p class="no-data">暂无数据</p>
      </div>
    </div>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import '~/assets/css/case.less'
import { mapState, mapActions } from 'vuex'
import BottomBar from '~/components/BottomBar.vue'

export default {
  name: 'SuccessCase',
  components: { BottomBar },
  head() {
    return {
      title: '武汉靠谱的天使投资人_投资项目缺乏资金融资_投资项目著名案例合作',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            '找靠谱的天使投资人，投资项目著名案例资金介绍，投资项目著名案例融资，投资项目著名案例合作,就上武汉融易网!这里拥有海量的投资融资资金合作信息,是专业的融资服务平台。'
        },
        {
          hid: 'Keywords',
          name: 'Keywords',
          content: '靠谱的天使投资人,投资项目缺乏资金融资,投资项目著名案例合作'
        }
      ]
    }
  },
  data() {
    return {
      currentPage: 1
    }
  },
  computed: {
    ...mapState('successcase', ['pageSize', 'totalRow', 'successCaseList'])
  },
  async fetch({ store }) {
    await Promise.all([
      store.dispatch('successcase/getPageList', { pageNum: 1 })
    ]).catch(() => {})
  },
  methods: {
    ...mapActions('successcase', ['getPageList']),
    handleCurrentChange(page) {
      this.getPageList({ pageNum: page || 1 })
      this.currentPage = page || 1
    }
  }
}
</script>

<template>
  <div class="news">
    <div class="wrap">
      <div v-if="slideNewsList.length > 0" class="news-slide">
        <div v-swiper:successCaseSwiper="successCaseSwiperOption">
          <div class="swiper-wrapper">
            <div
              v-for="slide in slideNewsList"
              :key="slide.id"
              class="swiper-slide sc-swiper-slide"
            >
              <nuxt-link :to="`/news/${slide.id}`" class="link-img">
                <img
                  :src="slide.img || require('~/assets/img/no-img.png')"
                  :alt="slide.title"
                />
              </nuxt-link>
              <p class="slide-title">{{ slide.title }}</p>
            </div>
          </div>
          <div class="swiper-button-prev">
            <i class="el-icon-arrow-left"></i>
          </div>
          <div class="swiper-button-next">
            <i class="el-icon-arrow-right"></i>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <div class="news-list">
        <div v-if="totalRow > 0" class="main-page-out">
          <div class="case-item-list">
            <div
              v-for="news in newsList"
              :key="news.id"
              class="case-item clearfix"
            >
              <div class="case-img">
                <a href="">
                  <!--<span class="ellipsis">武汉市</span>-->
                  <img
                    v-lazy="news.img || require('~/assets/img/no-img.png')"
                    alt="融资新闻"
                /></a>
              </div>
              <div class="case-infos">
                <div class="case-title ellipsis">
                  <nuxt-link :to="`/news/${news.id}`">{{
                    news.title
                  }}</nuxt-link>
                </div>
                <div class="case-desc" v-html="news.content"></div>
                <div class="case-pram">
                  <ul class="clearfix">
                    <li>
                      <i class="el-icon-time"></i
                      ><span>{{ news.gmtCreate }}</span>
                    </li>
                    <li>
                      <i class="el-icon-view"></i
                      ><span class="money">{{ random3Num() }}</span>
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
    </div>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import '~/assets/css/news.less'
import { mapActions, mapState } from 'vuex'
import { random3Num } from '~/common/util'
import BottomBar from '~/components/BottomBar.vue'

export default {
  name: 'News',
  components: { BottomBar },
  head() {
    return {
      title: '武汉专业的项目融资公司_投资项目缺乏资金融资_可信赖投资平台',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            '武汉融易网信息服务有限公司为你提供个人投资项目相关新闻动态，如果你想要了解个人投资项目找项目，个人投资项目缺乏资金，就上武汉融易网！这里拥有海量的投资融资项目合作信息,是专业的融资服务平台。'
        },
        {
          hid: 'Keywords',
          name: 'Keywords',
          content:
            '武汉专业的项目融资公司,投资项目缺乏资金融资,可信赖投资平台,武汉融易网信息服务有限公司'
        }
      ]
    }
  },
  data() {
    return {
      currentPage: 1,
      successCaseSwiperOption: {
        autoplay: {
          disableOnInteraction: false
        },
        loop: true,
        lazy: {
          loadPrevNext: true,
          loadPrevNextAmount: 3
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  computed: {
    ...mapState('news', ['pageSize', 'totalRow', 'newsList', 'slideNewsList'])
  },
  async fetch({ store }) {
    await Promise.all([
      store.dispatch('news/getPageList', { pageNum: 1, type: 0 }),
      store.dispatch('news/getPageList', { pageNum: 1, type: 1 })
    ]).catch(() => {})
  },
  methods: {
    ...mapActions('news', ['getPageList']),
    random3Num: random3Num,
    handleCurrentChange(page) {
      this.getPageList({ pageNum: page || 1, type: 0 })
      this.currentPage = page || 1
    }
  }
}
</script>

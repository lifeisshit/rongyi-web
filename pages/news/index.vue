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
                  alt="融资新闻"
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
                    alt="融资新闻"
                    :src="news.img || require('~/assets/img/no-img.png')"
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
  </div>
</template>

<script>
import '~/assets/css/news.less'
import { mapActions, mapState } from 'vuex'
import { random3Num } from '~/common/util'

export default {
  name: 'News',
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
      store.dispatch('news/getPageList', { pageNum: 1 }),
      store.dispatch('news/getPageList', { pageNum: 1, hot: 1 })
    ]).catch(() => {})
  },
  methods: {
    ...mapActions('news', ['getPageList']),
    random3Num: random3Num,
    handleCurrentChange(page) {
      this.getPageList(page)
    }
  }
}
</script>

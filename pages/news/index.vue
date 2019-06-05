<template>
  <div class="news">
    <div class="wrap">
      <div class="news-slide">
        <div v-swiper:successCaseSwiper="successCaseSwiperOption">
          <div class="swiper-wrapper">
            <div
              v-for="slide in successCaseList"
              :key="slide.id"
              class="swiper-slide sc-swiper-slide"
            >
              <nuxt-link :to="`/successcase/${slide.id}`" class="link-img">
                <img
                  :src="slide.img || require('~/assets/img/no-img.png')"
                  alt="成功案例"
                />
              </nuxt-link>
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
                      ><span class="money">{{
                        successCase.successAmount
                      }}</span>
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
    </div>
  </div>
</template>

<script>
import '~/assets/css/news.less'
import { mapActions, mapState } from 'vuex'

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
    ...mapState('project', ['topProjectList']),
    ...mapState('successcase', ['successCaseList']),
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
      this.getPageList(page)
    }
  }
}
</script>

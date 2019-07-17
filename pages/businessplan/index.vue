<template>
  <div class="business-plan">
    <section ref="sec1" class="sec1"></section>
    <section
      ref="sec2"
      :class="['sec2', { loaded: scrollloadElems.sec2.isLoadBackground }]"
    >
      <div class="wrap" :class="{ loaded: scrollloadElems.sec2.isLoadContent }">
        <h2>为什么你的商业计划书很难融到资？</h2>
        <ul>
          <li>不能快速打动投资人</li>
          <li>计划书不是简明扼要有条理，思路人清楚</li>
          <li>投资人看不懂我的创业项目和商业逻辑</li>
          <li>商业模式不明缺，没有亮点</li>
          <li>没有考虑到投资人的关注点</li>
          <li>计划书盈利模式设计不妥看不到投资价值</li>
          <li>不能投递优质的投资人</li>
          <li>投资人会不会为我的商业计划书保密？</li>
          <li>与投资人对接如何把关合作细节？</li>
        </ul>
      </div>
    </section>
    <section
      ref="sec3"
      :class="['sec3', { loaded: scrollloadElems.sec3.isLoadBackground }]"
    >
      <div class="wrap" :class="{ loaded: scrollloadElems.sec3.isLoadContent }">
        <h2>解决商业计划书的存在问题？</h2>
        <ul>
          <li>
            <div class="icon"><i></i></div>
            <div class="info">
              <p class="info-title">缺乏市场数据</p>
              <p class="info-desc">
                我们清楚地知道什么样的数据和信息是适合商业计划书采用的，
                潜在投资人希望看到什么样的市场分析。
              </p>
            </div>
          </li>
          <li>
            <div class="icon"><i></i></div>
            <div class="info">
              <p class="info-title">优势不突出，投资价值不明显</p>
              <p class="info-desc">
                从投资人的角度，分析、梳理和评估您的项目，
                挖掘和提炼项目核心点，展示投资价值
              </p>
            </div>
          </li>
          <li>
            <div class="icon"><i></i></div>
            <div class="info">
              <p class="info-title">各种资料不全</p>
              <p class="info-desc">
                商业计划书各种专业的标题会让您感觉到各种资料不全，
                如何收集和整理必要的材料，如何选择有说服力的信息
              </p>
            </div>
          </li>
          <li>
            <div class="icon"><i></i></div>
            <div class="info">
              <p class="info-title">运营思路不清晰</p>
              <p class="info-desc">
                很多项目发展必需的资源和战术层面的计划并不完全清晰和确定，
                在我们的帮助下，依然有不少项目收获了种子轮的投资
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section
      ref="sec4"
      :class="['sec4', { loaded: scrollloadElems.sec4.isLoadBackground }]"
    >
      <div class="wrap" :class="{ loaded: scrollloadElems.sec4.isLoadContent }">
        <h2>打造您的专属商业计划书</h2>
        <div class="sec4-content">
          <ul>
            <li>
              <p class="icon"></p>
              <p class="title">深度沟通</p>
              <p class="sub-title">拆解和分析项目整体情况</p>
            </li>
            <li>
              <p class="icon"></p>
              <p class="title">核心优势挖掘</p>
              <p class="sub-title">提炼项目亮点及竞争力</p>
            </li>
            <li>
              <p class="icon"></p>
              <p class="title">商业模式梳理</p>
              <p class="sub-title">优化商业模式逻辑性及可行性</p>
            </li>
            <li>
              <p class="icon"></p>
              <p class="title">资料收集</p>
              <p class="sub-title">系统性梳理项目相关数据资料</p>
            </li>
            <li>
              <p class="icon"></p>
              <p class="title">融资计划</p>
              <p class="sub-title">融资金额、股权比例等相关指导</p>
            </li>
            <li>
              <p class="icon"></p>
              <p class="title">估值指导</p>
              <p class="sub-title">提供科学合理的估值分析及建议</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section
      ref="sec5"
      :class="['sec5', { loaded: scrollloadElems.sec5.isLoadBackground }]"
    >
      <div class="wrap" :class="{ loaded: scrollloadElems.sec5.isLoadContent }">
        <h2>服务优势</h2>
        <h3>依托领先的IT技术，撰写高质量的商业计划书</h3>
        <ul>
          <li>
            <p class="title"><i></i>清晰的商业模式</p>
            <p class="info">
              将商业想法落实成商业模式，从价值主张、交易结构、盈利模式、
              现金流结构等多维度分析和改进商业模式。
            </p>
          </li>
          <li>
            <p class="title"><i></i>完整的逻辑架构</p>
            <p class="info">
              打造符合投资人口味的完整计划书逻辑框架和商业模式，提出优化建议。
            </p>
          </li>
          <li>
            <p class="title"><i></i>亮眼的项目优势</p>
            <p class="info">
              透析项目商业系统，提炼亮点和核心竞争力，让项目脱颖而出。
            </p>
          </li>
          <li>
            <p class="title"><i></i>专业的定制服务</p>
            <p class="info">
              专业的撰写团队，多对一的量身定制服务，打造个性化商业计划书。
            </p>
          </li>
        </ul>
      </div>
    </section>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import '~/assets/css/business-plan.less'
import BottomBar from '~/components/BottomBar.vue'
import throttle from 'lodash/throttle'
import forIn from 'lodash/forIn'

export default {
  name: 'BusinessPlan',
  layout: 'default2',
  components: { BottomBar },
  data() {
    return {
      scrollloadElems: {
        sec2: {
          isLoadBackground: true,
          isLoadContent: false
        },
        sec3: {
          isLoadBackground: false,
          isLoadContent: false
        },
        sec4: {
          isLoadBackground: false,
          isLoadContent: false
        },
        sec5: {
          isLoadBackground: false,
          isLoadContent: false
        }
      }
    }
  },
  mounted() {
    // 主动触发一次滚动事件
    this.onScroll()
    // 使用节流函数，保证500毫秒内只触发一次
    window.addEventListener('scroll', throttle(this.onScroll, 500))
  },
  methods: {
    onScroll() {
      // 遍历所有需要滚动加载的元素
      forIn(this.scrollloadElems, (value, key) => {
        // 如果内容已经加载，证明该区域已加载完毕，无需重复加载
        if (!value.isLoadContent) {
          this.isScrollload(key)
        }
      })
    },
    // 先加载背景, 后加载内容
    isScrollload(elemName) {
      if (!this.$refs.hasOwnProperty(elemName)) {
        return
      }
      const elem = this.$refs[elemName]
      if (!elem) {
        return
      }
      // 可见区域高度
      const screenHeight = document.documentElement.clientHeight
      // 滚动条距离顶部的高度
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop
      const elemTop = elem.getBoundingClientRect().top
      // 内容加载高度
      const loadContentHeight = screenHeight - 200
      // 加载到元素顶部的时候开始加载背景
      if (elemTop < scrollTop + screenHeight + 100) {
        this.scrollloadElems[elemName].isLoadBackground = true
      }
      // 只有当滚动到元素一半的位置的时候才开始加载内容
      if (elemTop < loadContentHeight) {
        this.scrollloadElems[elemName].isLoadContent = true
      }
    }
  }
}
</script>

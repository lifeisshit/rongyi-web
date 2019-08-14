<template>
  <div class="about-us">
    <div
      v-lazy:background-image="require('~/assets/img/aboutus-banner.png')"
      class="banner"
    ></div>
    <!--公司简介-->
    <section class="sec1">
      <h2 class="sec-title">公司简介</h2>
      <div class="sec-content">
        <p class="desc">
          武汉融易网信息服务有限公司成立于2019年5月13日，公司拥有一批专业资深的投融资、项目管理、风险管控等个方面的专业人才，公司秉承“客户至上、诚信经营、一诺千金、和谐共赢”的经营原则，坚持“审慎经营、风险可控、安全第一、稳健发展”的经营原则，坚持“用专业的人做专业的事，热情、高效”的服务理念，严格执行“合法、合规、科学、严谨、安全、诚信、快捷”的工作流程及“风险控制体系”。为投资融资客户搭建一个快捷、稳固的沟通平台，为拥有闲置资金的企业和个人寻求安全可靠、收益稳定丰厚的投资渠道，为中小企业寻找合法资金来源，及时解决企业资金需求。
          公司坐落于武汉洪山区高档金融圈--东湖国贸中心，附近有湖北创投大厦、金禾大厦等高新企业。自公司成立以来始终秉承”以人为本，做大做强“的企业愿景，坚守”诚信、务实、负责“的企业精神，牢记对社会负责、对股东负责、对客户负责、对员工负责、对企业负责的企业使命和社会责任，以投资领域的需求为基础，以公司的服务水平和自身实力为保障，让公司快速健康发展。
        </p>
      </div>
    </section>
    <!--企业文化-->
    <section
      v-lazy:background-image="require('~/assets/img/sec-bg2.png')"
      class="sec2"
    >
      <h2 class="sec-title">企业文化</h2>
      <div class="sec-content">
        <p class="text1">
          企业文化是企业的灵魂和核心竞争力，是企业基业长青的根本。建立优秀的企业文化是企业履行使命的内在要求，也是企业稳健、可持续发展的客观需要。
          我们寻求投资的项目应具有庞大的市场机会、优秀的团队、核心的自主知识产权和技术、明确的市场定位或创新的业务模式等竞争优势，我们愿意与企业家一起共担风险，鼎力支持早期创新企业在中国乃至全球市场取得巨大的成功。
        </p>
        <h3>核心价值</h3>
        <ul>
          <li>
            <div class="item-left">
              <i
                v-lazy:background-image="
                  require('~/assets/img/icon-zhuanye.png')
                "
              ></i>
            </div>
            <div class="item-right">
              <p class="item-title">专业</p>
              <p class="item-info">专注严谨 锐意进取 精益求精</p>
            </div>
          </li>
          <li>
            <div class="item-left">
              <i
                v-lazy:background-image="
                  require('~/assets/img/icon-pinpai.png')
                "
              ></i>
            </div>
            <div class="item-right">
              <p class="item-title">品牌</p>
              <p class="item-info">珍视声誉 诚信为本 敦行致远</p>
            </div>
          </li>
          <li>
            <div class="item-left">
              <i
                v-lazy:background-image="
                  require('~/assets/img/icon-xiaoyi.png')
                "
              ></i>
            </div>
            <div class="item-right">
              <p class="item-title">效益</p>
              <p class="item-info">稳健务实 回报股东 和谐共生</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <!--投资策略-->
    <section class="sec3">
      <h2 class="sec-title">投资策略</h2>
      <div class="sec-content">
        <h3 class="sub1">
          我们的发展目标是建设成为稳健、专业、负责任和有声望的国际大型机构投资者，投资活动秉承一下原则：
        </h3>
        <ul class="ul-info-list">
          <li>
            <div class="img-wrap">
              <img
                v-lazy="require('~/assets/img/icon-cl1.png')"
                alt="基于商业目的寻找快速融资平台"
                title="基于商业目的寻找快速融资平台"
              />
            </div>
            <p class="title">基于商业目的</p>
            <div class="underline"></div>
            <p class="desc">
              投资目标是在可接受风险范围内 实现股东权益最大化。
            </p>
          </li>
          <li>
            <div class="img-wrap">
              <img
                v-lazy="require('~/assets/img/icon-cl2.jpg')"
                alt="财务投资者找靠谱投资"
                title="财务投资者找靠谱投资"
              />
            </div>
            <p class="title">财务投资者</p>
            <div class="underline"></div>
            <p class="desc">
              不寻求对被投资企业的控制。
            </p>
          </li>
          <li>
            <div class="img-wrap">
              <img
                v-lazy="require('~/assets/img/icon-cl3.png')"
                alt="负责任的天使投资方"
                title="负责任的天使投资方"
              />
            </div>
            <p class="title">负责任的投资者</p>
            <div class="underline"></div>
            <p class="desc">
              严格遵守本国和投资接受国或地区 的相关法律、法规，积极履行企业
              社会责任。
            </p>
          </li>
          <li>
            <div class="img-wrap">
              <img
                v-lazy="require('~/assets/img/icon-cl4.jpg')"
                alt="以研究和资产配置为驱动寻找靠谱的投资人"
                title="以研究和资产配置为驱动寻找靠谱的投资人"
              />
            </div>
            <p class="title">以研究和资产配置为驱动</p>
            <div class="underline"></div>
            <p class="desc">
              旨在稳健、审慎进行投资决策 严谨、规范开展投资活动。
            </p>
          </li>
        </ul>
        <h3 class="sub2">
          基于对自身特征和投资管理的认识，武汉融易网信息服务有限公司坚持以下投资理念：
        </h3>
        <ul class="ul-text-list">
          <li>
            <p class="title">坚持总组合的理念</p>
            <div class="underline"></div>
            <p class="desc">
              从总组合角度规划投资策略、开展资产配置和
              组合分析、进行组合管理，保证总组合的完整 性、纪律性和稳健性。
            </p>
          </li>
          <li>
            <p class="title">坚持长期投资者的理念</p>
            <div class="underline"></div>
            <p class="desc">
              发挥长期投资者对短期市场波动风险承担能力
              强的优势，获取非流动性溢价。
            </p>
          </li>
          <li>
            <p class="title">坚持风险分散化的理念</p>
            <div class="underline"></div>
            <p class="desc">
              通过在各风险因子间的分散化投资，降低组合
              波动性，控制组合下行风险。
            </p>
          </li>
        </ul>
      </div>
    </section>
    <!--公司愿景-->
    <section
      v-lazy:background-image="require('~/assets/img/sec-bg4.png')"
      class="sec4"
    >
      <h2 class="sec-title">公司愿景</h2>
      <div class="sec-content">
        <h3>
          致力于成为一家以人为本、值得信赖、受人尊敬、基业长青的卓越企业，做中国企业家和投资人最值得信赖的长期合作伙伴，
          在帮助企业成长过程中获得投资回报，共同为中国经济社会发展做出积极的贡献。
        </h3>
        <ul>
          <li>
            <p class="title">
              面向未来秉承
            </p>
            <div class="underline"></div>
            <p class="sub-title">专业、品牌、效益核心价值观</p>
          </li>
          <li>
            <p class="title">
              坚持五位一体体系化运营
            </p>
            <div class="underline"></div>
            <p class="sub-title">投资、融资、风控、管理、服务</p>
          </li>
          <li>
            <p class="title">
              积极推进四化建设
            </p>
            <div class="underline"></div>
            <p class="sub-title">专业化、渠道化、品牌化、国际化</p>
          </li>
        </ul>
      </div>
    </section>
    <!--合作伙伴-->
    <section class="sec5">
      <h2 class="sec-title">合作伙伴</h2>
      <div class="sec-content wrap">
        <ul>
          <li v-for="bank in bankList" :key="bank.name">
            <div class="img-wrap">
              <img
                v-lazy="bank.icon"
                :alt="`可信赖投资平台合作伙伴${bank.name}`"
                :title="`可信赖投资平台合作伙伴${bank.name}`"
              />
            </div>
          </li>
        </ul>
      </div>
    </section>
    <!--联系我们-->
    <section class="sec6">
      <div
        v-lazy:background-image="require('~/assets/img/sec-bg6.png')"
        class="inner-bg"
      ></div>
      <h2 class="sec-title">联系我们</h2>
      <div class="sec-content">
        <ul>
          <li>
            <p class="title">关于我们</p>
            <p class="underline"></p>
            <div class="info">
              <div class="info-item">
                <span class="label">座机号：</span>
                <span class="value">{{ companyTel }}</span>
              </div>
              <div class="info-item">
                <span class="label">手机号：</span>
                <span class="value">{{ companyMobilePhone }}</span>
              </div>
              <div class="info-item">
                <span class="label">邮箱：</span>
                <span class="value">{{ companyEmail }}</span>
              </div>
            </div>
          </li>
          <li>
            <p class="title">我们在这儿</p>
            <p class="underline"></p>
            <div class="info">
              <div class="info-item">
                <span class="label label2">地址：</span>
                <span class="value">{{ companyAddress }}</span>
              </div>
              <div class="map-wrap">
                <baidu-map
                  :style="{
                    width: map.width + 'px',
                    height: map.height + 'px'
                  }"
                  class="map"
                  ak="GsVPaMppFyGP7wveCDCVnRX12xdFO3pa"
                  :zoom="map.zoom"
                  :center="{ lng: map.center.lng, lat: map.center.lat }"
                  @ready="handler"
                  :scroll-wheel-zoom="true"
                >
                  <!-- 添加标注 -->
                  <bm-marker
                    :position="{ lng: map.marker.lng, lat: map.marker.lat }"
                  ></bm-marker>
                  <!--信息窗体-->
                  <bm-label
                    content="融易网"
                    :labelStyle="{
                      color: '#060608',
                      fontSize: '16px',
                      backgroundColor: '#fff',
                      width: '80px',
                      height: '25px',
                      lineHeight: '25px',
                      textAlign: 'center',
                      border: 'none'
                    }"
                    :position="{
                      lng: map.center.lng,
                      lat: map.center.lat
                    }"
                    :offset="{ width: -35, height: -30 }"
                    show="true"
                  />
                </baidu-map>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import '~/assets/css/about-us.less'
import { mapState, mapActions } from 'vuex'
import BottomBar from '~/components/BottomBar.vue'
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
import BmMarker from 'vue-baidu-map/components/overlays/Marker.vue'
import BmLabel from 'vue-baidu-map/components/overlays/Label.vue'

export default {
  name: 'AboutUs',
  components: { BottomBar, BaiduMap, BmMarker, BmLabel },
  head() {
    return {
      title: '武汉靠谱的天使投资人_投资项目缺乏资金融资_关于我们',
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
          content: '靠谱的天使投资人,投资项目缺乏资金融资,关于我们'
        }
      ]
    }
  },
  data() {
    return {
      map: {
        width: 439,
        height: 95,
        zoom: 14,
        center: {
          lng: 114.368193,
          lat: 30.588098
        },
        marker: {
          lng: 114.368691,
          lat: 30.584996
        }
      },
      bankList: [
        {
          name: '中国光大银行',
          icon: require('~/assets/img/bank1.png')
        },
        {
          name: '中国民生银行',
          icon: require('~/assets/img/bank2.png')
        },
        {
          name: '交通银行',
          icon: require('~/assets/img/bank3.png')
        },
        {
          name: '中国银行',
          icon: require('~/assets/img/bank4.png')
        },
        {
          name: '深圳发展银行',
          icon: require('~/assets/img/bank5.png')
        },
        {
          name: '招商银行',
          icon: require('~/assets/img/bank6.png')
        },
        {
          name: '中国建设银行',
          icon: require('~/assets/img/bank7.png')
        },
        {
          name: '锦州银行',
          icon: require('~/assets/img/bank8.png')
        },
        {
          name: '中国农业银行',
          icon: require('~/assets/img/bank9.png')
        },
        {
          name: '大连银行',
          icon: require('~/assets/img/bank10.png')
        },
        {
          name: '广东发展银行',
          icon: require('~/assets/img/bank11.png')
        },
        {
          name: '长沙银行',
          icon: require('~/assets/img/bank12.png')
        },
        {
          name: '南京银行',
          icon: require('~/assets/img/bank13.png')
        },
        {
          name: '中国工商银行',
          icon: require('~/assets/img/bank14.png')
        },
        {
          name: '洛阳银行',
          icon: require('~/assets/img/bank15.png')
        },
        {
          name: '邢台银行',
          icon: require('~/assets/img/bank16.png')
        },
        {
          name: '河北银行',
          icon: require('~/assets/img/bank17.png')
        },
        {
          name: '赣州银行',
          icon: require('~/assets/img/bank18.png')
        },
        {
          name: '莱商银行',
          icon: require('~/assets/img/bank19.png')
        },
        {
          name: '齐鲁银行',
          icon: require('~/assets/img/bank20.png')
        },
        {
          name: '南充市商业银行',
          icon: require('~/assets/img/bank21.png')
        },
        {
          name: '展博投资',
          icon: require('~/assets/img/bank22.png')
        },
        {
          name: '东源投资',
          icon: require('~/assets/img/bank23.png')
        },
        {
          name: '兴业证券',
          icon: require('~/assets/img/bank24.png')
        }
      ]
    }
  },
  computed: {
    ...mapState([
      'companyAddress',
      'companyTel',
      'companyMobilePhone',
      'companyEmail'
    ])
  },
  methods: {
    ...mapActions('successcase', ['getPageList']),
    // 地图初始化
    handler({ BMap, map }) {
      console.log(BMap, map)
      // this.map.center.lng = 118.802422
      // this.map.center.lat = 32.065631
      // this.map.zoom = 12;
      // this.getProPositionMap();
    }
  }
}
</script>

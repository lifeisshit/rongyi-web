/*
 * 全局配置
 * */
import LodashModuleReplacementPlugin from 'lodash-webpack-plugin'

export default {
  mode: 'universal',
  render: {
    resourceHints: false
  },
  router: {
    prefetchLinks: false
  },
  /*
   ** Headers of the page
   */
  head: {
    title: '专业的项目融资信息服务平台_低风险投资管理咨询公司_武汉融易网',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'baidu-site-verification', content: '6qIWcNMtbE' },
      {
        hid: 'description',
        name: 'description',
        content:
          '融易网是中国专业的项目融资服务平台，拥有数万投融资机构入驻，融易网通过线上+线下对接，为平台会员提供一站式投融资服务,解决了传统投融资行业存在的地域限制、信息不对称、效率低下等问题。融易网凭借项目信息与投资需求高效、直观、精准地匹配，成功对接股权融资超过千亿元。'
      },
      {
        hid: 'Keywords',
        name: 'Keywords',
        content:
          '专业的项目融资信息服务平台,低风险投资管理咨询公司,武汉融易网信息服务有限公司'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico?v3' }],
    script: [
      { src: 'https://hm.baidu.com/hm.js?0070e28f8b0eeb38d91bf88d6ba50034' }
    ] /* 引入百度统计的js */
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    'normalize.css/normalize.css',
    '~/assets/css/common.less',
    'swiper/dist/css/swiper.css'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/element-ui' },
    { src: '~/plugins/vue-awesome-swiper.js', mode: 'client' },
    { src: '~/plugins/axios' },
    { src: '~/plugins/filter' },
    { src: '~/plugins/vue-lazyload.js', mode: 'client' },
    { src: '~/plugins/baiduGa.js', mode: 'client' } /* 百度统计 */
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'nuxt-vuex-localstorage'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    // prefix: '/service/',
    credentials: true,
    proxy: true // Can be also an object with default options
  },
  proxy: {
    '/service': {
      target: 'http://47.103.55.170:18080/service',
      changeOrigin: true,
      pathRewrite: { '^/service': '' }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    // publicPath: 'https://www.rongyi8.com/_nuxt/',
    transpile: [/^element-ui/, 'nuxt-vuex-localstorage'],
    // 分析编译结果, 看看哪里可以优化
    analyze: false,
    // 提取css
    extractCSS: true,
    // 拆分大体积的js包
    optimization: {
      splitChunks: {
        chunks: 'all',
        automaticNameDelimiter: '.',
        maxAsyncRequests: 7,
        cacheGroups: {
          elementui: {
            test: /node_modules[\\/]element-ui/,
            chunks: 'all',
            priority: 20,
            name: true
          }
        }
      }
    },
    vendor: ['element-ui'],
    babel: {
      plugins: [
        [
          'component',
          {
            libraryName: 'element-ui',
            styleLibraryName: 'theme-chalk'
          }
        ]
      ],
      comments: true
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      // load loadsh.js on require
      // config.plugins.unshift(new LodashModuleReplacementPlugin())
      // rules[2].use[0] is babel-loader
      // config.module.rules[2].use[0].options.plugins = ['lodash']
    }
  }
}

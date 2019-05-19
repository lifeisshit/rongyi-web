/*
 * 全局配置
 * */
export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: '融易网',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
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
          '融资,项目融资,天使投资,风投,风险投资,投资公司,项目,股权融资,债权融资,找投资人,快速融资,融易网'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
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
    '~/assets/css/common.less'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/element-ui'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],

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
    }
  }
}

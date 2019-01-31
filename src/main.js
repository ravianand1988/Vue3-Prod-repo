import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import WebFontLoader from 'webfontloader'

//import assets
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import i18n from './i18n'

Vue.config.productionTip = false

Vue.use(Vuetify)


export default {
  mounted () {
    WebFontLoader.load({
      google: {
        families: ['Roboto:100,300,400,500,700,900']
      },
      active: this.setFontLoaded
    })
  },
  methods: {
    setFontLoaded () {
      this.$emit('font-loaded')
    }
  }
}

Vue.prototype.$version = process.env.VUE_APP_VERSION
Vue.prototype.$buildNum = process.env.VUE_APP_BUILD_NUM

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

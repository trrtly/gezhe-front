import './assets/js/flexible'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api'
import VueClipboard from 'vue-clipboard2'

import { Icon, Tabbar, TabbarItem, Overlay, Field, List, Dialog } from 'vant'

import './assets/less/index.less'

async function initail() {
  const res = await api.getPlatformInfo()

  localStorage.setItem('platform', JSON.stringify(res.data))

  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}

Vue.use(Icon)
Vue.use(Overlay)
Vue.use(Field)
Vue.use(List)
Vue.use(Tabbar).use(TabbarItem)
Vue.use(Dialog)

Vue.use(VueClipboard)

Vue.config.productionTip = false
VueClipboard.config.autoSetContainer = true

Vue.prototype.$api = api

initail()

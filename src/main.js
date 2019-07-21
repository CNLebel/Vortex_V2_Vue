import Vue from 'vue'
// import './plugins/axios'
import VueRouter from 'vue-router'
import App from './App.vue'
import store from './store'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import router from './router'
import VueResource from 'vue-resource'
import axios from 'axios'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(MintUI)
Vue.use(VueResource)

Vue.http.options.root = 'http://192.168.46.124:8000'
Vue.http.options.emulateJSON = true


import { Header, Swipe, SwipeItem, Tabbar, TabItem } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);

Vue.prototype.$axios = axios;



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')















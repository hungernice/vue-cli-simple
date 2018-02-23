import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import routerConfig from './router.config.js'
import  Axios from 'axios'
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(Axios)
const router =new VueRouter(routerConfig) 
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

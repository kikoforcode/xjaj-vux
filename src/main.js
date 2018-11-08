// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import 'styles/iconfont.css'
// 全局引入toast、alert、loading
import { ToastPlugin, AlertPlugin, LoadingPlugin } from 'vux'

Vue.use(VueRouter)
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)
Vue.use(LoadingPlugin)

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')

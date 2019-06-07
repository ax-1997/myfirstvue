// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'
import 'babel-polyfill'

import store from './store'

/* 轮播图插件 */
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false
fastclick.attach(document.body)
/* 把它绑定在document.body上 */

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
// 路由就是通过网址的不同，返回不同的内容给用户

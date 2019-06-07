import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
Vue.use(Vuex)

/* 创建一个vue仓库 */
export default new Vuex.Store({
  state: state,
  mutations
})

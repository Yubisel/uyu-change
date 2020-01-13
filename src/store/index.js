import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: {
        title: 'Loading please wait',
        color: 'primary',
        status: true
    }
  },
  mutations: {
    showLoading(state, payload){
        state.loading.title = payload.title;
        state.loading.color = payload.color;
        state.loading.status = true;
    },
    hideLoading(state){
        state.loading.status = false;
    }
  },
  actions: {
  },
  modules: {
  }
})

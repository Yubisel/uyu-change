import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: {
        title: 'Loading please wait',
        color: 'primary',
        status: false
    },
    changeValues: [],
    countries: {}
  },
  mutations: {
    showLoading(state, payload){
        state.loading.title = payload.title;
        state.loading.color = payload.color;
        state.loading.status = true;
    },
    hideLoading(state){
        state.loading.status = false;
    },
    setChangeValues(state, payload){
        state.changeValues = payload;
    },
    setCountries(state, payload){
        state.countries = payload;
    }
  },
  actions: {
  },
  modules: {
  }
});

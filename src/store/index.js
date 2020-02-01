import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        loading: {
            title: 'Loading please wait',
            color: 'primary',
            status: false
        },
        changeValues: [],
        countries: [],
        currencies: []
    },
    mutations: {
        showLoading(state, payload) {
            state.loading.title = payload.title;
            state.loading.color = payload.color;
            state.loading.status = true;
        },
        hideLoading(state) {
            state.loading.status = false;
        },
        setChangeValues(state, payload) {
            state.changeValues = payload;
        },
        setCountries(state, payload) {
            state.countries = Object.values(payload);
        },
        setCurrencies(state, payload) {
            state.currencies = Object.values(payload);
        }
    },
    actions: {
        async loadCountries({
            commit
        }, payload) {
            commit('showLoading', {
                title: "Loading",
                color: "primary"
            });

            try {
                let result = await axios.get(
                    `${payload.config.baseUrl}/iso.countries.json`
                );
                commit('setCountries', result.data);
            } catch (error) {
                console.log(error);
            } finally {
                commit('hideLoading');
            }
        },
        async loadCurrencies({
            commit
        }, payload) {
            commit('showLoading', {
                title: "Loading",
                color: "primary"
            });

            try {
                let result = await axios.get(
                    `${payload.config.baseUrl}/iso.currencies.json`
                );
                commit('setCurrencies', result.data);
            } catch (error) {
                console.log(error);
            } finally {
                commit('hideLoading');
            }
        }
    },
    modules: {}
});
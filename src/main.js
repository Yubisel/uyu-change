import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'flag-icon-css/css/flag-icon.css';
import i18n from './i18n';

const config = require('../server/config/config');

Vue.config.productionTip = false;

Vue.mixin({
    data: () => ({
        config: {
            baseUrl: process.env.VUE_APP_API_URL || "",
            apiUrl: config.apiUrl,
            lang: {
                "en": "gb", // country alpha 2 letters for flag in langs selector
                "es": "es"
            }
        }
    })
});

if (localStorage.lang){
    i18n.locale = localStorage.lang;
}

new Vue({
    router,
    store,
    vuetify,
    i18n,
    render: h => h(App)
}).$mount('#app');
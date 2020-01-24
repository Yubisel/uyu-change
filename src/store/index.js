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
    countries: [],
    countriesHeader: [
        {
          text: 'Flag',
          align: 'left',
          filterable: true,
          sortable: false,
          value: 'id',
        },
        { text: 'Name', value: 'name' },
        { text: 'Alpha 2', value: 'alpha2' },
        { text: 'Alpha 3', value: 'alpha3' },
        { text: 'Numeric', value: 'numeric' }

        // <td>
        // <th class="text-left">Name</th>
        //                 <th class="text-center">Alpha 2</th>
        //                 <th class="text-center">Alpha 3</th>
        //                 <!-- <th class="text-center">Currency Symbol</th> -->
        //                 <th class="text-center d-none d-md-table-cell">Numeric</th>
        //                     <span :class="'flag-icon flag-icon-' + country.alpha2.toLowerCase()"></span>
        //                 </td>
        //                 <td>{{ country.name }}</td>
        //                 <td class="text-center">{{ country.alpha2 }}</td>
        //                 <td class="text-center">{{ country.alpha3 }}</td>
        //                 <!-- <td class="text-center">{{ country.currencySymbol }}</td> -->
        //                 <td class="text-center d-none d-md-block">{{ country.numeric }}</td>
      ],
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
        state.countries = Object.values(payload);
    }
  },
  actions: {
  },
  modules: {
  }
});

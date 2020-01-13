<template>
      <v-flex xs12 md6>
          <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Currency</th>
          <th class="text-left">Purchase</th>
          <th class="text-left">Sale</th>
          <th class="text-left">AVG</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="currency in changeValues" :key="currency.initial">
          <td>{{ currency.name }}</td>
          <td>{{ currency.purchase }}</td>
          <td>{{ currency.sale }}</td>
          <td>{{ ((currency.purchase + currency.sale) / 2).toFixed(2)  }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
      </v-flex>
</template>

<script>

import { mapMutations, mapState } from "vuex";
import axios from "axios";

export default {
  name: 'ExchangeValue',

  data: () => ({
      api_url: process.env.VUE_APP_API_URL || '',
  }),

  computed: {
      ...mapState(["changeValues"])
  },

  methods: {
        ...mapMutations(["showLoading", "hideLoading", "setChangeValues"]),

        async getChange() {
            this.showLoading({ title: "Loading", color: "primary" });

            try {
                let result = await axios.get(`${this.api_url}api-v1/change`);
                // console.log(result.data.changesValues);
                this.setChangeValues(result.data.changesValues);
            } catch (error) {
                console.log(error);
            } finally {
                this.hideLoading();
            }
        }
  },

  created(){
      this.getChange();
  }
};
</script>
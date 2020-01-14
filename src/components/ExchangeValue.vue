<template>
    <v-flex xs12 md6>
        <h1 class="title text-center py-1">Today quote in Uruguay</h1>
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
                    <tr
                        v-for="currency in changeValues"
                        :key="currency.initial"
                        @click="convert(currency)"
                    >
                        <td>{{ currency.name }}</td>
                        <td>{{ currency.purchase }}</td>
                        <td>{{ currency.sale }}</td>
                        <td>{{ calcAvg(currency) }}</td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>

        <v-dialog v-model="dialog" persistent max-width="500px">
            <v-card>
                <v-card-title>Change value {{ calcAvg(activeCurrency) }} (AVG)</v-card-title>
                <v-row class="mx-3">
                    <v-flex xs6>
                        <v-label>From {{activeCurrency.initial}}</v-label>
                    </v-flex>
                    <v-flex xs6>
                        <v-label>To UYU</v-label>
                    </v-flex>
                    <v-flex xs6>
                        <v-text-field
                            v-model="value"
                            label="Amount"
                            required
                            type="number"
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs6>
                        <v-text-field
                            class="text-right"
                            label=""
                            disabled
                            prefix="$"
                            :value="(calcAvg(activeCurrency) * value).toFixed(2)"
                        ></v-text-field>
                    </v-flex>
                </v-row>
                <v-card-actions>
                    <v-btn class="mx-auto" color="primary" dark @click="dialog = false">Close</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-flex>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import axios from "axios";

export default {
    name: "ExchangeValue",

    data: () => ({
        value: "",
        dialog: false,
        activeCurrency: {
            initial: "",
            name: "",
            purchase: 0,
            sale: 0
        },
        api_url: process.env.VUE_APP_API_URL || ""
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
        },

        calcAvg(currency) {
            return ((currency.purchase + currency.sale) / 2).toFixed(2);
        },

        convert(currency) {
            this.activeCurrency = currency;
            this.dialog = true;
        }
    },

    created() {
        this.getChange();
    }
};
</script>
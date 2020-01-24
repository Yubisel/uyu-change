<template>
    <v-flex xs12 md6>
        <h1 class="title text-center py-1">{{ $t('exchangeValue.title') }}</h1>
        <v-simple-table>
            <template v-slot:default>
                <thead>
                    <tr>
                        <th class="text-left">{{ $t('exchangeValue.currency') }}</th>
                        <th class="text-left">{{ $t('exchangeValue.purchase') }}</th>
                        <th class="text-left">{{ $t('exchangeValue.sale') }}</th>
                        <th class="text-left">{{ $t('exchangeValue.avg') }}</th>
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
                    <tr v-if="!changeValues.length">
                        <td colspan="4" class="text-center">
                        <em>{{ $t('table.emptyRecords') }}</em>
                        </td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>

        <v-dialog v-model="dialog" persistent max-width="500px">
            <v-card>
                <v-card-title>{{ $t('exchangeValue.changeValue') }} {{ calcAvg(activeCurrency) }} (AVG)</v-card-title>
                <v-row class="mx-3">
                    <v-flex xs6>
                        <v-label>{{ $t('exchangeValue.from') }} {{activeCurrency.initial}}</v-label>
                    </v-flex>
                    <v-flex xs6>
                        <v-label>{{ $t('exchangeValue.to') }} UYU</v-label>
                    </v-flex>
                    <v-flex xs6>
                        <v-text-field
                            v-model="value"
                            :label="$t('exchangeValue.amount')"
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
                    <v-btn class="mx-auto" color="primary" dark @click="dialog = false">{{ $t('buttons.close') }}</v-btn>
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
        }
    }),

    computed: {
        ...mapState(["changeValues"])
    },

    methods: {
        ...mapMutations(["showLoading", "hideLoading", "setChangeValues"]),

        async getChange() {
            this.showLoading({ title: "Loading", color: "primary" });

            try {
                let result = await axios.get(`${this.config.baseUrl}${this.config.apiUrl}/change`);
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
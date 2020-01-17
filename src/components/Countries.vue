<template>
    <v-flex xs12 md10>
        <h1 class="title text-center py-1">Countries</h1>
        <v-simple-table>
            <template v-slot:default>
                <thead>
                    <tr>
                        <th class="text-left">Name</th>
                        <th class="text-center">Alpha 2</th>
                        <th class="text-center">Alpha 3</th>
                        <!-- <th class="text-center">Currency Symbol</th> -->
                        <th class="text-center">Numeric</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="country in countries"
                        :key="country.initial"
                    >
                        <td>{{ country.name }}</td>
                        <td class="text-center">{{ country.alpha2 }}</td>
                        <td class="text-center">{{ country.alpha3 }}</td>
                        <!-- <td class="text-center">{{ country.currencySymbol }}</td> -->
                        <td class="text-center">{{ country.numeric }}</td>
                    </tr>
                    <tr v-if="!Object.keys(countries).length">
                        <td colspan="5" class="text-center">
                        <em>Without records to show</em>
                        </td>
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
    name: "Countries",

    data: () => ({
        
    }),

    computed: {
        ...mapState(["countries"])
    },

    methods: {
        ...mapMutations(["showLoading", "hideLoading", "setCountries"]),

        async getCountries() {
            this.showLoading({ title: "Loading", color: "primary" });

            try {
                let result = await axios.get(`${this.config.baseUrl}/iso.countries.json`);
                this.setCountries(result.data);
            } catch (error) {
                console.log(error);
            } finally {
                this.hideLoading();
            }
        }
    },

    created() {
        this.getCountries();
    }
};
</script>
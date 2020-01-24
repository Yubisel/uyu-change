<template>
    <v-flex xs12 md10>
        <h1 class="title text-center py-1">Countries</h1>
        <v-flex xs12 md4 class="ml-auto">
        <v-text-field v-model="search" append-icon="fas fa-search" label="Search"></v-text-field>
        </v-flex>
        <v-data-table
            :headers="countriesHeader"
            :items="countries"
            :items-per-page="10"
            class="elevation-1"
            :search="search"
        >
            <template v-slot:item.id="{ item }">
                <span :class="'flag-icon flag-icon-' + item.alpha2.toLowerCase()"></span>
            </template>
        </v-data-table>
    </v-flex>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import axios from "axios";

export default {
    name: "Countries",

    data: () => ({
        search: ""
    }),

    computed: {
        ...mapState(["countries", "countriesHeader"])
    },

    methods: {
        ...mapMutations(["showLoading", "hideLoading", "setCountries"]),

        async getCountries() {
            this.showLoading({ title: "Loading", color: "primary" });

            try {
                let result = await axios.get(
                    `${this.config.baseUrl}/iso.countries.json`
                );
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
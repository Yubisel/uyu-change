<template>
    <v-flex xs12 md10>
        <h1 class="title text-center py-1">{{ $t('currencies.title') }}</h1>
        <v-flex xs12 md4 class="ml-auto">
            <v-text-field
                v-model="search"
                append-icon="fas fa-search"
                :label="$t('buttons.search')"
            ></v-text-field>
        </v-flex>
        <v-data-table
            :headers="currenciesHeader"
            :items="currencies"
            :items-per-page="10"
            class="elevation-1"
            :search="search"
        >
        </v-data-table>
    </v-flex>
</template>

<script>
import { mapState } from "vuex";
import i18n from '../i18n';

export default {
    name: "currencies",

    data: () => ({
        search: ""
    }),

    computed: {
        ...mapState(["currencies"]),
        currenciesHeader: () => [
            {
                text: i18n.t("currencies.code"),
                align: "center",
                filterable: true,
                sortable: false,
                value: "code"
            },
            { text: i18n.t("currencies.name"), value: "name-" + i18n.locale },
            { text: i18n.t("currencies.symbol"), value: "symbol" },
            { text: i18n.t("currencies.numeric"), value: "numeric" }
        ]
    },
    created() {
        this.$store.dispatch('loadCurrencies', { config: this.config });
    }
};
</script>
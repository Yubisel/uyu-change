<template>
    <v-app>
        <Navigation></Navigation>
        <v-content>
            <v-container fluid>
                <v-row align="center" justify="center">
                    <router-view />
                </v-row>
            </v-container>
        </v-content>

        <v-dialog v-model="loading.status" hide-overlay persistent width="300">
            <v-card :color="loading.color" dark>
                <v-card-text>
                    {{loading.title}}
                    <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
                </v-card-text>
            </v-card>
        </v-dialog>

        <Footer></Footer>
    </v-app>
</template>

<script>
import { mapState } from 'vuex';

import Navigation from "./components/layouts/Navigation";
import Footer from "./components/layouts/Footer";

export default {
    name: "App",

    components: {
        Navigation,
        Footer
    },

    data: () => ({}),

    computed: {
        ...mapState(["loading"])
    },

    created() {
        //   this.$vuetify.theme.dark = true
    }
};
</script>

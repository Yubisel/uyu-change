<template>
    <v-app>
        <Navigation></Navigation>
        <v-content>
            <v-container fluid>
                <v-row align="center" justify="center">
                    <router-view/>
                </v-row>
            </v-container>
        </v-content>
        <Footer></Footer>
    </v-app>
</template>

<script>
import Navigation from './components/layouts/Navigation';
import Footer from './components/layouts/Footer';

export default {
    name: "App",

    components: {
        Navigation,
        Footer
    },

    data: () => ({
        
    }),

    created () {
    //   this.$vuetify.theme.dark = true
    }
};
</script>

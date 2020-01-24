<template>
    <div>
        <v-navigation-drawer v-model="drawer" app clipped>
            <v-list dense>
                <v-list-item link to="/">
                    <v-list-item-action>
                        <v-icon>fa-search-dollar</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>{{ $t('navigation.changeCurrency') }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link to="/countries">
                    <v-list-item-action>
                        <v-icon>fa-globe-americas</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>{{ $t('navigation.countries') }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link to="/about">
                    <v-list-item-action>
                        <v-icon>fa-question-circle</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>{{ $t('navigation.about') }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar app clipped-left>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
            <div class="d-flex align-center">
                <v-img
                    alt="App Logo"
                    class="shrink mr-2"
                    contain
                    :src="require('@/assets/logo.png')"
                    transition="scale-transition"
                    width="40"
                />
                <v-toolbar-title>CHUYU</v-toolbar-title>
            </div>
            <div class="d-flex ml-auto">
                <v-menu bottom offset-y transition="slide-y-transition">
                    <template v-slot:activator="{ on }">
                        <v-btn dark icon v-on="on">
                            <span :class="'flag-icon flag-icon-' + config.lang[$root.$i18n.locale]"></span>
                        </v-btn>
                    </template>

                    <v-list>
                        <v-list-item v-for="(item, i) in locales" :key="i" @click="changeLocale(item)">
                            <v-list-item-title><span :class="'flag-icon flag-icon-' + config.lang[item]"></span></v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </div>
        </v-app-bar>
    </div>
</template>


<script>
export default {
    name: "Navigation",

    data: () => ({
        drawer: false
    }),
    computed: {
        locales() {
            return Object.keys(this.$i18n.messages);
        }
    },
    methods: {
        changeLocale(locale){
            this.$i18n.locale = locale;
        }
    },
    created(){
    }
};
</script>
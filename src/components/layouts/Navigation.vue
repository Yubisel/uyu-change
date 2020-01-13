<template>
    <div>
        <v-navigation-drawer v-model="drawer" app clipped>
            <v-list dense>
                <v-list-item link to="/">
                    <v-list-item-action>
                        <v-icon>fa-search-dollar</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Currency Value</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link to="/about">
                    <v-list-item-action>
                        <v-icon>fa-question-circle</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>About</v-list-item-title>
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
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
            <v-toolbar-title>UYU Change</v-toolbar-title>
            </div>
        </v-app-bar>
    </div>
</template>


<script>
export default {
  name: 'Navigation',

  data: () => ({
      drawer: false
  })
};
</script>
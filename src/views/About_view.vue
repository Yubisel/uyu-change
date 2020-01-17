<template>
    <v-flex xs12 md6>
        <v-card class="mx-auto pt-2" max-width="344">
            <v-img
                class="product_logo"
                :src="require('@/assets/logo.png')"
                height="160px"
                width="150px"
            ></v-img>

            <v-card-title>CHUYU</v-card-title>

            <v-card-subtitle>Today quote in Uruguay</v-card-subtitle>

            <v-divider></v-divider>

            <v-card-text>
                <p>
                    All information provided here is taked from
                    <a
                        href="https://uy.cotizacion-dolar.com/cotizacion-hoy-uruguay.php"
                        target="_blank"
                    >https://uy.cotizacion-dolar.com/cotizacion-hoy-uruguay.php</a>
                </p>
                <p>The information is provided "as is", without warranty of any kind. I's you responsability check before any transaction or pay the amount here calculated.</p>
            </v-card-text>
        </v-card>
    </v-flex>
</template>

<style lang="scss">
.product_logo {
    height: 100%;
    width: auto;
    margin: 0 auto;
}
</style>
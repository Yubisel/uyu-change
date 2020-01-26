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

            <v-card-subtitle>{{ $t('about.title') }}</v-card-subtitle>

            <v-divider></v-divider>

            <v-card-text>
                <p>
                    {{ $t('about.origin') }}
                    <a
                        href="https://uy.cotizacion-dolar.com/cotizacion-hoy-uruguay.php"
                        target="_blank"
                    >https://uy.cotizacion-dolar.com/cotizacion-hoy-uruguay.php</a>
                </p>
                <p>
                    {{ $t('about.description') }}
                </p>
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
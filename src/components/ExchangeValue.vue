<template>
      <v-flex xs12 md6>
          <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Currency</th>
          <th class="text-left">Purchase</th>
          <th class="text-left">Sale</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="currency in coins" :key="currency.initial">
          <td>{{ currency.name }}</td>
          <td>{{ currency.purchase }}</td>
          <td>{{ currency.sale }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
      </v-flex>
</template>

<script>
export default {
  name: 'ExchangeValue',

  data: () => ({
      coins: [
          {
              initial: 'USD',
              name: 'Dólar',
              purchase: 36.54,
              sale: 38.21
          },
          {
              initial: 'EUR',
              name: 'Euro',
              purchase: 39.67,
              sale: 43.61
          },
          {
              initial: 'ARS',
              name: 'Peso Argentino',
              purchase: 0.34,
              sale: 0.77
          },
          {
              initial: 'BRL',
              name: 'Real',
              purchase: 8.63,
              sale: 10.00
          },
        ],
  }),
};
</script>
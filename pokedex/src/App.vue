<template>
  <v-app>
    <v-main>
      <PokemonList/>
    </v-main>
  </v-app>
</template>

<script>
import PokemonList from './components/PokemonList/PokemonList.vue'

export default {
  name: 'App',

  components: {
    PokemonList,
  },

  data: () => ({
    //
  }),
}
</script>

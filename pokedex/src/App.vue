<template lang="html">
  <v-app>
    <v-main>
      <div class="container">
        <div class="main-content">
          <div class="header-container">
            <LogoPokemon />
            <SearchBar
              placeholder="Searh pokemon by name or number"
              bgColor="white"
              appendIcon="mdi-magnify"
            />
          </div>
          <div class="separation"></div>
          <div class="body-container">
            <PokemonList
            />
          </div>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script lang="js">
import LogoPokemon from "@/components/Widgets/LogoPokemon/LogoPokemon.vue";
import SearchBar from "@/components/Widgets/SearchBar/SearchBar.vue";
import PokemonList from './components/PokemonList/PokemonList.vue'

    export default  {
        name: 'app',
        components: {
          LogoPokemon,
          SearchBar,
          PokemonList
        },
        props: {

        },
        data () {
            return {

            }
        },
        methods: {
        },
        computed: {

        }
    }
</script>

<style lang="scss">
  // @import "@/styles/App.scss";
</style>

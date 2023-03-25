<template lang="html">
  <v-app>
    <v-main>
      <div class="main-container">
        <div class="main-content">
          <SearchBar
            placeholder="Searh pokemon by name or number"
            bgColor="white"
            appendIcon="mdi-magnify"
          />
          <div class="separation"></div>
          <PokemonList
          />
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script lang="js">
import SearchBar from "@/components/Widgets/SearchBar/SearchBar.vue";
import PokemonList from './components/PokemonList/PokemonList.vue'

    export default  {
        name: 'app',
        components: {
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
  @import "@/styles/App.scss";
</style>

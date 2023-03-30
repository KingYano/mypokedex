<template lang="html">
  <v-app>
    <v-main>
      <div class="container">
        <div class="main-content">
          <div class="header-container">
            <PokemonLogo />
            <PokemonSearchBar
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
import PokemonLogo from "@/components/Widgets/PokemonLogo/PokemonLogo.vue";
import PokemonSearchBar from "@/components/Widgets/PokemonSearchBar/PokemonSearchBar.vue";
import PokemonList from './components/PokemonList/PokemonList.vue'

    export default  {
        name: 'app',
        components: {
          PokemonLogo,
          PokemonSearchBar,
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

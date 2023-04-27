<template lang="html">
  <v-app>
    <v-main>
      <div class="container">
        <div class="main-content">
          <div class="header-container">
            <router-link
                :to="{ name: 'PokemonList'}"
            >
              <PokemonLogo />
            </router-link>
            <PokemonSearchBar
              placeholder="Searh pokemon by name or number"
              bgColor="white"
              appendIcon="mdi-magnify"
            />
          </div>
          <div class="separation"></div>
          <div class="body-container">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script lang="js">
import PokemonLogo from "@/components/Widgets/PokemonLogo/PokemonLogo.vue";
import PokemonSearchBar from "@/components/Widgets/PokemonSearchBar/PokemonSearchBar.vue";

    export default  {
        name: 'app',
        components: {
          PokemonLogo,
          PokemonSearchBar,
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

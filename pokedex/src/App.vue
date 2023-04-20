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
              @show-pokemon-info-card="showPokemonInfoCard"
            />

            <PokemonInfoCard
              class="modal"
              :pokemon="selectedPokemon"
              v-if="showModal"
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
import PokemonList from './components/PokemonList/PokemonList.vue';
import PokemonInfoCard from './components/PokemonInfoCard/PokemonInfoCard.vue'

    export default  {
        name: 'app',
        components: {
          PokemonLogo,
          PokemonSearchBar,
          PokemonList,
          PokemonInfoCard
        },
        props: {

        },
        data () {
            return {
              showModal: false,
              selectedPokemon: {}
            }
        },
        methods: {
          showPokemonInfoCard(pokemon) {
            console.log('ouvert');
            console.log('pokemon', pokemon);
            console.log('type', pokemon.types);

            this.selectedPokemon = pokemon;
            this.showModal = true;
          },
        },
        computed: {

        }
    }
</script>

<style lang="scss">
  // @import "@/styles/App.scss";
</style>

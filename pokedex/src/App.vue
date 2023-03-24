<template>
  <v-app>
    <v-main>
      <div class="main-content">
          <SearchBar
            placeholder="Searh pokemon by name or number"
            bgColor="white"
            appendIcon="mdi-magnify"
          />
        <PokemonList/>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import SearchBar from "@/components/Widgets/SearchBar/SearchBar.vue";
import PokemonList from './components/PokemonList/PokemonList.vue'


export default {
  name: 'App',

  components: {
    SearchBar,
    PokemonList,
  },

  data: () => ({
    //
  }),
}
</script>

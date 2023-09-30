<template lang="html">
  <div class="pokemon-list">
    <div class="pokemon-list-container">
      <router-link
        class="pokemon-card"
        v-for="pokemon in pokemons"
        :key="pokemon.name"
        :to="{ name: 'PokemonInfo', params: { id: pokemon.id } }"
      >
        <PokemonCard
          :name="pokemon.name"
          :id="pokemon.id"
          :types="pokemon.types"
          :imageUrl="pokemon.imageUrl"
          @click="$emit('show-pokemon-info-card', pokemon)"
        />
      </router-link>
    </div>
    <div class="pokemon-command">
      <PokemonButtonText
        v-if="!isDisabledButton"
        :disabled="isDisabledButton"
        :loading="isLoadingStateButton"
        @click="loadMorePokemons"
        :texte="loadButtonText"
      ></PokemonButtonText>
    </div>
  </div>
</template>

<script lang="js">
import axios from 'axios';
import PokemonCard from "@/components/PokemonCard/PokemonCard.vue";
import PokemonButtonText from "@/components/Widgets/PokemonButtonText/PokemonButtonText.vue";

export default {
  name: 'pokemon-list',
  components: {
    PokemonCard,
    PokemonButtonText
  },
  data() {
    return {
      pokemons: [],
      limit: 21,
      offsetPokemon: 0,
      isLoadingStateButton: false,
      isDisabledButton: false,
      maxPokemons: 1008,
    };
  },
  methods: {
    addPokemonTypes(pokemonData) {
      const pokemonTypes = pokemonData.types.map((type) => type.type.name);
      return pokemonTypes;
    },
    loadMorePokemons() {
      this.isLoadingStateButton = true;
      this.offsetPokemon += this.limit;
      this.loadPokemons();
    },
    loadPokemons() {
      axios
        .get(
          `https://pokeapi.co/api/v2/pokemon?limit=${this.limit}&offset=${this.offsetPokemon}`
        )
        .then(async (response) => {
          const newPokemonsPromises = response.data.results.map(
            async (result, index) => {
              const id = this.offsetPokemon + index + 1;
              const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
              const pokemonDataResponse = await axios.get(
                `https://pokeapi.co/api/v2/pokemon/${id}`
              );
              const types = this.addPokemonTypes(pokemonDataResponse.data);

              return {
                name: result.name,
                id,
                imageUrl,
                types
              };
            }
          );

          const newPokemons = await Promise.all(newPokemonsPromises);
          this.pokemons = [...this.pokemons, ...newPokemons];
          this.isLoadingStateButton = false;

          if (this.pokemons.length >= this.maxPokemons) {
            this.isDisabledButton = true;
          }
          if (this.pokemons.length === 986) {
            this.limit = 23;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
  computed: {
    loadButtonText() {
      if (this.pokemons.length >= 987 && this.pokemons.length < this.maxPokemons) {
        return "Load 23 additional Pokémons";
      }
      return "Load 21 additional Pokémons";
    }
  },
  mounted() {
    this.loadPokemons();
  }
};
</script>

<style lang="scss">
@import "../PokemonList/PokemonList.scss";
</style>

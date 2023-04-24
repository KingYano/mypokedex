<template lang="html">

    <div class="pokemon-info-card">
        <div class="pokemon-image">
            <img :src="pokemon.imageUrl" :alt="'Picture of the Pokemon'"/>
        </div>
        <div class="pokemon-details">
            <div class="pokemon-description">
                <h2 class="pokemon-name">{{ pokemon.name }}</h2>
                <h2>#{{ pokemon.id }}</h2>
            </div>
            <div class="pokemon-types">
                <p class="pokemon-type" :class="`pokemon-type-${type.toLowerCase()}`" v-for="(type, index) in pokemon.types" :key="index">
                    {{ type }}
                </p>
            </div>
        </div>

    </div>

</template>

<script lang="js">
import axios from 'axios';

export default {
  name: 'pokemon-info-card',
  components: {},
  props: {
    id: {
      type: Number,
    },
  },
  data() {
    return {
      pokemon: {},
    };
  },
  methods: {
    // capitaliseFirstLetterNamePokemon() {
    //   return this.pokemon.name.charAt(0).toUpperCase() + this.pokemon.name.slice(1);
    // },
    async fetchPokemonData() {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.id}`);
      const { id, name, types, sprites } = response.data;
      const imageUrl = sprites.front_default;

      this.pokemon = {
        id,
        name,
        types: types.map((type) => type.type.name),
        imageUrl,
      };
    },
  },
  computed: {},
  mounted() {
    this.fetchPokemonData();
  },
};
</script>

<style lang="scss">
    @import "../PokemonInfoCard/PokemonInfoCard.scss";
</style>

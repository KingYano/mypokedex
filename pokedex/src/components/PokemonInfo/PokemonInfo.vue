<template lang="html">

    <div class="pokemon-info">
        <div class="pokemon-static-content">
          <div class="pokemon-identity">
            <h2 class="pokemon-name">{{ pokemon.name }}</h2>
            <h2>#{{ pokemon.id }}</h2>
          </div>
          <div class="pokemon-visual">
              <img class="pokemon-image" :src="pokemon.imageUrl" :alt="'Picture of the Pokemon ' + pokemon.name"/>
          </div>
          <div class="pokemon-types">
              <p class="pokemon-type" :class="`pokemon-type-${type.toLowerCase()}`" v-for="(type, index) in pokemon.types" :key="index">
                  {{ type }}
              </p>
          </div>
        </div>
        <div class="separation"></div>
        <div class="pokemon-command">
            <PokemonButtonText
                :class="'pokemon-command__info'"
                texte="Information"
                variant="text"
                :disabled="false"
                @click="switchPOkemonDescription"
            />
            <PokemonButtonText
                :class="'pokemon-command__evol'"
                texte="Evolutions"
                variant="text"
                :disabled="false"
                @click="switchPOkemonEvolution"
            />
            <PokemonButtonText
                :class="'pokemon-command__games'"
                texte="Games"
                variant="text"
                :disabled="false"
                @click="switchPOkemonGames"
            />
        </div>
        <div class="pokemon-switch-content">
            <PokemonInfoDescription
               v-if="showPOkemonDescription"
            />
            <PokemonInfoEvolution
               v-if="showPOkemonEvolution"
            />
            <PokemonInfoGames
               v-if="showPOkemonGames"
            />
        </div>

    </div>

</template>

<script lang="js">
import axios from 'axios';
import PokemonButtonText from "@/components/Widgets/PokemonButtonText/PokemonButtonText.vue";
import PokemonInfoDescription from "@/components/PokemonInfo/PokemonInfoDescription/PokemonInfoDescription.vue";
import PokemonInfoEvolution from "@/components/PokemonInfo/PokemonInfoEvolution/PokemonInfoEvolution.vue";
import PokemonInfoGames from "@/components/PokemonInfo/PokemonInfoGames/PokemonInfoGames.vue";


export default {
  name: 'pokemon-info',
  components: {
    PokemonButtonText,
    PokemonInfoDescription,
    PokemonInfoEvolution,
    PokemonInfoGames
  },
  props: {
    id: {
      type: Number,
    },
  },
  data() {
    return {
      pokemon: {},
      showPOkemonDescription: true,
      showPOkemonEvolution: false,
      showPOkemonGames: false,

    };
  },
  methods: {
    async fetchPokemonData() {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.id}`);
        const { id, name, types, sprites } = response.data;
        const imageUrl = sprites.front_default;

        this.pokemon = {
          id,
          name,
          types: types.map((type) => type.type.name),
          imageUrl,
        };

        console.log('test', this.pokemon);
      } catch (error) {
        console.log('Erreur lors de la récupération des données du Pokémon:', error);
      }
    },
    switchPOkemonDescription() {
      console.log('test2', this.pokemon.name)
      this.showPOkemonDescription = true;
      this.showPOkemonEvolution = false;
      this.showPOkemonGames = false;
    },
    switchPOkemonEvolution() {
      this.showPOkemonDescription = false;
      this.showPOkemonEvolution = true;
      this.showPOkemonGames = false;
    },
    switchPOkemonGames() {
      this.showPOkemonDescription = false;
      this.showPOkemonEvolution = false;
      this.showPOkemonGames = true;
    },

    capitaliseFirstLetterNamePokemon() {
      return this.pokemon.name.charAt(0).toUpperCase() + this.pokemon.name.slice(1);
    },
  },
  computed: {
    
    },
  mounted() {
    this.fetchPokemonData();
  },
};
</script>

<style lang="scss">
    @import "../PokemonInfo/PokemonInfo.scss";
</style>

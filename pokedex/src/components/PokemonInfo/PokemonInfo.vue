<template lang="html">

    <div class="pokemon-info">
        <div class="pokemon-identity">
            <h2 class="pokemon-name">{{ pokemon.name }}</h2>
            <h2>#{{ pokemon.id }}</h2>
        </div>
        <div class="pokemon-image">
            <img :src="pokemon.imageUrl" :alt="'Picture of the Pokemon'"/>
        </div>
        <div class="pokemon-types">
            <p class="pokemon-type" :class="`pokemon-type-${type.toLowerCase()}`" v-for="(type, index) in pokemon.types" :key="index">
                {{ type }}
            </p>
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
        <div class="pokemon-content">
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
    switchPOkemonDescription() {
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

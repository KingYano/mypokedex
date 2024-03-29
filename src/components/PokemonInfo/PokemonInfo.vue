<template lang="html">

  <div class="pokemon-info">
    <div class="pokemon-progress-loader" v-if="isLoading">
      <PokemonProgressLoading
        size=100
        width=5
        color="yellow"
      >
      </PokemonProgressLoading>
    </div>
    <div class="pokemon-info-content" v-else>
      <div class="pokemon-static-content">
        <div class="pokemon-identity">
          <h2 class="pokemon-name">{{ capitaliseFirstLetterName }}</h2>
          <h2>#{{ Number(pokemon.id) }}</h2>
        </div>
        <div class="pokemon-visual">
            <img class="pokemon-image" :src="pokemon.imageUrl" :alt="'Picture of the Pokemon ' + capitaliseFirstLetterName"/>
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
            @click="switchPokemonDescription"
        />
        <PokemonButtonText
            :class="'pokemon-command__evol'"
            texte="Evolutions"
            variant="text"
            :disabled="false"
            @click="switchPokemonEvolution"
        />
        <PokemonButtonText
            :class="'pokemon-command__games'"
            texte="Games"
            variant="text"
            :disabled="false"
            @click="switchPokemonGames"
        />
      </div>
      <div class="pokemon-switch-content">
        <PokemonInfoDescription
            v-if="showPokemonDescription"
            :weight="Number(formattedWeight)"
            :height="Number(formattedHeight)"
            :abilities="pokemon.abilities"
            :description="cleanedDescription"
        />
        <PokemonInfoEvolution
            v-if="showPokemonEvolution"
            :evolutions="pokemon.evolutions"
        />
        <PokemonInfoGames
            v-if="showPokemonGames"
            :gameVersions="gameVersions"
        />
      </div>
    </div>
  </div>

</template>

<script lang="js">
import axios from 'axios';

import PokemonProgressLoading from "@/components/Widgets/PokemonProgressLoading/PokemonProgressLoading.vue";
import PokemonButtonText from "@/components/Widgets/PokemonButtonText/PokemonButtonText.vue";

import PokemonInfoDescription from "@/components/PokemonInfo/PokemonInfoDescription/PokemonInfoDescription.vue";
import PokemonInfoEvolution from "@/components/PokemonInfo/PokemonInfoEvolution/PokemonInfoEvolution.vue";
import PokemonInfoGames from "@/components/PokemonInfo/PokemonInfoGames/PokemonInfoGames.vue";


export default {
  name: 'pokemon-info',
  components: {
    PokemonProgressLoading,
    PokemonButtonText,
    PokemonInfoDescription,
    PokemonInfoEvolution,
    PokemonInfoGames
  },
  props: {
    id: {
      type: String,
    },
  },
  data() {
    return {
      pokemon: {},
      evolutions: [],
      gameVersions: [],
      showPokemonDescription: true,
      showPokemonEvolution: false,
      showPokemonGames: false,
      isLoading: true,
    };
  },
  methods: {
    async fetchPokemonData() {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.id}`);
        const responseSpecies = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${this.id}`);

        const { id, name, types, sprites, abilities, weight, height, game_indices } = response.data;
        const { flavor_text_entries } = responseSpecies.data;
        const imageUrl = sprites.front_default;

        // Filter English description
        const description = flavor_text_entries.find((entry) => entry.language.name === 'en');

        // Fetch game names
        const gameVersions = response.data.game_indices.map((index) => index.version.name);
        this.gameVersions = gameVersions;

        // Récupérez les données de la chaîne d'évolution
        const evolutionChainUrl = responseSpecies.data.evolution_chain.url;
        const evolutionChainResponse = await axios.get(evolutionChainUrl);
        const evolutionChainData = evolutionChainResponse.data;

        // Récupérez les informations d'évolution
        const evolutions = this.searchEvolutions(evolutionChainData.chain);

        this.pokemon = {
          id,
          name,
          types: types.map((type) => type.type.name),
          abilities: abilities.map((ability) => ability.ability.name),
          weight,
          height,
          game_indices,
          description: description.flavor_text,
          imageUrl,
          evolutions,
        };

        this.isLoading = false;
      } catch (error) {
        console.log('Erreur lors de la récupération des données du Pokémon:', error);
        this.isLoading = false;
      }
    },

    searchEvolutions(evolutionData) {
      const evolutions = [];

      const searchEvolution = (data) => {
        const evolutionDetails = data.evolution_details[0];
        const name = data.species.name;
        const pokemonId = data.species.url.split('/')[6];
        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
        const level = evolutionDetails ? evolutionDetails.min_level : null;

        evolutions.push({
          name,
          imageUrl,
          level,
        });

        if (data.evolves_to.length > 0) {
          data.evolves_to.forEach((evolvesTo) => {
            searchEvolution(evolvesTo);
          });
        }
      };

      searchEvolution(evolutionData);
      return evolutions;
    },

    // Switch entre les différents composants
    switchPokemonDescription() {
      this.showPokemonDescription = true;
      this.showPokemonEvolution = false;
      this.showPokemonGames = false;
    },
    switchPokemonEvolution() {
      this.showPokemonDescription = false;
      this.showPokemonEvolution = true;
      this.showPokemonGames = false;
    },
    switchPokemonGames() {
      this.showPokemonDescription = false;
      this.showPokemonEvolution = false;
      this.showPokemonGames = true;
    },
  },

  computed: {

    capitaliseFirstLetterName() {
      if (this.pokemon && this.pokemon.name) {
        return this.pokemon.name.charAt(0).toUpperCase() + this.pokemon.name.slice(1);
      }
      return '';
    },
    // Récupère la description de l'API afin de corriger la phrase
    cleanedDescription() {
      if (this.pokemon && this.pokemon.description) {
        const description = this.pokemon.description;
        const cleanedText = description.replace(/\n/g, ' ').replace(/\f/g, '').trim().toLowerCase();
        return cleanedText;
      }
      return '';
    },

    // Récupère les valeurs height et weight pour ajouter la décimale
    formattedWeight() {
      if (this.pokemon && this.pokemon.weight !== "") {
        const weight = this.pokemon.weight / 10; // Conversion de l'unité en kilogrammes
        return weight.toFixed(1); // Formater avec une décimale
      }
      return 0; // Valeur par défaut si weight est vide
    },
    formattedHeight() {
      if (this.pokemon && this.pokemon.height !== "") {
        const height = this.pokemon.height / 10; // Conversion de l'unité en mètres
        return height.toFixed(1); // Formater avec une décimale
      }
      return 0; // Valeur par défaut si height est vide
    }
  },
  mounted() {
    this.fetchPokemonData();
  },
};
</script>

<style lang="scss">
@import "../PokemonInfo/PokemonInfo.scss";
</style>

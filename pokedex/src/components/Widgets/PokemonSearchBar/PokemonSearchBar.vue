<template lang="html">

    <div class="widget-search-bar">
        <v-text-field
            class="search-bar-component"
            :loading="loading"
            :bg-color="bgColor"
            :append-inner-icon="appendIcon"
            :placeholder="placeholder"
            counter="true"
            density="compact"
            variant="solo"
            clearable
            hide-details
            @keyup.enter="searchPokemon"
            v-model="searchTerm"
        ></v-text-field>
    </div>

</template>

<script lang="js">
import axios from 'axios';

    export default  {
        name: 'widget-search-bar',
        components: {

        },
        props: {
            loading: {
                type: Boolean,
                default: false,
            },
            bgColor : {
                type: String,
                default: '',
            },
            appendIcon : {
                type: String,
                default: '',
            },
            placeholder : {
                type: String,
                default: '',
            },
        },
        data () {
            return {

            }
        },
        methods: {
            async searchPokemon() {
                try {
                    const searchTerm = this.searchTerm.toLowerCase();
                    let endpoint = '';

                    if (!isNaN(searchTerm)) {
                        // Si c'est un nombre, recherche par numéro
                        endpoint = `https://pokeapi.co/api/v2/pokemon/${searchTerm}`;
                    } else {
                        // Sinon, recherche par nom
                        endpoint = 'https://pokeapi.co/api/v2/pokemon?limit=1000'; // Augmentez le nombre si nécessaire
                    }

                    const response = await axios.get(endpoint);
                    const pokemonData = response.data;

                    if (!isNaN(searchTerm)) {
                        // Si la recherche est par numéro, affichez les données du Pokémon correspondant
                        console.log(pokemonData);
                    } else {
                        // Si la recherche est par nom, filtrez les résultats
                        const filteredPokemon = pokemonData.results.filter(pokemon => pokemon.name.startsWith(searchTerm));
                        console.log(filteredPokemon);
                    }
                } catch (error) {
                    // Gérez les erreurs ici
                    console.error('Erreur lors de la recherche de Pokémon :', error);
                }
            },
        },
        computed: {

        }
    }
</script>

<style lang="scss">
    @import "../PokemonSearchBar/PokemonSearchBar.scss";
</style>

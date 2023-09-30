<template lang="html">

    <div class="widget-search-bar" ref="searchBarRoot">
        <v-text-field
            class="search-bar-component"
            :class="{ 'search-bar-component--active': searchActive }"
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
            @click:clear="resetSearch"
            @input="resetInput"
            v-model="searchTerm"
        ></v-text-field>
        <div class="search-bar-list" :class="{ 'search-bar-list--active': searchActive }">
            <div class="search-bar-item" v-for="(pokemon) in searchResults" :key="pokemon.id">
                <p>{{ pokemon.id }} - {{ capitaliseNamePokemon(pokemon.name) }}</p>
            </div>
                <p class="search-bar-more" v-if="detailedPokemonDataLength > 5">And {{ detailedPokemonDataLength - 5 }} more...</p>
            <div class="search-bar-list-empty"  v-if="searchResults.length === 0 && searchActive">
                <p>Aucun Pokémon trouvé.</p>
            </div>
        </div>
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
                searchTerm: '',
                searchResults: [],
                searchActive: false,
                detailedPokemonDataLength: '',
            }
        },
         mounted() {
            // Ajoutez un écouteur d'événements click pour gérer les clics en dehors du composant
            document.addEventListener('click', this.isOutsideClick);
        },
        /* eslint-disable */
        beforeDestroy() {
            // Supprimez l'écouteur d'événements click lors de la destruction du composant
            document.removeEventListener('click', this.isOutsideClick);
        },
        methods: {
            async searchPokemon() {
                try {
                    const searchTerm = this.searchTerm.toLowerCase();
                    let endpoint = '';

                    if (!isNaN(searchTerm)) {
                        endpoint = `https://pokeapi.co/api/v2/pokemon/${searchTerm}`;
                    } else {
                        endpoint = 'https://pokeapi.co/api/v2/pokemon?limit=1000'; // Augmentez le nombre si nécessaire
                    }

                    const response = await axios.get(endpoint);
                    const pokemonData = response.data;

                    if (!isNaN(searchTerm)) {
                        const basicInfo = {
                            id: pokemonData.id,
                            name: pokemonData.name,
                        };
                        this.searchResults = [basicInfo];
                        this.searchActive = true;
                    } else {
                        const filteredPokemon = pokemonData.results.filter(pokemon => pokemon.name.startsWith(searchTerm));

                        const detailedPokemonPromises = filteredPokemon.map(async pokemon => {
                            const detailedResponse = await axios.get(pokemon.url);
                            return {
                            id: detailedResponse.data.id,
                            name: detailedResponse.data.name,
                            };
                        });

                        const detailedPokemonData = await Promise.all(detailedPokemonPromises);

                        console.log(detailedPokemonData.length);
                        this.detailedPokemonDataLength = detailedPokemonData.length;
                        console.log(this.detailedPokemonDataLength);


                        this.searchResults = detailedPokemonData.slice(0, 5);

                        this.searchActive = true;
                    }
                } catch (error) {
                    console.error('Erreur lors de la recherche de Pokémon :', error);
                    this.searchActive = false;
                }
            },

            isOutsideClick(event) {
                // Vérifiez si l'élément cliqué est en dehors du composant
                if (
                    this.$refs.searchBarRoot &&
                    !this.$refs.searchBarRoot.contains(event.target)
                ) {
                    this.resetSearch(); // Fermez la liste de résultats
                }
            },

            resetInput() {
                if (this.searchTerm === '') {
                this.resetSearch();
                }
            },

            resetSearch() {
                this.searchResults = [];
                this.searchActive = false;
                this.searchTerm = '';
            },

            capitaliseNamePokemon(name) {
                return name.charAt(0).toUpperCase() + name.slice(1)
            }
        },
        computed: {

        }
    }
</script>

<style lang="scss">
    @import "../PokemonSearchBar/PokemonSearchBar.scss";
</style>

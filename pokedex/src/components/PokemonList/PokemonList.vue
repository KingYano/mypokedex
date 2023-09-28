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
                :disabled="this.offsetPokemon + this.limit >= maxPokemons ? isDisabledButton = true : isDisabledButton = false "
                :loading="isLoadingStateButton"
                @click="loadMorePokemons"
                texte="Load 21 additional Pokémons"
            >
            </PokemonButtonText>
        </div>
    </div>

</template>

<script lang="js">
import axios from 'axios';
import PokemonCard from "@/components/PokemonCard/PokemonCard.vue";
import PokemonButtonText from "@/components/Widgets/PokemonButtonText/PokemonButtonText.vue";

    export default  {
        name: 'pokemon-list',
        components: {
            PokemonCard,
            PokemonButtonText
        },
        props: {

        },
        data() {
            return {
                pokemons: [],
                limit: 21,
                offsetPokemon: 0,
                isLoadingStateButton: false,
                isDisabledButton: false,
                maxPokemons: 100000,
            };
        },
        methods: {
            // Retrieve the types of pokemons
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
                .get(`https://pokeapi.co/api/v2/pokemon?limit=${this.limit}&offset=${this.offsetPokemon}`)
                .then(async (response) => {
                    const newPokemonsPromises = response.data.results.map(async (result, index) => {
                        const id = this.offsetPokemon + index + 1;
                        // Récupère les images des pokemons
                        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

                        // Récupère les type des pokemons
                        const pokemonDataResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
                        const types = this.addPokemonTypes(pokemonDataResponse.data);

                        return {
                            name: result.name,
                            id,
                            imageUrl,
                            types,
                        };
                    });

                    const newPokemons = await Promise.all(newPokemonsPromises);
                    this.pokemons = [...this.pokemons, ...newPokemons];
                    this.isLoadingStateButton = false;
                })
                .catch((error) => {
                    console.log(error);
                });
            },
        },
        computed: {

        },
        mounted() {
            this.loadPokemons();
        },
}
</script>

<style lang="scss">
    @import "../PokemonList/PokemonList.scss";
</style>
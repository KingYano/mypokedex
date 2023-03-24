<template lang="html">

    <div class="pokemon-list">
        <h1>Liste des Pokemons</h1>
        <div class="pokemon-list-container">
            <PokemonCard v-for="pokemon in pokemons" :key="pokemon.name"
                :name="pokemon.name"
                :id="pokemon.id"
                :types="pokemon.types"
                :imageUrl="pokemon.imageUrl"
            />
        </div>
    </div>

</template>

<script lang="js">
import axios from 'axios';
import PokemonCard from "@/components/PokemonCard/PokemonCard.vue";

    export default  {
        name: 'pokemon-list',
        components: {
            PokemonCard,
        },
        props: {

        },
        data () {
            return {
                pokemons: [],
            }
        },
        methods: {
            getPokemonTypes() {
                this.pokemons.forEach((pokemon) => {
                    axios
                    .get(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`)
                    .then((response) => {
                        const types = response.data.types.map((type) => type.type.name);
                        pokemon.types = types;
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                });
            },
        },
        computed: {

        },
        mounted() {
            axios
            .get("https://pokeapi.co/api/v2/pokemon?limit=1500")
            .then((response) => {
                this.pokemons = response.data.results.map((result, index) => {
                const id = index + 1;
                const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

                return {
                    name: result.name,
                    id,
                    imageUrl,
                    types: [],
                };
                });
                this.getPokemonTypes();
            })
            .catch((error) => {
                console.log(error);
            });
        },
    }
</script>

<style lang="scss">

</style>

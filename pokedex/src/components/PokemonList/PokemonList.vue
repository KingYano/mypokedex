<template lang="html">

    <div class="pokemon-list">
        <div class="pokemon-list-container">
            <PokemonCard v-for="pokemon in pokemons" :key="pokemon.name"
                :name="pokemon.name"
                :id="pokemon.id"
                :types="pokemon.types"
                :imageUrl="pokemon.imageUrl"
            />
        </div>
        <div class="pokemon-pagination-container">
            <Pagination
                color="white"
                rounded="circle"
                length=""
            ></Pagination>
        </div>
    </div>

</template>

<script lang="js">
import axios from 'axios';
import PokemonCard from "@/components/PokemonCard/PokemonCard.vue";
import Pagination from "@/components/Widgets/Pagination/Pagination.vue";

    export default  {
        name: 'pokemon-list',
        components: {
            PokemonCard,
            Pagination
        },
        props: {

        },
        data () {
            return {
                pokemons: [],
                length: '',
            }
        },
        methods: {
            // Retrieve the types of pokemons
            getPokemonTypes() {
                axios
                .get("https://pokeapi.co/api/v2/type")
                .then((response) => {
                    const types = response.data.results.map((result) => result.name);
                    this.pokemons.forEach((pokemon) => {
                    axios
                        .get(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`)
                        .then((response) => {
                        const pokemonTypes = response.data.types.map((type) => type.type.name);
                        pokemon.types = pokemonTypes.filter((type) => types.includes(type));
                        })
                        .catch((error) => {
                        console.log(error);
                        });
                    });
                })
                .catch((error) => {
                    console.log(error);
                });
            },
        },
        computed: {

        },
        mounted() {
            axios
            .get("https://pokeapi.co/api/v2/pokemon?limit=0")
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
    @import "../PokemonList/PokemonList.scss";
</style>

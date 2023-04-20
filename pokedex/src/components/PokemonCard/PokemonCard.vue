<template lang="html">

    <a href="#" class="pokemon-card">
        <div class="pokemon-image">
            <img :src="imageUrl" :alt="'Picture of the Pokemon ' + capitaliseFirstLetterNamePokemon()"/>
        </div>
        <div class="pokemon-details">
            <div class="pokemon-description">
                <h2 class="pokemon-name">{{ name }}</h2>
                <h2>#{{ id }}</h2>
            </div>
            <div class="pokemon-types">
                <p class="pokemon-type" :class="`pokemon-type-${type.toLowerCase()}`" v-for="(type, index) in types" :key="index">
                    {{ type }}
                </p>
            </div>
        </div>
    </a>

</template>

<script lang="js">

    export default  {
        name: 'pokemon-card',
        components: {

        },
        props: {
            name: {
                type: String,
                default: '',
            },
            id: {
                type: Number,
                default: 0,
            },
            types: {
                type: Array,
                default: () => [],
            },
            imageUrl: {
                type: String,
                default: '',
            },
        },
        data () {
            return {

            }
        },
        methods: {
            capitaliseFirstLetterNamePokemon() {
                return this.name.charAt(0).toUpperCase() + this.name.slice(1)
            }
        },
        computed: {

        }
    }
</script>

<style lang="scss">
    @import "../PokemonCard/PokemonCard.scss";
</style>
